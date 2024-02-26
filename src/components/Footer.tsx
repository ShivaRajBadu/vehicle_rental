import React from "react";
import Wrapper from "./wrapper";

function Footer() {
  const aboutLinks = [
    {
      lable: "How it work",
      link: "/how_it_work",
    },
    {
      label: "Featured",
      link: "/featured",
    },
    {
      label: "Partnership",
      link: "/partnership",
    },
    {
      label: "Bussiness Relation",
      link: "/relation",
    },
  ];
  const communityLinks = [
    {
      label: "Events",
      link: "/events",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Invite a friend",
      link: "/invite",
    },
  ];
  const socialLinks = [
    {
      label: "Discord",
      link: "/discord",
    },
    {
      label: "Facebook",
      link: "/facebook",
    },
    {
      label: "Twitter",
      link: "/twitter",
    },
    {
      label: "Youtube",
      link: "/youtube",
    },
    {
      label: "Instagram",
      link: "/instagram",
    },
  ];
  return (
    <div className="bg-[color:var(--white)] py-12">
      <Wrapper>
        <div className="flex flex-col gap-6 items-center md:flex-row px-2 justify-between">
          <div className="text-center">
            <h1 className="text-[color:var(--primary-dark-500)] text-4xl font-[700]">
              MORENT
            </h1>
            <p className="text-[16px] py-4 text-[color:var(--secondary-dark-500)] max-w-[50%] mx-auto">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            {/* About us */}
            <div>
              <h2 className="text-[color:var(--secondary-dark-500)] text-xl font-[600]">
                About Us
              </h2>
              <ul className="space-y-4 mt-4">
                {aboutLinks.map((e) => (
                  <li
                    className="text-[16px] text-[color:var(--secondary-dark-300)] font-semibold cursor-pointer"
                    key={e.link}
                  >
                    {e.label}
                  </li>
                ))}
              </ul>
            </div>
            {/* Community */}
            <div>
              <h2 className="text-[color:var(--secondary-dark-500)] text-xl font-[600]">
                Community
              </h2>
              <ul className="space-y-4 mt-4">
                {communityLinks.map((e) => (
                  <li
                    className="text-[16px] text-[color:var(--secondary-dark-300)] font-semibold cursor-pointer"
                    key={e.link}
                  >
                    {e.label}
                  </li>
                ))}
              </ul>
            </div>
            {/* Social */}
            <div>
              <h2 className="text-[color:var(--secondary-dark-500)] text-xl font-[600]">
                Social
              </h2>
              <ul className="space-y-4 mt-4">
                {socialLinks.map((e) => (
                  <li
                    className="text-[16px] text-[color:var(--secondary-dark-300)] font-semibold cursor-pointer"
                    key={e.link}
                  >
                    {e.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
export default Footer;
