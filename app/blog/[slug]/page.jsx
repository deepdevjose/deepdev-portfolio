import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticleBySlug } from '../../modules/userDefined/blogs/articlesData';
import style from '../../modules/userDefined/blogs/fullBlog.module.css';

// Generate static paths for all articles
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// Simple markdown to HTML converter
function formatMarkdown(content) {
    if (!content) return '';

    return content
        // Code blocks with language
        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="code-block"><code>$2</code></pre>')
        // Headers
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
        // Images
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="article-image"><img src="$2" alt="$1" /><figcaption>$1</figcaption></figure>')
        // Lists
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        // Paragraphs (wrap text blocks)
        .split('\n\n')
        .map(block => {
            if (block.startsWith('<')) return block;
            if (block.trim() === '') return '';
            return `<p>${block}</p>`;
        })
        .join('\n');
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <div className={style.blogSection}>
            <article className={style.blog}>
                <img
                    src={article.cover_image}
                    className={style.blogimg}
                    alt={article.title}
                />
                <div className={style.blogBox}>
                    <div className={style.categoryBadge}>{article.category}</div>
                    <h1 className={style.blogTitle}>{article.title}</h1>
                    <div className={style.date}>
                        <span>{article.date}</span>
                        <span>✦︎</span>
                        <span>{article.reading_time}</span>
                    </div>
                    
                    {article.downloadUrl && (
                        <a 
                            href={article.downloadUrl} 
                            download
                            className={style.downloadButton}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download Article (PDF)
                        </a>
                    )}

                    <div
                        className={style.markdownContent}
                        dangerouslySetInnerHTML={{ __html: formatMarkdown(article.content) }}
                    />

                    <div className={style.tagsContainer}>
                        {article.tags.map((tag, i) => (
                            <span key={i} className={style.tag}>
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            {/* Navigation to other articles */}
            <div className={style.moreArticles}>
                <h3>More Articles</h3>
                <div className={style.relatedGrid}>
                    {articles
                        .filter(a => a.slug !== slug)
                        .slice(0, 3)
                        .map(a => (
                            <Link href={`/blog/${a.slug}`} key={a.id} className={style.relatedCard}>
                                <span className={style.relatedCategory}>{a.category}</span>
                                <span className={style.relatedTitle}>{a.title}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
