import Image from 'next/image';
import Button from '@/components/Button';

export default function HowWeWork() {
  return (
    <section className="bg-[var(--background-purple)] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="rubik-light text-3xl md:text-4xl lg:text-5xl text-[var(--foreground-white)] text-center uppercase mb-12">
          How We Work
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4 rubik-light text-base md:text-lg text-[var(--foreground-white)] leading-relaxed">
              <p>
                Rooted in our love for Haritachala and guided by the blessings of Baba and Guruji, we approach everything we do as an act of joyful service.
              </p>
              
              <p>
                Our small team, spread across the world but united in spirit, brings together diverse skills—from growing to baking to designing to packaging. We meet twice a week on Google Meet to collaborate as a team and bring our ideas to life. These meetings are not just about work—they're a space to strengthen our friendships and nurture our shared spirit.
              </p>
              
              <p>
                Every product is handcrafted in small batches using simple, high-quality ingredients, with care, integrity, and creativity in every step. We strive to make each item feel personal, thoughtful, and full of heart.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                href="/inside_scoop"
                buttonText="Get the Inside Scoop"
                buttonOutlineColor="#FFFFFF"
              />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/images/pages/about/aboutUs.howWeWork.png"
              alt="How We Work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
