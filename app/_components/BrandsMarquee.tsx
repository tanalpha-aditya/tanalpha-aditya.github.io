// app/_components/BrandsMarquee.tsx
'use client';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const brands = [
    { name: 'AIMA', logo: '/brands/aima.png' },
    { name: 'IIIT Hyderabad', logo: '/brands/iiith.png' },
    { name: 'IBM Research', logo: '/brands/ibm.png' },
    { name: 'TCS Research', logo: '/brands/tcs.png' },
    { name: 'university of jyväskylä', logo: '/brands/jyu.png' },
    { name: 'Become', logo: '/brands/become.png' },
    { name: 'CogSci Lab', logo: '/brands/kcis.png' },
    { name: 'ChargeKart', logo: '/brands/ck.png' },
];

const BrandsMarquee = () => {
    return (
        // Container with a mask-image for the fade effect on the sides
        <div className="py-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <Marquee pauseOnHover autoFill speed={50}>
                {brands.map((brand) => (
                    <div key={brand.name} className="mx-12 text-center">
                        <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            width={120}
                            height={60}
                            className="h-18 w-auto object-contain opacity-90 hover:opacity-100 transition-all"
                            // style={{ filter: 'grayscale(1) invert(0.8)' }}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default BrandsMarquee;
