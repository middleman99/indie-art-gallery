// worker/certificate.js
// Ported from netlify/functions/certificate.js. The Node Buffer.from(pdfBytes)
// step was dropped - Blob accepts the Uint8Array pdf-lib already returns
// directly, so no Node Buffer polyfill is needed for this one.
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function handleCertificate(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const { action, data } = body;
  if (action !== 'generate_certificate') {
    return json({ error: 'Unknown action' }, 400);
  }

  const { pieceTitle, artistName, buyerName, salePrice, orderId } = data || {};
  if (!pieceTitle || !artistName || !buyerName || !salePrice || !orderId) {
    return json({ error: 'Missing required certificate fields' }, 400);
  }

  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([792, 612]); // US Letter, landscape
    const { width, height } = page.getSize();

    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

    const gold = rgb(0.72, 0.53, 0);
    const charcoal = rgb(0.1, 0.1, 0.15);
    const slate = rgb(0.4, 0.4, 0.45);

    const margin = 24;
    page.drawRectangle({
      x: margin,
      y: margin,
      width: width - margin * 2,
      height: height - margin * 2,
      borderColor: gold,
      borderWidth: 2,
    });
    page.drawRectangle({
      x: margin + 8,
      y: margin + 8,
      width: width - (margin + 8) * 2,
      height: height - (margin + 8) * 2,
      borderColor: gold,
      borderWidth: 0.5,
    });

    function centerText(text, y, font, size, color) {
      const textWidth = font.widthOfTextAtSize(text, size);
      page.drawText(text, { x: (width - textWidth) / 2, y, size, font, color });
    }

    centerText('CERTIFICATE OF AUTHENTICITY', height - 100, helveticaBold, 22, charcoal);
    centerText('Indie Art Gallery', height - 128, helvetica, 11, slate);

    centerText('This certifies that', height - 200, helvetica, 12, slate);
    centerText(buyerName, height - 226, helveticaBold, 18, charcoal);
    centerText('is the verified owner of the original work', height - 250, helvetica, 12, slate);

    centerText(`"${pieceTitle}"`, height - 300, timesItalic, 24, gold);
    centerText(`by ${artistName}`, height - 328, helvetica, 14, charcoal);

    const saleDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    centerText(`Sold on Indie Art Gallery for $${salePrice} on ${saleDate}`, height - 380, helvetica, 11, slate);

    centerText(`Order Reference: ${orderId}`, margin + 40, helvetica, 9, slate);

    const pdfBytes = await pdfDoc.save();

    const CLOUDINARY_CLOUD = env.VITE_CLOUDINARY_CLOUD_NAME;
    const CLOUDINARY_PRESET = env.VITE_CLOUDINARY_UPLOAD_PRESET;
    if (!CLOUDINARY_CLOUD || !CLOUDINARY_PRESET) {
      return json({ error: 'Cloudinary config missing on server' }, 500);
    }

    const formData = new FormData();
    formData.append('file', new Blob([pdfBytes], { type: 'application/pdf' }), `certificate-${orderId}.pdf`);
    formData.append('upload_preset', CLOUDINARY_PRESET);
    formData.append('folder', 'indie-art-gallery/certificates');

    const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/raw/upload`, {
      method: 'POST',
      body: formData,
    });
    const uploadResult = await uploadRes.json();

    if (!uploadRes.ok || uploadResult.error) {
      console.error('Cloudinary certificate upload failed:', uploadResult.error || uploadResult);
      return json({ error: (uploadResult.error && uploadResult.error.message) || 'Certificate upload failed' }, 500);
    }

    return json({ certificateUrl: uploadResult.secure_url });
  } catch (err) {
    console.error('Certificate generation error:', err);
    return json({ error: err.message }, 500);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
