'use client';

import { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ScrollButton from './ScrollButton';

interface Product {
  name: string;
  tagline?: string;
  description?: string;
  images: string[];
  available: string[];
}

interface ProductCarouselProps {
  products: Product[];
  buttonColor?: string;
  arrowColor?: string;
  cardButtonColor?: string;
  cardTextColor?: string;
}

export default function ProductCarousel({ 
  products,
  buttonColor = '#B3B0D1',
  arrowColor = '#FFFFFF',
  cardButtonColor = '#C4735A',
  cardTextColor = '#C4735A'
}: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Convert product name to slug
  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Check scroll position to show/hide buttons
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Card width + gap
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative">
      {/* Left Scroll Button */}
      {showLeftButton && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20">
          <ScrollButton 
            direction="left" 
            onClick={() => scroll('left')}
            buttonColor={buttonColor}
            arrowColor={arrowColor}
          />
        </div>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={checkScroll}
        className={`flex gap-6 overflow-x-auto scrollbar-hide px-4 py-8 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            tagline={product.description || product.tagline || product.name}
            image={product.images[0] || '/images/placeholder.jpg'}
            slug={createSlug(product.name)}
            buttonColor={cardButtonColor}
            textColor={cardTextColor}
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      {showRightButton && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20">
          <ScrollButton 
            direction="right" 
            onClick={() => scroll('right')}
            buttonColor={buttonColor}
            arrowColor={arrowColor}
          />
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
