import PropsType from "prop-types";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navBar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropsType.node,
};

export default Layout;
