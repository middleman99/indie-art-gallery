// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase'
const AuthContext = createContext(null)
export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        const snap = await getDoc(doc(db, 'users', firebaseUser.uid))
        if (snap.exists()) {
          const data = snap.data()
          setProfile(data)
        }
      } else {
        setUser(null)
        setProfile(null)
      }
      setLoading(false)
    })
    return unsub
  }, [])
  async function signup({ email, password, displayName, role }) {
    const normalizedEmail = email.trim().toLowerCase()
    const cred = await createUserWithEmailAndPassword(auth, normalizedEmail, password)
    await updateProfile(cred.user, { displayName })
    const userData = {
      uid: cred.user.uid,
      email: normalizedEmail,
      displayName,
      displayNameLower: displayName.trim().toLowerCase(),
      role,
      bio: '',
      avatarUrl: '',
      artTypes: [],
      instagram: '',
      website: '',
      stripeAccountId: null,
      // FIX (Stripe onboarding bug): stripeAccountId alone was being used to mean
      // "connected", but it's set the instant a shell account is created - before
      // the artist ever completes real onboarding. This new field is only ever
      // set true after Stripe confirms payoutsEnabled + detailsSubmitted, via the
      // get_account_status check in ConnectStripe.jsx / Profile.jsx.
      stripeOnboardingComplete: false,
      isBanned: false,
      isVerified: false,
      followerCount: 0,
      totalSales: 0,
      createdAt: serverTimestamp(),
      termsAcceptedAt: serverTimestamp(),
    }
    await setDoc(doc(db, 'users', cred.user.uid), userData)
    setProfile(userData)
    return cred
  }
  async function login({ email, password }) {
    const cred = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), password)
    const snap = await getDoc(doc(db, 'users', cred.user.uid))
    if (snap.exists()) setProfile(snap.data())
    return cred
  }
  async function logout() {
    await signOut(auth)
    setProfile(null)
  }
  async function refreshProfile() {
    if (!user) return
    const snap = await getDoc(doc(db, 'users', user.uid))
    if (snap.exists()) setProfile(snap.data())
  }
  const isArtist = profile?.role === 'artist' || profile?.role === 'both'
  const isAdmin  = profile?.email?.toLowerCase() === 'manager@middlemanmerchants.com'
  return (
    <AuthContext.Provider value={{ user, profile, loading, isArtist, isAdmin, signup, login, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)