import React from "react";

import x from "../../assets/social-media/x.png";
import facebook from "../../assets/social-media/facebook.png";
import linkedin from "../../assets/social-media/linkedin.png";
import instagram from "../../assets/social-media/instagram.png";

const Contact = () => {
  return (
    <section className="text-center px-10 lg:px-20 lg:py-10 py-5">
      <h2 className="text-4xl lg:text-6xl font-bold tracking-wider">
        Stay near
      </h2>
      <p className="text-lg lg:text-xl tracking-wide text-[#ddd] my-8">
        Follow us on the different social media platforms and don’t miss what is
        new
      </p>
      <div className="flex justify-between gap-2 flex-wrap">
        {cards.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`${item.bg} flex-1 flex flex-col items-center p-8 gap-8 duration-300 hover:brightness-125`}
          >
            <img src={item.icon} alt={item.label} />
            <p className="font-bold text-xl tracking-wide">{item.label}</p>
            <p className="font-extralight text-4xl mt-8 tracking-widest">
              Follow
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

const cards = [
  {
    icon: x,
    href: "https://twitter.com/engzagfamily",
    label: "X",
    bg: "bg-[#777] bg-opacity-30",
  },
  {
    icon: facebook,
    href: "https://www.facebook.com/zagengfamily",
    label: "Facebook",
    bg: "bg-[#1877F2] bg-opacity-30",
  },
  {
    icon: linkedin,
    href: " https://www.linkedin.com/company/zagengfamily",
    label: "Linkedin",
    bg: "bg-[#007AB9] bg-opacity-30",
  },
  {
    icon: instagram,
    href: "https://www.instagram.com/zagengfamily/",
    label: "Instagram",
    bg: "bg-[#C61C98] bg-opacity-30",
  },
];

export default Contact;
