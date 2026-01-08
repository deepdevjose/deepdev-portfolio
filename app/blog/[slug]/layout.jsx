'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled and loading fallback
const GlassSurface = dynamic(
    () => import('@/components/Components/GlassSurface/GlassSurface'),
    {
        ssr: false,
        loading: () => <div style={{ width: 100, height: 50, background: 'rgba(255,255,255,0.1)', borderRadius: 24 }} />
    }
);

export default function ArticleLayout({ children }) {
    return (
        <>
            {/* Article Navbar: All Articles (left) | Home (center) */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                padding: '20px'
            }}>
                {/* All Articles - Left */}
                <GlassSurface width={140} height={50} borderRadius={24} displace={3}>
                    <Link
                        href="/blog"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            textDecoration: 'none'
                        }}
                    >
                        ← All Articles
                    </Link>
                </GlassSurface>

                {/* Home - Center */}
                <GlassSurface width={100} height={50} borderRadius={24} displace={3}>
                    <Link
                        href="/"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            textDecoration: 'none'
                        }}
                    >
                        ✦︎ Home
                    </Link>
                </GlassSurface>
            </nav>

            <div style={{ paddingTop: '100px' }}>
                {children}
            </div>
        </>
    );
}
