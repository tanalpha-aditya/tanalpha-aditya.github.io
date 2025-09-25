// app/page.tsx
import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import BlogSection from './_components/BlogSection'; // <-- IMPORT a
import { getMediumPosts } from '@/lib/medium'; // <-- IMPORT b

// Make the Home component async
export default async function Home() {
    // Fetch the posts on the server
    const posts = await getMediumPosts(); // <-- FETCH c

    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList />
            <BlogSection posts={posts} /> {/* <-- ADD d */}
        </div>
    );
}
