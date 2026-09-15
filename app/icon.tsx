import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0e27',
          color: '#00d9ff',
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        GZ
      </div>
    ),
    { ...size }
  );
}
