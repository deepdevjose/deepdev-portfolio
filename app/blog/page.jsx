'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { articles } from '../modules/userDefined/blogs/articlesData';
import style from '../modules/userDefined/blogs/blogIndex.module.css';

// Dynamic import with SSR disabled and loading fallback
const GlassSurface = dynamic(
    () => import('@/components/Components/GlassSurface/GlassSurface'),
    {
        ssr: false,
        loading: () => <div style={{ width: 100, height: 50, background: 'rgba(255,255,255,0.1)', borderRadius: 24 }} />
    }
);

const categories = ['All', 'Research', 'Engineering', 'AI', 'Robotics', 'STEM'];

export default function BlogIndex() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('newest');

    // Filter articles based on search and category
    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = activeCategory === 'All' ||
            article.category.toLowerCase().includes(activeCategory.toLowerCase());

        return matchesSearch && matchesCategory;
    });

    // Featured article (first one)
    const featuredArticle = articles[0];
    const gridArticles = activeCategory === 'All' && searchQuery === ''
        ? filteredArticles.slice(1)
        : filteredArticles;

    return (
        <>
            {/* Blog Index Navbar */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                padding: '20px'
            }}>
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
                        ← Home
                    </Link>
                </GlassSurface>
            </nav>

            <div className={style.blogIndexPage} style={{ paddingTop: '100px' }}>
                {/* Editorial Hero */}
                <header className={style.editorialHero}>
                    <h1 className={style.heroTitle}>Technical Articles</h1>
                    <p className={style.heroSubtitle}>
                        Research notes, engineering write-ups, and build logs.
                    </p>

                    {/* Controls Row */}
                    <div className={style.controlsRow}>
                        {/* Search */}
                        <div className={style.searchBox}>
                            <svg className={style.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={style.searchInput}
                            />
                        </div>

                        {/* Filter Chips */}
                        <div className={style.filterChips}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`${style.chip} ${activeCategory === cat ? style.chipActive : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Sort */}
                        <select
                            className={style.sortSelect}
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </header>

                {/* Featured Article (only show when no filters) */}
                {activeCategory === 'All' && searchQuery === '' && (
                    <section className={style.featuredSection}>
                        <div className={style.featuredLabel}>Featured</div>
                        <Link href={`/blog/${featuredArticle.slug}`} className={style.featuredCard}>
                            <img
                                src={featuredArticle.cover_image}
                                alt={featuredArticle.title}
                                className={style.featuredImage}
                            />
                            <div className={style.featuredContent}>
                                <span className={style.categoryBadge}>{featuredArticle.category}</span>
                                <h2 className={style.featuredTitle}>{featuredArticle.title}</h2>
                                <p className={style.featuredDescription}>{featuredArticle.description}</p>
                                <div className={style.featuredMeta}>
                                    <span>{featuredArticle.date}</span>
                                    <span>✦︎</span>
                                    <span>{featuredArticle.reading_time}</span>
                                </div>
                                <div className={style.tagsRow}>
                                    {featuredArticle.tags.map((tag, i) => (
                                        <span key={i} className={style.tagSmall}>#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </section>
                )}

                {/* Articles Grid */}
                <section className={style.articlesSection}>
                    {gridArticles.length > 0 ? (
                        <div className={style.articlesGrid}>
                            {gridArticles.map((article, index) => {
                                // Alternate featured style for first article and every 4th
                                const isFeatured = index === 0 || index === 4;
                                const cardClass = `${style.articleCard} ${isFeatured ? style.articleCardFeatured : ''}`;

                                return (
                                    <Link
                                        href={`/blog/${article.slug}`}
                                        key={article.id}
                                        className={cardClass}
                                    >
                                        <img
                                            src={article.cover_image}
                                            alt={article.title}
                                            className={style.articleCover}
                                        />
                                        <div className={style.articleContent}>
                                            <span className={style.categoryBadgeSmall}>{article.category}</span>
                                            <h3 className={style.articleTitle}>{article.title}</h3>
                                            <div className={style.articleMeta}>
                                                <span>{article.date}</span>
                                                <span>✦︎</span>
                                                <span>{article.reading_time}</span>
                                            </div>
                                            <p className={style.articleDescription}>{article.description}</p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className={style.noResults}>
                            <p>No articles found matching your search.</p>
                        </div>
                    )}
                </section>

                {/* Back to top */}
                <div className={style.backToTop}>
                    <button onClick={() => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })}>
                        ↑ Back to top
                    </button>
                </div>
            </div>
        </>
    );
}