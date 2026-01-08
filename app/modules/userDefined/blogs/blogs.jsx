"use client"
import style from "./blogs.module.css";
import Link from 'next/link';
import LinkButton from "../buttons/MoreBlogs/moreBlogs"

// Static article data - curated technical articles
// Order: Research (HERO) → Systems Impact → Depth & Reflection → Physical Reality
const articles = [
    {
        id: 1,
        slug: "webgl-virtual-museum",
        title: "Engineering a WebGL Virtual Museum for Digital Cultural Preservation",
        description: "Exploring the intersection of 3D rendering, interactive systems, and digital heritage preservation through a web-native museum experience. This project represents the convergence of visual computing, cultural studies, and modern web technologies.",
        category: "Academic Project",
        reading_time: "8 min read",
        cover_image: "/blogs/museum-cover.png",
        date: "2024",
        isHero: true
    },
    {
        id: 2,
        slug: "automated-code-evaluation",
        title: "Automated Code Evaluation at Classroom Scale Using GitHub Actions",
        description: "Building a production-grade CI/CD system for Java assignment evaluation serving 120+ concurrent students.",
        category: "Engineering",
        reading_time: "7 min read",
        cover_image: "/blogs/cicd-cover.png",
        date: "2024"
    },
    {
        id: 3,
        slug: "practical-ai-systems",
        title: "Designing Practical AI Systems Beyond Demos",
        description: "Lessons from building applied AI tools in constrained academic environments.",
        category: "AI Research",
        reading_time: "6 min read",
        cover_image: "/blogs/ai-cover.png",
        date: "2024"
    },
    {
        id: 4,
        slug: "competitive-robotics-engineering",
        title: "Engineering Competitive Robotics: Control, Constraints, and Reality",
        description: "Driver control, sensor fusion, and what competition-level robotics actually teaches.",
        category: "Robotics",
        reading_time: "9 min read",
        cover_image: "/blogs/robotics-cover.png",
        date: "2024"
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
