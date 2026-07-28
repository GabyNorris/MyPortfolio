import React from "react";

const Button = ({ colour, icon, label, link, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (onClick) {
      onClick(e);
      return;
    }

    if (link) {
      window.location.href = link;
    }
  };

  return (
    <button
      className={`w-fit flex items-center gap-[6px] bg-${colour} border-[0.5px] border-[var(--border-mid)] rounded-pill px-[14px] py-[5px] text-[12px] font-body text-${colour} cursor-pointer transition-all duration-250 hover:bg-[hover-color-placeholder] hover:text-base-content`}
      onClick={handleClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
