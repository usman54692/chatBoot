import React from "react";

const CardDesign = () => {
  const cards = [
    {
      icon: "🌟", // Replace with an icon or use FontAwesome/Material Icons
      title: "PEACE OF MIND",
      description: "Protected against non payment and legal expenses.",
    },
    {
      icon: "🚀",
      title: "PROTECT RENTAL INCOME",
      description: "Guaranteed rent, up to £3,000 per month.",
    },
    {
      icon: "💡",
      title: "AVOID LEGAL EXPENSES",
      description: "Up to £25,000 for tenancy breaches.",
    },
    {
        icon: "💡",
        title: "6 OR 12 MONTHS",
        description: "Policy lengths to suit you.",
      },
      {
        icon: "💡",
        title: "MULTIPLE TENANTS",
        description: "Up to 5 tenants covered on one policy.",
      },
      {
        icon: "💡",
        title: "NO EXCESS OPTION",
        description: "Pay no excess in the event of a claim.",
      },
  ];

  return (
    <div className="bg-basedark py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-darkgray shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-xl text-Green font-bold mb-2">{card.title}</h2>
              <p className="text-white">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
