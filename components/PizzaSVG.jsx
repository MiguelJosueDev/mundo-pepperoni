import React from 'react';

const PizzaSVG = ({ className }) => {
  return (
    <svg 
      width="200" 
      height="200" 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Base circular de la pizza */}
      <circle cx="100" cy="100" r="95" fill="#FFC72C" />
      <circle cx="100" cy="100" r="90" fill="#FFDD77" />
      
      {/* Borde de la pizza */}
      <path d="M100 10C48.5 10 10 48.5 10 100C10 151.5 48.5 190 100 190C151.5 190 190 151.5 190 100C190 48.5 151.5 10 100 10ZM100 175C56.7 175 25 143.3 25 100C25 56.7 56.7 25 100 25C143.3 25 175 56.7 175 100C175 143.3 143.3 175 100 175Z" fill="#C47C00" />
      
      {/* Tomate y queso */}
      <circle cx="100" cy="100" r="85" fill="#e52b09" opacity="0.3" />
      
      {/* Rebanadas */}
      <line x1="100" y1="15" x2="100" y2="185" stroke="#C47C00" strokeWidth="1" />
      <line x1="15" y1="100" x2="185" y2="100" stroke="#C47C00" strokeWidth="1" />
      <line x1="29.3" y1="29.3" x2="170.7" y2="170.7" stroke="#C47C00" strokeWidth="1" />
      <line x1="29.3" y1="170.7" x2="170.7" y2="29.3" stroke="#C47C00" strokeWidth="1" />
      
      {/* Pepperoni */}
      <circle cx="70" cy="60" r="12" fill="#C41230" />
      <circle cx="120" cy="80" r="10" fill="#C41230" />
      <circle cx="60" cy="120" r="8" fill="#C41230" />
      <circle cx="140" cy="50" r="9" fill="#C41230" />
      <circle cx="110" cy="140" r="11" fill="#C41230" />
      <circle cx="160" cy="110" r="7" fill="#C41230" />
      <circle cx="40" cy="90" r="9" fill="#C41230" />
      <circle cx="100" cy="40" r="10" fill="#C41230" />
      <circle cx="130" cy="130" r="8" fill="#C41230" />
      <circle cx="80" cy="150" r="9" fill="#C41230" />
      
      {/* Brillos */}
      <circle cx="60" cy="60" r="2" fill="white" opacity="0.6" />
      <circle cx="110" cy="80" r="2" fill="white" opacity="0.6" />
      <circle cx="50" cy="120" r="2" fill="white" opacity="0.6" />
      <circle cx="130" cy="50" r="2" fill="white" opacity="0.6" />
      <circle cx="100" cy="140" r="2" fill="white" opacity="0.6" />
    </svg>
  );
};

export default PizzaSVG; 