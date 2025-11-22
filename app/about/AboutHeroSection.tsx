import Image from 'next/image';

export default function AboutHeroSection() {
  return (
    <section className="relative w-full hidden md:block md:h-[70vh] lg:h-screen overflow-hidden">
      {/* Desktop/Large Screen Hero Video */}
      <div className="hidden lg:block absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/pages/about/aboutUs.heroSectionVideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Mobile/Tablet Hero Image */}
      <div className="block lg:hidden absolute inset-0">
        <Image
          src="/images/pages/about/aboutUs.heroSection.png"
          alt="About Haritachala Organics"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* White Gradient Overlay for Navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/85 via-white/50 to-transparent pointer-events-none z-10" />

      {/* White Gradient Overlay from Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/85 via-white/50 to-transparent pointer-events-none z-10" />

      {/* Hero Text Content - Only visible on small/medium screens */}
      <div className="relative z-20 h-full flex items-end pb-12 justify-center px-4 lg:hidden">
        <div className="text-center max-w-4xl">
          <h1 className="alegreya-regular text-4xl text-[var(--foreground-blue)]">
            Welcome to <span className="alegreya-italic">Haritachala Organics</span>
          </h1>
        </div>
      </div>

      {/* Hero Text - Only visible on large screens */}
      <div className="hidden lg:flex relative z-20 h-full items-end pb-6 md:pb-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center w-full">
            <h1 className="alegreya-regular text-3xl md:text-4xl lg:text-5xl text-[var(--foreground-blue)]">
              welcome to <span className="alegreya-italic">haritachala organics</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
