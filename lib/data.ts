import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'tanalpha.aditya@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Aditya, I am reaching out to you because...',
    resume: '/AdityaRaghuvanshi_IIITH.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/tanlapha-aditya' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tanalpha-aditya/' },
    {
        name: 'facebook',
        url: 'https://www.facebook.com/profile.php?id=100072223987350',
    },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

// =================================================================================
// SKILLS & STACK
// NOTE: Ensure you have corresponding logo images in the `public/logo/` folder.
// =================================================================================
export const MY_STACK = {
    'AI & NLP Toolkits': [
        { name: 'PyTorch', icon: '/logo/pytorch.png' },
        { name: 'LangChain', icon: '/logo/langchain.png' },
        { name: 'TensorFlow', icon: '/logo/tensorflow.png' },
        { name: 'Hugging Face', icon: '/logo/hugging-face.png' },
        { name: 'Scikit-Learn', icon: '/logo/scikit-learn.png' },
        { name: 'spaCy', icon: '/logo/spacy.png' },
    ],
    'LLMs & Models': [
        { name: 'Llama 3', icon: '/logo/llama.jpg' },
        { name: 'Mistral', icon: '/logo/mistral.png' },
        { name: 'Qwen', icon: '/logo/qwen.png' },
        { name: 'IBM Granite', icon: '/logo/granite.png' },
        { name: 'Phi', icon: '/logo/phi.png' },
        { name: 'Gemini', icon: '/logo/gemini.jpg' },
    ],
    'Core Languages & Data': [
        { name: 'Python', icon: '/logo/python.jpg' },
        { name: 'SQL', icon: '/logo/sql.png' },
        { name: 'Pandas', icon: '/logo/pandas.png' },
        { name: 'NumPy', icon: '/logo/numpy.png' },
        // { name: 'PySpark', icon: '/logo/pyspark.png' },
        { name: 'C++', icon: '/logo/cpp.jpg' },
    ],
    'Backend, Cloud & Tools': [
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Firebase', icon: '/logo/firebase.png' },
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Node.js', icon: '/logo/node.png' },
    ],
};

// export const PROJECTS: IProject[] = [
//     {
//         title: 'MTI Electronics',
//         slug: 'mti-electronics',
//         liveUrl: 'https://mti-electronics.vercel.app/',
//         year: 2025,
//         description: `
//       A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>

//       Key Features:<br/>
//       <ul>
//         <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
//         <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
//         <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
//         <li>📱 Fully Responsive: Optimized for all device sizes</li>
//         <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
//       </ul><br/>

//       Technical Highlights:
//       <ul>
//         <li>Implemented complex slider synchronization logic using Swiper.js</li>
//         <li>Customized Payload CMS admin panel for intuitive content management</li>
//         <li>Developed reusable UI components with shadcn for design consistency</li>
//         <li>Configured efficient data fetching strategies in Next.js</li>
//       </ul>
//       `,
//         role: `
//       Full-Stack Developer <br/>
//       Owned the entire development lifecycle:
//       <ul>
//         <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
//         <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
//         <li>🔄 State Management: Implemented client-side data fetching and caching</li>
//         <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
//         <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
//         <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
//       </ul>
//       `,
//         techStack: [
//             'Next.js',
//             'Payload CMS',
//             'Tailwind CSS',
//             'shadcn',
//             'Swiper.js',
//             'React Hook Form',
//             'Vercel',
//         ],
//         thumbnail: '/projects/thumbnail/mti-electronics.webp',
//         longThumbnail: '/projects/long/mti-electronics.webp',
//         images: [
//             '/projects/images/mti-electronics-1.webp',
//             '/projects/images/mti-electronics-2.webp',
//         ],
//     },
//     {
//         title: 'Epikcart',
//         slug: 'epikcart',
//         techStack: [
//             'React',
//             'Redux',
//             'React i18n',
//             'Tailwind CSS',
//             'Framer Motion',
//             'debouncing',
//             'Api Integration',
//         ],
//         thumbnail: '/projects/thumbnail/epikcart.jpg',
//         longThumbnail: '/projects/long/epikcart.jpg',
//         images: [
//             '/projects/images/epikcart-1.png',
//             '/projects/images/epikcart-2.png',
//             '/projects/images/epikcart-3.png',
//             '/projects/images/epikcart-4.png',
//             '/projects/images/epikcart-5.png',
//         ],
//         liveUrl: 'https://demo.epikcart.siphertech.com/',
//         year: 2023,
//         description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
//         role: `As the frontend developer in a team of five, I: <br/>
//         - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
//         - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
//         - Integrated multi-language support with React i18n, including RTL handling.<br/>
//         - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
//     },
//     {
//         title: 'Resume Roaster',
//         slug: 'resume-roaster',
//         techStack: [
//             'GPT-4',
//             'Next.js',
//             'Postgressql',
//             'Prisma',
//             'Tailwind CSS',
//         ],
//         thumbnail: '/projects/thumbnail/resume-roaster.jpg',
//         longThumbnail: '/projects/long/resume-roaster.jpg',
//         images: [
//             '/projects/images/resume-roaster-1.png',
//             '/projects/images/resume-roaster-2.png',
//             '/projects/images/resume-roaster-3.png',
//         ],
//         liveUrl: 'https://resume-roaster.vercel.app/',
//         year: 2023,
//         description:
//             'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
//         role: `As the sole developer and business owner, I:<br/>
//         - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
//         - Integrated GPT-4 for AI-driven feedback and insights.<br/>
//         - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
//     },
//     {
//         title: 'Real Estate',
//         slug: 'property-pro',
//         techStack: [
//             'React.js',
//             'Redux',
//             'Tailwind CSS',
//             'React i18n',
//             'Framer Motion',
//         ],
//         thumbnail: '/projects/thumbnail/property-pro.jpg',
//         longThumbnail: '/projects/long/property-pro.jpg',
//         images: [
//             '/projects/images/property-pro-1.png',
//             '/projects/images/property-pro-2.png',
//             '/projects/images/property-pro-3.png',
//         ],
//         liveUrl: 'https://demo.propertypro.siphertech.com/',
//         year: 2023,
//         description:
//             'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
//         role: `As the frontend developer, I:<br/>
//         - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
//         - Integrated dynamic state management for efficient handling of property data.<br/>
//         - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
//         - Enhanced user interaction with animations and transitions using Framer Motion.`,
//     },
//     {
//         title: 'Consulting Finance',
//         slug: 'crenotive',
//         techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
//         thumbnail: '/projects/thumbnail/consulting-finance.jpg',
//         longThumbnail: '/projects/long/consulting-finance.jpg',
//         images: [
//             '/projects/images/consulting-finance-1.png',
//             '/projects/images/consulting-finance-2.png',
//             '/projects/images/consulting-finance-3.png',
//         ],
//         sourceCode: 'https://github.com/Tajmirul/crenotive',
//         liveUrl: 'https://crenotive.netlify.app/',
//         year: 2023,
//         description:
//             'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
//         role: ``,
//     },
//     {
//         title: 'devLinks',
//         slug: 'devLinks',
//         techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
//         thumbnail: '/projects/thumbnail/devLinks.jpg',
//         longThumbnail: '/projects/long/devLinks.jpg',
//         images: [
//             '/projects/images/devLinks-1.png',
//             '/projects/images/devLinks-2.png',
//             '/projects/images/devLinks-3.png',
//         ],
//         sourceCode: 'https://github.com/Tajmirul/devsLink',
//         liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
//         year: 2023,
//         description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

//             I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
//         role: ``,
//     },
// ];

// =================================================================================
// PROJECTS
// NOTE: Add your project images to the `public/projects/` folder.
// Create thumbnails and long images as needed.
// =================================================================================
export const PROJECTS: IProject[] = [
    {
        title: 'SPARK: Proof Assistant for Reasoning',
        slug: 'spark-proof-assistant',
        sourceCode: 'https://github.com/your-username/spark-repo',
        // liveUrl: 'https://mti-electronics.vercel.app/',
        year: 2025,
        description: `
        A step-by-step proof assistant designed for advanced mathematical reasoning by integrating small Large Language Models (LLMs) with formal verification techniques.
        <br/><br/>
        Key Achievements:
        <ul>
            <li>Engineered DPO/GRPO fine-tuning pipelines using 4-bit LoRA for specialized models like Qwen2.5-MATH and Phi-mini-4k.</li>
            <li>Achieved a +14.7 percentage point increase on the MATH500 benchmark, significantly surpassing Gemini-2.0 on GSM8K.</li>
            <li>Developed custom data preparation and error-driven reward design methodologies to enhance model accuracy and reasoning capabilities.</li>
        </ul>
        `,
        role: `
        As the lead developer, I was responsible for the entire project lifecycle:
        <ul>
            <li>✅ Conceptualized and designed the core architecture integrating LLMs with formal verifiers.</li>
            <li>🧠 Implemented and optimized the fine-tuning pipelines from scratch.</li>
            <li>📊 Conducted rigorous benchmarking and performance analysis.</li>
            <li>🔬 Designed the custom reward models for error-driven learning.</li>
        </ul>
        `,
        techStack: [
            'LLM Fine-Tuning',
            'PyTorch',
            'DPO/GRPO',
            'LoRA',
            'Qwen2.5',
            'Formal Verification',
        ],
        thumbnail: '/projects/thumbnail/spark.mp4',
        longThumbnail: '/projects/long/spark.jpg',
        images: [
            '/projects/images/spark-1.webp',
            '/projects/images/spark-2.webp',
        ],
        sourceCode: 'https://github.com/tanalpha-aditya/SPARK-Maths',
    },
    {
        title: 'Amazon ML Challenge 2024',
        slug: 'amazon-ml-challenge-2024',
        year: 2024,
        description: `
        An intense national competition focused on automated document processing and information extraction. My solution achieved an All India Rank of 14 out of over 75,000 participants.
        <br/><br/>
        The system involved a multi-stage pipeline:
        <ul>
            <li>Built a robust OCR pipeline using DocTr and PaddlePaddle for high-accuracy text extraction from various document layouts.</li>
            <li>Paired the OCR output with a prompt-tuned Llama 3.1 (7B) model to intelligently retrieve specific entity values.</li>
            <li>Leveraged Qwen-VL (2B/7B) for direct image-based entity extraction, combined with rule-based post-processing for validation.</li>
        </ul>
        `,
        role: `
        As the sole developer, I designed, built, and optimized the entire solution:
        <ul>
            <li>✅ Engineered the end-to-end OCR and information extraction pipeline.</li>
            <li>💡 Developed sophisticated prompt engineering strategies for the Llama 3.1 model.</li>
            <li>🔧 Implemented rule-based validation logic to improve the accuracy of the final output.</li>
            <li>🚀 Iterated rapidly on the solution to climb the competitive leaderboard.</li>
        </ul>
        `,
        techStack: [
            'Qwen-VL',
            'CV',
            'OCR',
            'DocTr',
            'PaddlePaddle',
            'Llama 3.1',
            'Prompt Engineering',
        ],
        thumbnail: '/projects/thumbnail/amazon-ml.webp',
        longThumbnail: '/projects/long/amazon-ml.webp',
        images: ['/projects/images/amazon-ml-1.webp'],
        // sourceCode: 'https://github.com/tanalpha-aditya/SPARK-Maths',
    },
    {
        title: 'Hybrid Model for Topic Classification',
        slug: 'hybrid-topic-classification',
        year: 2024,
        description: `
        A research project in collaboration with Prof. Chiranjeevi Yarra to overcome the limitations of traditional text-only classifiers in low-resource settings.
        <br/><br/>
        This project introduced a novel hybrid topic classifier that combines both acoustic and textual features from audio data. The model demonstrated a remarkable **+40% accuracy improvement** over text-only and audio-only baselines, proving its effectiveness and applicability for real-world, resource-constrained scenarios.
        `,
        role: `
        As a research collaborator, my contributions included:
        <ul>
            <li>✅ Co-designing the hybrid model architecture.</li>
            <li>🎶 Implementing the acoustic feature extraction pipeline.</li>
            <li>📊 Setting up and running experiments to benchmark performance against baseline models.</li>
            <li>📈 Analyzing results and contributing to the research findings.</li>
        </ul>
        `,
        techStack: [
            'Speech AI',
            'Linguistics',
            'PyTorch',
            'Acoustic Features',
            'Text Classification',
        ],
        thumbnail: '/projects/thumbnail/hybrid-model.webp',
        longThumbnail: '/projects/long/hybrid-model.webp',
        images: ['/projects/images/hybrid-model-1.webp'],
        sourceCode:
            'https://github.com/tanalpha-aditya?page=1&tab=repositories',
    },
];

// =================================================================================
// PROFESSIONAL EXPERIENCE
// =================================================================================
export const MY_EXPERIENCE = [
    {
        title: 'Research Intern - AI',
        company: 'IBM Research',
        duration: 'May 2025 - Aug 2025',
    },
    {
        title: 'ML Intern - Remote ( Ireland )',
        company: 'AIMA',
        duration: 'Oct 2024 - Feb 2025',
    },
    {
        title: 'Research Intern',
        company: 'TCS Research',
        duration: 'Jun 2024 - Aug 2024',
    },
    {
        title: 'Computational Linguistic Researcher',
        company: 'Become',
        duration: 'Apr 2024 - Jun 2024',
    },
    {
        title: 'Full Stack Developer Intern',
        company: 'ChargeKart',
        duration: 'Jan 2023 - Oct 2023',
    },
    {
        title: 'B.Tech CS + MS in Computational Linguistics',
        company: 'IIIT Hyderabad',
        duration: 'Nov 2021 - May 2026',
    },
];
