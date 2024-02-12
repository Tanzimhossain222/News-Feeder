import Copyright from "./Copyright";
import FooterGrid from "./FooterGrid";

import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
        <div className="container mx-auto">
          <div className="xl:grid xl:grid-cols-12 xl:gap-8">
            <FooterGrid />
            <FooterSubscribe />
          </div>
        </div>
        <Copyright />
      </footer>
    </div>
  );
};

export default Footer;
