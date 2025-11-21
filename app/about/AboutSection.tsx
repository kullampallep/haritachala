import Image from 'next/image';

export default function AboutSection() {
  return (
    <>
      <section className="bg-[var(--background-purple)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/images/pages/about/aboutUs.aboutUs.image1.png"
                alt="About Haritachala Organics"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="rubik-light text-3xl md:text-4xl lg:text-5xl text-[var(--foreground-white)] uppercase mb-4">
                  About Us
                </h2>
                <div className="w-full h-[1px] bg-[var(--foreground-white)] mb-6"></div>
              </div>
              
              <div className="space-y-4 rubik-light text-base md:text-lg text-[var(--foreground-white)] leading-relaxed">
                <p>
                  Haritachala Organics was born from a shared vision - to come together to nurture both people and nature as a sincere offering of love, devotion, and gratitude to our Gurus, Shirdi Sai Baba and Sri Sainathuni Sarath Babuji.
                </p>
                
                <p>
                  We belong to Saipatham (the path of Sai), as shown by our beloved Guruji, Sri Babuji. Located on Girivalam Road at the sacred foothills of Arunachala in Tiruvannamalai, India, Haritachala is more than just a farm - it's a living expression of sustainability and empowerment. United by our shared passions and a deep love for Haritachala, we began this project to keep our connection vibrant and alive.
                </p>
                
                <p>
                  Inspired by our connection to Haritachala, we blend our love for organic farming, healthy living, sustainability, baking skills, and design skills in joyful service, crafting each product with Baba and Guruji's blessings to nourish body and soul.
                </p>
                
                <p>
                  We offer high-quality, organic, and wholesome products, lovingly grown and prepared in harmony with nature.
                </p>
                
                <p className="font-semibold">
                  100% of proceeds directly support our Sai Baba temple, our biodiverse organic farm, and the livelihoods of rural women.
                </p>
                
                <p>
                  We invite you to be part of this journey - where every product tells a story of love, purpose, and sacred connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Thin white section break */}
      <div className="w-full h-[2px] bg-white"></div>
    </>
  );
}
