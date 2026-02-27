"use client"
import style from "./blogs.module.css";
import Link from 'next/link';
import Image from 'next/image';
import LinkButton from "../buttons/MoreBlogs/moreBlogs"

// Static article data - curated technical articles
// Order: Research (HERO) → Systems Impact → Depth & Reflection → Physical Reality
const articles = [
    {
        id: 1,
        slug: "ai-driven-health-twin",
        title: "Validating an AI-Driven Health Twin for Industrial Robot Arms",
        description: "Exploring the design and academic validation of an AI-powered predictive health twin for industrial robot arms, focused on anticipating failures before they propagate into costly shutdowns.",
        category: "AI Research",
        reading_time: "8 min read",
        cover_image: "/blogs/health-twin-cover.jpg",
        date: "2025 – Present",
        isHero: true
    },
    {
        id: 2,
        slug: "virtual-dynamic-museum",
        title: "Engineering a Virtual and Dynamic Museum for Digital Cultural Preservation",
        description: "Documenting the engineering and deployment of a virtual museum system developed to preserve and present the artistic legacy of Byron Gálvez.",
        category: "Academic Project",
        reading_time: "9 min read",
        cover_image: "/blogs/museum-cover.jpg",
        date: "2025"
    },
    {
        id: 11,
        slug: "vision-language-runtime-browser",
        title: "Building a Vision-Language Model Runtime That Runs Entirely in Your Browser",
        description: "Engineering a privacy-first, zero-dependency vision-language system using WebGPU, vanilla JavaScript, and Apple's FastVLM model—no frameworks, no servers, no API calls.",
        category: "AI Systems",
        reading_time: "10 min read",
        cover_image: "/blogs/vlmr_cover.png",
        date: "2025 – 2026"
    }
];

export default function Blogs() {
    const heroArticle = articles[0];
    const secondaryArticles = articles.slice(1);

    return (
        <div className={style.blogSection}>
            <div className={style.title}>
                <h1>Technical Articles</h1>
            </div>

            <div className={style.editorialGrid}>
                {/* Hero Article - Left Side */}
                <Link
                    href={`/blog/${heroArticle.slug}`}
                    className={style.heroCard}
                    data-category={heroArticle.category.toLowerCase().replace(/\s+/g, '-')}
                >
                    <div className={style.heroImageWrapper}>
                        <Image 
                            src={heroArticle.cover_image} 
                            alt={heroArticle.title} 
                            className={style.heroCoverImage}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className={style.heroOverlay}></div>
                    </div>
                    <div className={style.heroContent}>
                        <div className={style.categoryBadge} data-category={heroArticle.category.toLowerCase().replace(/\s+/g, '-')}>{heroArticle.category}</div>
                        <div className={style.heroTitle}>{heroArticle.title}</div>
                        <div className={style.date}>
                            {heroArticle.date} · {heroArticle.reading_time.replace(' read', '')}
                        </div>
                    </div>
                </Link>

                {/* Secondary Articles - Right Stack */}
                <div className={style.secondaryStack}>
                    {secondaryArticles.map((article) => (
                        <Link
                            href={`/blog/${article.slug}`}
                            className={style.secondaryCard}
                            key={article.id}
                            data-category={article.category.toLowerCase().replace(/\s+/g, '-')}
                        >
                            <div className={style.secondaryImageWrapper}>
                                <Image 
                                    src={article.cover_image} 
                                    alt={article.title} 
                                    className={style.secondaryCoverImage}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={style.secondaryContent}>
                                <div className={style.categoryBadgeSmall} data-category={article.category.toLowerCase().replace(/\s+/g, '-')}>{article.category}</div>
                                <div className={style.secondaryTitle}>{article.title}</div>
                                <div className={style.dateSmall}>
                                    {article.date} · {article.reading_time.replace(' read', '')}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={style.moreBlogs}>
                <LinkButton href="/blog" label="View All Articles" />
            </div>
        </div>
    );
}
