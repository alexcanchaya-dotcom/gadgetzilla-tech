import { ImageResponse } from 'next/og';

export const alt = 'GadgetZilla - curated gadgets for gamers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1d2e 50%, #0a0e27 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 6, color: '#00d9ff', textTransform: 'uppercase' }}>
          gadgetzilla.tech
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>
          Curated gadgets for gamers
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#cbd5e1', marginTop: 24 }}>
          Amazon Associate catalog. Confirm prices on Amazon.
        </div>
      </div>
    ),
    { ...size }
  );
}
