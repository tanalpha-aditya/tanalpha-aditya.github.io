'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { MediumPost } from '@/lib/medium';

interface Props {
    posts: MediumPost[];
}

export default function BlogCarousel({ posts }: Props) {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const [index, setIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    // Calculate items per view responsively
    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            if (w < 640) setItemsPerView(1); // sm
            else if (w < 1024) setItemsPerView(2); // md
            else setItemsPerView(3); // lg+
        };
        calc();
        window.addEventListener('resize', calc);
        return () => window.removeEventListener('resize', calc);
    }, []);

    // clamp index when itemsPerView or posts change
    useEffect(() => {
        const maxIndex = Math.max(
            0,
            Math.ceil(posts.length / itemsPerView) - 1,
        );
        setIndex((i) => Math.min(i, maxIndex));
    }, [itemsPerView, posts.length]);

    const maxIndex = Math.max(0, Math.ceil(posts.length / itemsPerView) - 1);

    const goPrev = () => setIndex((i) => Math.max(0, i - 1));
    const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));
    const goTo = (i: number) =>
        setIndex(() => Math.min(Math.max(0, i), maxIndex));

    // keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [maxIndex]);

    return (
        <section
            className="py-section relative"
            aria-roledescription="carousel"
        >
            <div className="container">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Blogs I Wrote</h2>
                    <div className="flex gap-2 items-center">
                        <button
                            onClick={goPrev}
                            aria-label="Previous blogs"
                            disabled={index === 0}
                            className={`p-2 rounded-md hover:shadow-md transition disabled:opacity-40 disabled:cursor-not-allowed`}
                        >
                            {/* left arrow */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={goNext}
                            aria-label="Next blogs"
                            disabled={index === maxIndex}
                            className={`p-2 rounded-md hover:shadow-md transition disabled:opacity-40 disabled:cursor-not-allowed`}
                        >
                            {/* right arrow (mirror) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 transform rotate-180"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* viewport */}
                <div className="relative">
                    <div className="overflow-hidden" ref={viewportRef}>
                        {/* track */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${index * 100}%)`,
                                width: `${
                                    Math.ceil(posts.length / itemsPerView) * 100
                                }%`,
                            }}
                        >
                            {/* each page: a container that holds `itemsPerView` cards */}
                            {Array.from({
                                length: Math.ceil(posts.length / itemsPerView),
                            }).map((_, pageIdx) => {
                                const start = pageIdx * itemsPerView;
                                const slice = posts.slice(
                                    start,
                                    start + itemsPerView,
                                );
                                return (
                                    <div
                                        key={pageIdx}
                                        style={{
                                            width: `${
                                                100 /
                                                Math.ceil(
                                                    posts.length / itemsPerView,
                                                )
                                            }%`,
                                        }}
                                        className="p-2"
                                    >
                                        <div
                                            className="grid"
                                            style={{
                                                gridTemplateColumns: `repeat(${itemsPerView}, minmax(0,1fr))`,
                                                gap: '1rem',
                                            }}
                                        >
                                            {slice.map((post) => (
                                                <a
                                                    key={post.link}
                                                    href={post.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="group flex flex-col bg-background-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
                                                >
                                                    <div className="aspect-video overflow-hidden">
                                                        <img
                                                            src={post.thumbnail}
                                                            alt={post.title}
                                                            loading="lazy"
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            onError={(e) => {
                                                                (
                                                                    e.target as HTMLImageElement
                                                                ).src =
                                                                    'https://placehold.co/600x400';
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="p-4 flex flex-col flex-grow">
                                                        <p className="text-xs text-muted-foreground">
                                                            {post.pubDate}
                                                        </p>
                                                        <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-primary">
                                                            {post.title}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground flex-grow">
                                                            {post.description}
                                                        </p>
                                                        <span className="text-xs font-semibold text-primary mt-4 self-start">
                                                            Read More →
                                                        </span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* page indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {Array.from({
                            length: Math.ceil(posts.length / itemsPerView),
                        }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to page ${i + 1}`}
                                className={`w-2 h-2 rounded-full ${
                                    i === index
                                        ? 'bg-primary'
                                        : 'bg-muted-foreground/40'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
