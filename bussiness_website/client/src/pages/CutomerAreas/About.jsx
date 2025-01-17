import React from "react";

const About = () => {
  return (
    <>
      <div className="h-[400px] flex flex-col items-center px-[5.5%] bg-basedark text-white py-12">
        <div className="w-full p-5">
          <div className="text-left text-white px-4 py-2">
            <h1 className="text-4xl font-bold sm:text-xl md:text-2xl lg:text-3xl">
              Expert Advice
            </h1>
            <h1 className="text-4xl font-bold sm:text-lg md:text-xl lg:text-2xl">
              Exceptional Service
            </h1>
          </div>
        </div>
        {/* Logo with margin-top */}
        <div className="flex justify-center items-center mt-10 sm:mt-6 md:mt-8 lg:mt-10">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
        </div>
      </div>
      <div className="container mx-auto px-8 py-12 bg-darkgray text-white">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-5 text-center text-white">
          About <span className="text-Green">Us</span>
        </h1>
        {/* Paragraphs */}
        <p className="mb-3 text-justify mt-4 text-white">
          Located at the iconic City Tower offices in Manchester’s Central
          Business District, overlooking the vibrant Piccadilly Gardens public
          square, our landmark offices are centrally positioned in the heart of
          the city. With Piccadilly Gardens Metrolink tram station and the bus
          interchange right on our doorstep, and Manchester Piccadilly train
          station just a 5-minute walk away, offering excellent connectivity.
        </p>
        <p className="mb-3 mt-4 text-justify text-white">
          We have client meeting spaces available throughout Greater Manchester,
          Lancashire, and West Yorkshire.
        </p>
        <p className="mb-3 mt-4 text-justify text-white">
          <span className="font-semibold">Express Evictions</span> is a leading
          national property consultancy and provider of landlord support
          services, specialising in tenant evictions and a wide range of
          property-related solutions. In addition to eviction services, we offer
          expert advice on landlord issues, debt recovery, rent protection,
          insurance, mortgages, and more.
        </p>
        <p className="mb-3 mt-4 text-justify text-white">
          We are represented in every County Court in England, plus the High
          Court. Our services extend across{" "}
          <span className="font-semibold">England and Wales,</span> ensuring
          comprehensive support for landlords nationwide.
        </p>
        <p className="mb-5 mt-4 text-justify text-white">
          With nearly two decades of experience in tenant evictions and debt
          collection, we have successfully served tens of thousands of
          customers, maintaining a 99% success rate.
        </p>
        <p className="mb-3 mt-4 text-justify font-semibold text-white">
          Our key services include:
        </p>
        {/* Unordered List */}
        <ul className="list-disc pl-8 mb-5 text-left text-white">
          <li>
            Serving Notices to Quit,{" "}
            <span className="font-semibold">Notices Seeking Possession</span>,
            Section 8 and Section 21 Notices.
          </li>
          <li>
            Obtaining Possession Orders via both Accelerated Possession and
            Standard Possession routes.
          </li>
          <li>
            Applying for{" "}
            <span className="font-semibold"> Warrants and Writs</span> to evict
            tenants.
          </li>
          <li>
            Recovering tenant debt on behalf of landlords, agents, and legal
            professionals nationwide.
          </li>
        </ul>
        {/* Centered Image */}
        <div className="flex justify-center mb-5">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="rounded"
          />
        </div>
        {/* Additional Paragraphs */}
        <p className="mb-3 text-justify text-white">
          Our multi-award-winning team is led by industry experts with decades
          of experience in residential tenancy enforcement, debt recovery,
          property management, insurance, and mortgages, ensuring we
          consistently deliver exceptional customer service.
        </p>
        <p className="mb-5 mt-4 text-justify text-white">
          We are proud to partner with top law firms, agents, brokers, property
          professionals, and insurers. We hold qualifications, accreditations
          and membership with leading industry bodies,{" "}
          <span className="font-semibold">including:</span>
        </p>
        {/* Additional Lists */}
        <ul className="list-disc pl-8 mb-5 text-left font-semibold text-white">
          <li>The Chartered Institute of Housing (CIH)</li>
          <li>The Chartered Institute of Insurance (CII)</li>
          <li>The Property Redress Scheme (PRS)</li>
          <li>The Association of Residential Letting Agents (ARLA)</li>
          <li>The National Residential Landlords Association (NRLA)</li>
          <li>The Financial Conduct Authority (FCA)</li>
        </ul>
        <p className="mb-3 text-justify text-white">
          We can assist even in complex situations, including:
        </p>
        <ul className="list-disc pl-5 mb-5 text-left font-semibold text-white">
          <li>No written tenancy agreement.</li>
          <li>
            Deposit issues, including non-protection or incorrect protection.
          </li>
          <li>Incorrectly served or missing deposit prescribed information.</li>
          <li>
            Issues with EPCs, Gas Safety Certificates, or the How to Rent Guide.
          </li>
          <li>Problems related to Tenant Fees.</li>
          <li>Involvement of a solicitor in the eviction process</li>
        </ul>
        <p className="mb-3 text-justify text-white">
          If you need expert guidance or support with evictions or
          property-related matters,{" "}
          <span className="font-semibold">we are here to help.</span>
        </p>
        <div>
          <button className="bg-Green text-white font-bold py-2 px-4 rounded-full hover:bg-basedark transition-colors duration-300 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 mt-6">
            Call 0800 118 4 118
          </button>
        </div>
      </div>

      {/* Rest of the code for mobile responsiveness and dark theme */}
    </>
  );
};

export default About;
