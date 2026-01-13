'use client';

import Link from "next/link";
import dynamic from 'next/dynamic';
import Wallpaper from "./modules/userDefined/wallpaper/wallpaper";

// Dynamic import of GlassSurface to avoid SSR issues
const GlassSurface = dynamic(
  () => import('@/components/Components/GlassSurface/GlassSurface'),
  {
    ssr: false,
    loading: () => (
      <div style={{
        width: 180,
        height: 50,
        background: 'rgba(255,255,255,0.1)',
        borderRadius: 100
      }} />
    )
  }
);

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body), system-ui, sans-serif'
    }}>
      {/* Animated gradient background */}
      <Wallpaper />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Glowing 404 */}
        <h1 style={{
          fontSize: 'clamp(6rem, 20vw, 12rem)',
          fontWeight: 900,
          margin: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.5) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 80px rgba(255,255,255,0.2)',
          letterSpacing: '-0.05em',
          animation: 'pulse404 3s ease-in-out infinite'
        }}>
          404
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
          color: 'rgba(255, 255, 255, 0.75)',
          marginTop: '8px',
          marginBottom: '8px',
          fontWeight: 500
        }}>
          Page not found
        </p>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          color: 'rgba(255, 255, 255, 0.45)',
          marginBottom: '40px',
          maxWidth: '400px',
          lineHeight: 1.6
        }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Glass button with real shader effect */}
        <GlassSurface width={180} height={50} borderRadius={100} displace={3}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.95rem',
              fontWeight: 500,
              textDecoration: 'none',
              gap: '8px'
            }}
          >
            ← Back to Home
          </Link>
        </GlassSurface>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse404 {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.85;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}
