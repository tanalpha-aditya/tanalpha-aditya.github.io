// app/_components/BrandsMarquee.tsx
'use client';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const brands = [
    { name: 'AIMA', logo: '/brands/aima.png' },
    { name: 'IIIT Hyderabad', logo: '/brands/iiith.png' },
    { name: 'IBM Research', logo: '/brands/ibm.png' },
    { name: 'TCS Research', logo: '/brands/tcs.png' },
    { name: 'University of Jyväskylä', logo: '/brands/jyu.png' },
    { name: 'Become', logo: '/brands/become.png' },
    { name: 'CogSci Lab', logo: '/brands/kcis.png' },
    { name: 'Medium', logo: '/brands/med.png' },
    { name: 'ChargeKart', logo: '/brands/ck.png' },
];

const BrandsMarquee = () => {
    return (
        // Container with a mask-image for the fade effect on the sides
        <div className="py-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <Marquee pauseOnHover autoFill speed={50}>
                {brands.map((brand) => (
                    // This parent div now controls the size and alignment
                    <div
                        key={brand.name}
                        className="mx-16 flex h-16 w-48 items-center justify-center" // <-- KEY CHANGE 1
                    >
                        <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            width={150} // More representative width
                            height={75} // More representative height
                            className="max-h-full w-auto object-contain opacity-90 transition-all hover:opacity-100" // <-- KEY CHANGE 2
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default BrandsMarquee;
