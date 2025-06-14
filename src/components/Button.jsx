import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const isRegistrationLink = href === "#register";
  const registrationUrl = "https://unstop.com/hackathons/hackronyx-st-vincent-pallotti-college-of-engineering-and-technology-svpcet-nagpur-1466009";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => {
    if (isRegistrationLink) {
      return (
        <a 
          href={registrationUrl} 
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={spanClasses}>{children}</span>
          {ButtonSvg(white)}
        </a>
      );
    }
    
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;
