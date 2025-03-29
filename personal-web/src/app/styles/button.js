// Button.js
const Button = ({ children, onClick, variant="primary"}) => {
    const buttonStyles = {
        primary: " bg-[var(--emphasis)] text-[var(--background)] font-semibold hover:bg-[var(--emphasis-shadow)]",  
        secondary: "bg-transparent text-[var(--text-color)] border-2 rounded-full font-semibold hover:bg-[var(--emphasis)]",
    }
    
    const buttonClass = buttonStyles[variant] || buttonStyles.primary;
    
    
    return (
        <button
          onClick={onClick}
          className={`px-10 py-3 ${buttonClass}`}
          disabled={variant === "disabled"} // Disable button if the variant is 'disabled'
        >
          {children}
        </button>
      );
    };
  
  export default Button;
