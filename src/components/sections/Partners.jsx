import React from "react";
import techneImg from "../../assets/techne.png";
import nourImg from "../../assets/nour.png";

const Partners = () => {
  return (
    <section className="py-14 px-10 lg:px-20">
      <h2 className="font-bold text-center tracking-widest text-xl">
        PARTNERS
      </h2>
      <div className="flex justify-around mt-10 flex-wrap gap-10 [&>*:nth-child(3)]:hidden [&>*:nth-child(4)]:hidden lg:[&>*:nth-child(3)]:block lg:[&>*:nth-child(4)]:block">
        {partnersCards.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

const partnersCards = [
  {
    src: techneImg,
    name: "Techne Summit",
  },
  {
    src: nourImg,
    name: "Nour Center",
  },
  {
    src: techneImg,
    name: "Techne Summit",
  },
  {
    src: nourImg,
    name: "Nour Center",
  },
];

export default Partners;
