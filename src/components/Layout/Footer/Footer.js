import { Footer } from "flowbite-react";
// import logo from "../../../assets/logo.png";

export const FooterP = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        {/* <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand href="/" src={logo} alt="logo" name="simple react" />
          <Footer.LinkGroup>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div> */}
        <Footer.Divider />
        <Footer.Copyright href="/" by="simple react™" year={2023} />
      </div>
    </Footer>
  );
};
