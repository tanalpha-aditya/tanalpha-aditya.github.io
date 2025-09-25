// app/_components/BlogSection.tsx
'use client';
import SectionTitle from '@/components/SectionTitle';
import { MediumPost } from '@/lib/medium'; // Import the type
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
    posts: MediumPost[];
}

const BlogSection = ({ posts }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.blog-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 1,
                },
                y: 100,
                opacity: 0,
                stagger: 0.2,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="blogs">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Blogs I Wrote" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* We use .slice(0, 3) to show only the latest 3 articles */}
                    {posts.slice(0, 3).map((post) => (
                        <a
                            key={post.link}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="blog-card group flex flex-col bg-background-light rounded-lg overflow-hidden transition-transform hover:-translate-y-2"
                        >
                            <div className="aspect-video overflow-hidden">
                                <Image
                                    src={post.thumbnail}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-xs text-muted-foreground">
                                    {post.pubDate}
                                </p>
                                <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground flex-grow">
                                    {post.description}
                                </p>
                                <span className="text-xs font-semibold text-primary mt-4 self-start">
                                    Read More &rarr;
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
