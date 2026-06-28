import React from "react";

/* 
.theme-toggle{
  background:var(--bg-raised);
  border:0.5px solid var(--border-mid);
  border-radius:var(--radius-pill);
  padding:5px 14px;
  font-size:12px;font-family:var(--ff-body);
  color:var(--text-2);
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:6px;
  transition:all 0.25s;
}
.theme-toggle:hover{background:var(--bg-hover);color:var(--text-1);}
.theme-toggle svg{width:14px;height:14px;flex-shrink:0;} */

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  const icon = document.getElementById("theme-icon");
  const label = document.getElementById("theme-label");
  if (isDark) {
      icon.innerHTML =
        '<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>';
      label.textContent = "Dark mode";
} else {
      icon.innerHTML =
        '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
      label.textContent = "Light mode";
  }
}

const Navbar = () => {
  return (
    <>
      {/* <nav id="main-nav">
  <div class="nav-logo">gaby <span>norris</span></div>
  <div class="nav-links">
    <a href="#projects" data-section="projects">Projects</a>
    <a href="#about" data-section="about">About</a>
    <a href="#contact" data-section="contact">Contact</a>
  </div>
  
</nav> */}
      <div className="navbar border-bottom border-[0.5px] border-[var(--border)] backdrop-blur-[18px] transition-all duration-500  p-1 bg-base-100">
        <div className=" w-full flex flex-row items-center justify-between ">
          <div className="">
            <a className="btn btn-ghost normal-case text-xl">Gaby Norris</a>
          </div>
          <div className="">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Reach Out</a>
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="w-fit flex items-center gap-[6px] bg-base-300 border-[0.5px] border-[var(--border-mid)] rounded-pill px-[14px] py-[5px] text-[12px] font-body text-neutral cursor-pointer transition-all duration-250 hover:bg-[hover-color-placeholder] hover:text-base-content"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              <svg
                id="theme-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
              </svg>
              <span id="theme-label">Dark mode</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
