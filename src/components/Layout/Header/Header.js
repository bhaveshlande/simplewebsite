import { Navbar } from "flowbite-react";
import logo from "../../../assets/logo.png";
export const Header = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            simple React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div></div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/chuckNorries-jokes">
            chuckNorries-jokes
          </Navbar.Link>
          <Navbar.Link href="*">pagenotfound</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
