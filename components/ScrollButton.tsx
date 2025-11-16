import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  buttonColor?: string;
  arrowColor?: string;
}

export default function ScrollButton({ 
  direction, 
  onClick, 
  buttonColor = '#B3B0D1',
  arrowColor = '#FFFFFF'
}: ScrollButtonProps) {
  const Icon = direction === 'left' ? IoChevronBack : IoChevronForward;
  
  return (
    <button
      onClick={onClick}
      className="rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity z-10"
      style={{ backgroundColor: buttonColor }}
      aria-label={`Scroll ${direction}`}
    >
      <Icon size={28} style={{ color: arrowColor }} />
    </button>
  );
}
