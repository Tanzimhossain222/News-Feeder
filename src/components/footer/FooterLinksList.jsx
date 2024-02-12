
import React from "react";

const FooterLinksList = ({ links }) => {
    console.log(links);
  return (
    <ul role="list" className="space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} className={`text-sm ${link.fontWeight}`}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinksList;
