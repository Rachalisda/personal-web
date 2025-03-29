const Button = ({ children, onClick, variant="primary" }) => {
    const buttonStyles = {
      primary: "bg-[var(--emphasis)] text-[var(--background)] font-semibold hover:bg-[var(--emphasis-shadow)] hover:scale-110 transition-all duration-300 ease-in-out transform shadow-md hover:shadow-xl",  
      secondary: "bg-transparent text-[var(--text-color)] border-2 rounded-full font-semibold hover:bg-[var(--emphasis)] hover:scale-110 transition-all duration-300 ease-in-out transform shadow-md hover:shadow-xl",
      disabled: "bg-gray-300 text-gray-500 cursor-not-allowed"
    }
  
    const buttonClass = buttonStyles[variant] || buttonStyles.primary;
  
    return (
      <button
        onClick={onClick}
        className={`w-[10em] h-[3em] ${buttonClass}`}
        disabled={variant === "disabled"} // Disable button if the variant is 'disabled'
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  