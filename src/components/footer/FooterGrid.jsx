import FooterLogo from "./FooterLogo";
import FooterSocialIcons from "./FooterSocialIcons";

const FooterGrid = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5">
        <FooterLogo />

        <>
          <ul role="list" className="space-y-4">
            <li>
              <a href="#" className="text-sm font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-semibold">
                General
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-semibold">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-semibold">
                Entertainment
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-semibold">
                Health
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-semibold">
                Science
              </a>
            </li>
          </ul>

          <ul role="list" className="space-y-4">
            <li>
              <a href="#" className="text-sm font-semibold">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-semibold">
                Technology
              </a>
            </li>
          </ul>

          <ul role="list" className="space-y-4">
            <li>
              <a href="#" className="text-sm">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Cookies Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Manage Cookies
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Contact Us
              </a>
            </li>
          </ul>
        </>
        <FooterSocialIcons />
      </div>
    </>
  );
};

export default FooterGrid;
