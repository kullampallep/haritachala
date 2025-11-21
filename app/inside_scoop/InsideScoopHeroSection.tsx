import Image from 'next/image';
import Button from '@/components/Button';

export default function InsideScoopHeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[var(--background-blue)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div>
              <h1 className="afacad-regular text-3xl md:text-4xl text-[var(--foreground-blue)] mb-4 uppercase">
                {/* TODO: Extract exact heading from Figma */}
                Inside Scoop
              </h1>
              <div className="w-full h-[2px] bg-[var(--foreground-blue)] mb-6"></div>
            </div>
            
            <div className="space-y-4">
              <p className="afacad-regular text-base md:text-lg text-[var(--foreground-blue)] leading-relaxed">
                {/* TODO: Extract exact body text from Figma */}
                Get an exclusive behind-the-scenes look at our journey, from farm to table. 
                Discover the stories, people, and passion that make each product special.
              </p>
            </div>

            {/* Button */}
            <div>
              <Button
                buttonOutlineColor="var(--foreground-blue)"
                buttonText="Learn More"
                href="/about"
              />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] order-1 md:order-2">
            <Image
              src="/images/pages/inside_scoop/inside_scoop.heroSection.png"
              alt="Inside Scoop Hero"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
