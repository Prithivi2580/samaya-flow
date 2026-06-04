import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "./logo";
import { NAVBAR_LINKS } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="header">
      <div>
        <Logo className="logo" />
        <p>Samaya Flow</p>
      </div>
      <nav>
        {NAVBAR_LINKS.map((link) => (
          <NavLink to={link.link} key={link.id}>
            {link.name}
          </NavLink>
        ))}
      </nav>
      <Button className="btn">Get Started</Button>
    </header>
  );
}
