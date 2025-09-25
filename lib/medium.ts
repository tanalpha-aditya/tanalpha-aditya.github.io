// lib/medium.ts
import Parser from 'rss-parser';

export interface MediumPost {
    title: string;
    link: string;
    thumbnail: string;
    pubDate: string;
    description: string;
    rawContent?: string;
}

const parser = new Parser({ timeout: 15000 });

const extractThumbnail = (content: string, item: any) => {
    // 1) enclosure (sometimes provided)
    if (item?.enclosure?.url) return item.enclosure.url;
    // 2) media:content
    if (item?.['media:content']?.url) return item['media:content'].url;
    // 3) image tag inside HTML
    const imgMatch =
        content && content.match(/<img[^>]+src=["']([^"'>]+)["']/i);
    if (imgMatch) return imgMatch[1];
    // fallback
    return 'https://placehold.co/600x400';
};

const extractDescription = (content: string, item: any) => {
    // prefer contentSnippet or summary if available
    if (item?.contentSnippet) return item.contentSnippet;
    if (item?.summary) {
        // strip tags (short)
        return item.summary.replace(/<[^>]+>/g, '').slice(0, 200);
    }
    if (content) return content.replace(/<[^>]+>/g, '').slice(0, 200);
    return 'Click to read more.';
};

export const getMediumPosts = async (): // username = 'tanlapha-aditya',
Promise<MediumPost[]> => {
    try {
        const feedUrl = `https://medium.com/feed/@tanalpha-aditya`;

        console.log('[getMediumPosts] fetching', feedUrl);

        const feed = await parser.parseURL(feedUrl);

        console.log(
            '[getMediumPosts] feed title:',
            feed?.title,
            'items:',
            (feed.items || []).length,
        );

        if (!feed?.items?.length) return [];

        const posts: MediumPost[] = feed.items.map((item: any) => {
            const content =
                item['content:encoded'] || item.content || item.summary || '';
            const thumbnail = extractThumbnail(content, item);
            const pubDate = item.pubDate
                ? new Date(item.pubDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                  })
                : '';
            return {
                title: item.title || 'Untitled',
                link: item.link || item.guid || '#',
                thumbnail,
                pubDate,
                description: extractDescription(content, item),
                rawContent: content,
            };
        });

        return posts;
    } catch (err) {
        console.error('[getMediumPosts] Failed to fetch Medium posts:', err);
        // Return empty array so page still renders
        return [];
    }
};
