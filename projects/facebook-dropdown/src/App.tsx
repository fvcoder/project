import { PropsWithChildren, useState } from 'react'
import { HiBell, HiPlus, HiChatBubbleLeft, HiChevronDown, HiCog6Tooth, HiChevronRight, HiArrowLongLeft, HiBugAnt } from "react-icons/hi2"
import { CSSTransition } from "react-transition-group"

function App() {
  return (
    <Navbar>
      <NavItem icon={<HiPlus />} />
      <NavItem icon={<HiBell />} />
      <NavItem icon={<HiChatBubbleLeft />} />
      <NavItem icon={<HiChevronDown />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  )
}

function Navbar({ children }: PropsWithChildren<unknown>) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {children}
      </ul>
    </nav>
  )
}

interface NavItemProps {
  icon: string | JSX.Element
}

function NavItem({ icon, children }: PropsWithChildren<NavItemProps>) {
  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  )
}

interface DropdownItemProps {
  iconLeft: string | JSX.Element
  iconRight: JSX.Element
  to: string
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main")
  const [menuHeight, setMenuHeight] = useState<number | string>("auto")

  function calcHeight(e: HTMLElement) {
    const height = e.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem({ children, iconLeft, iconRight, to }: PropsWithChildren<Partial<DropdownItemProps>>) {
    return (
      <a href="#" className="menu-item" onClick={() => to && setActiveMenu(to)}>
        <span className="icon-button">{iconLeft}</span>
        {children}
        <span className="icon-right">{iconRight}</span>
      </a>
    ) 
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            iconLeft={<HiCog6Tooth />}
            iconRight={<HiChevronRight />}
            to="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            iconLeft="🐵"
            iconRight={<HiChevronRight />}
            to="animals">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition in={activeMenu === "settings"} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem to="main" iconLeft={<HiArrowLongLeft />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem iconLeft={<HiBugAnt />}>HTML</DropdownItem>
          <DropdownItem iconLeft={<HiBugAnt />}>CSS</DropdownItem>
          <DropdownItem iconLeft={<HiBugAnt />}>JavaScript</DropdownItem>
          <DropdownItem iconLeft={<HiBugAnt />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition in={activeMenu === "animals"} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem to="main" iconLeft={<HiArrowLongLeft />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem iconLeft="🦘">Kangaroo</DropdownItem>
          <DropdownItem iconLeft="🐸">Frog</DropdownItem>
          <DropdownItem iconLeft="🦋">Horse?</DropdownItem>
          <DropdownItem iconLeft="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default App
