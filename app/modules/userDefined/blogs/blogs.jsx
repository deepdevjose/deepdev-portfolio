"use client"
import style from "./blogs.module.css";
import Link from 'next/link';
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
        id: 3,
        slug: "ai-virtual-psychologist",
        title: "Designing an AI-Based Virtual Psychologist for Educational Environments",
        description: "Documenting the design and institutional presentation of an AI-based virtual psychologist for educational infrastructure.",
        category: "AI Systems",
        reading_time: "9 min read",
        cover_image: "/blogs/ai-psychologist-cover.jpg",
        date: "2025"
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
                >
                    <img src={heroArticle.cover_image} alt={heroArticle.title} className={style.heroCoverImage} />
                    <div className={style.heroContent}>
                        <div className={style.categoryBadge}>{heroArticle.category}</div>
                        <div className={style.heroTitle}>{heroArticle.title}</div>
                        <div className={style.date}>
                            <div>{heroArticle.date}</div>✦︎
                            <div>{heroArticle.reading_time}</div>
                        </div>
                        <div className={style.heroDescription}>{heroArticle.description}</div>
                    </div>
                </Link>

                {/* Secondary Articles - Right Stack */}
                <div className={style.secondaryStack}>
                    {secondaryArticles.map((article) => (
                        <Link
                            href={`/blog/${article.slug}`}
                            className={style.secondaryCard}
                            key={article.id}
                        >
                            <img src={article.cover_image} alt={article.title} className={style.secondaryCoverImage} />
                            <div className={style.secondaryContent}>
                                <div className={style.categoryBadgeSmall}>{article.category}</div>
                                <div className={style.secondaryTitle}>{article.title}</div>
                                <div className={style.dateSmall}>
                                    <div>{article.date}</div>✦︎
                                    <div>{article.reading_time}</div>
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
