import ProductCarousel from './ProductCarousel';
import Button from './Button';
import productsData from '../data/products.json';

interface OurProductsProps {
  backgroundColor?: string;
  titleColor?: string;
  scrollButtonColor?: string;
  scrollArrowColor?: string;
  cardButtonColor?: string;
  cardTextColor?: string;
  allProductsButtonColor?: string;
}

export default function OurProducts({
  backgroundColor = '#FFDCDC',
  titleColor = '#C4735A',
  scrollButtonColor = '#B3B0D1',
  scrollArrowColor = '#FFFFFF',
  cardButtonColor = '#C4735A',
  cardTextColor = '#C4735A',
  allProductsButtonColor = '#C4735A'
}: OurProductsProps) {
  // Filter products that have images
  const productsWithImages = productsData.products.filter(
    product => product.images && product.images.length > 0
  );

  return (
    <section 
      className="w-full py-12 md:py-14 lg:py-16"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 
          className="afacad-regular text-3xl md:text-4xl lg:text-4xl text-center mb-8 md:mb-10"
          style={{ color: titleColor }}
        >
          OUR PRODUCTS
        </h2>

        {/* Carousel */}
        <ProductCarousel 
          products={productsWithImages}
          buttonColor={scrollButtonColor}
          arrowColor={scrollArrowColor}
          cardButtonColor={cardButtonColor}
          cardTextColor={cardTextColor}
        />

        {/* All Products Button */}
        <div className="flex justify-center mt-6 md:mt-8">
          <Button
            buttonOutlineColor={allProductsButtonColor}
            buttonText="All Products"
            href="/menu"
          />
        </div>
      </div>
    </section>
  );
}
