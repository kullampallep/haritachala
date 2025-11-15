import Image from 'next/image';

interface ContactUsProps {
  bottomImage?: string;
}

export default function ContactUs({ bottomImage }: ContactUsProps) {
  return (
    <section className="w-full bg-[#D5E7F2] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="afacad-normal text-3xl md:text-4xl lg:text-5xl text-[#0D4F78] text-center mb-8 md:mb-12 lg:mb-16">
          CONTACT US
        </h2>

        {/* Contact Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center items-stretch mb-12 md:mb-16 lg:mb-20">
          
          {/* India Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 flex-1 max-w-md mx-auto md:mx-0">
            <h3 className="rubik-regular text-xl md:text-2xl text-[#0D4F78] text-center mb-6">
              India
            </h3>
            
            {/* Location Icon */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/icons/contactUsLocation.png"
                alt="Location"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            
            {/* Address */}
            <p className="rubik-light text-sm md:text-base text-[#0D4F78] text-center mb-6 leading-relaxed">
              Sri Sainathuni Dhyana<br />
              Mandiram, Haritachala,<br />
              Tiruvanamalai, India
            </p>
            
            {/* Phone Icon */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/icons/contactUsPhone.png"
                alt="Phone"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            
            {/* Phone Number */}
            <p className="rubik-light text-sm md:text-base text-[#0D4F78] text-center mb-2">
              +91 85229 36657
            </p>
            <p className="rubik-light text-xs md:text-sm text-[#0D4F78] text-center">
              Call or Message us on WhatsApp
            </p>
          </div>

          {/* United States Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 flex-1 max-w-md mx-auto md:mx-0">
            <h3 className="rubik-regular text-xl md:text-2xl text-[#0D4F78] text-center mb-6">
              United States
            </h3>
            
            {/* Location Icon */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/icons/contactUsLocation.png"
                alt="Location"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            
            {/* Address */}
            <p className="rubik-light text-sm md:text-base text-[#0D4F78] text-center mb-6 leading-relaxed">
              Dallas, Texas, United<br />
              States
            </p>
            
            {/* Phone Icon */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/icons/contactUsPhone.png"
                alt="Phone"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            
            {/* Phone Number */}
            <p className="rubik-light text-sm md:text-base text-[#0D4F78] text-center mb-2">
              +1 945 289 0980
            </p>
            <p className="rubik-light text-xs md:text-sm text-[#0D4F78] text-center">
              Call or Message us on WhatsApp
            </p>
          </div>
        </div>

        {/* Bottom Image */}
        {bottomImage && (
          <div className="flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
              <Image
                src={bottomImage}
                alt="Decorative element"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}