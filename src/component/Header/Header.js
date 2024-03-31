import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <header>
        <a href="#hero" className="logo"><p>Yuichi</p></a>
        <div class="bx bx-menu" id="menu-icon"></div>
        
          <ul class="navbar">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
    </header>
    </nav>
  );
};

export default Header;
