import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GlobalContext } from "../../context/globalContext";
import UseAtivarAoScroll from "../../hooks/useAtivarAoScroll";
import UseAtivarItemMenu from "../../hooks/useAtivarItemMenu";
import { HeaderObject, ListMenu, Navegation } from "./styles";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollMenu, setScrollMenu] = useState(false);

  const { debounce } = useContext(GlobalContext);

  const useAtivarAoScroll = new UseAtivarAoScroll(
    "[data-section]",
    ".list-menu li a"
  );
  useAtivarAoScroll.init();

  const useAtivarItemMenu = new UseAtivarItemMenu(".list-menu li a");
  useAtivarItemMenu.init();

  const Menu = useRef();

  useEffect(() => {
    const HeightMenu = Menu.current.offsetHeight;
    function ScrollMenu() {
      if (window.scrollY > HeightMenu) setScrollMenu(true);
      else if (window.scrollY < HeightMenu) setScrollMenu(false);
    }
    window.addEventListener("scroll", debounce(ScrollMenu, 200));
    return () => window.removeEventListener("scroll", ScrollMenu);
  }, []);

  useEffect(() => {
    function clickOutside(event) {
      const groupElements = event.path.map((i) => i.id);
      if (!groupElements.includes("menu")) setOpenMenu(false);
    }
    window.addEventListener("click", debounce(clickOutside, 100));
    return () => window.removeEventListener("click", clickOutside);
  }, []);

  return (
    <HeaderObject id="menu" ref={Menu} className={scrollMenu ? "scroll" : ""}>
      <div className="container">
        <a href="#top" className="logo">
          <img src="img/logo.svg" alt="José de Souza" />
        </a>
        <Navegation>
          <ListMenu
            className={`list-menu ${openMenu ? "show" : ""} ${
              scrollMenu ? "scroll" : ""
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#educacao">Educação</a>
            </li>
            <li>
              <a href="#experiencia">Experiência</a>
            </li>
            <li>
              <a href="#portfolio">Portfólio</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ListMenu>
          <button
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
            style={openMenu ? { background: "var(--blue-h)" } : {}}
          >
            {openMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </Navegation>
      </div>
    </HeaderObject>
  );
};

export default Header;
