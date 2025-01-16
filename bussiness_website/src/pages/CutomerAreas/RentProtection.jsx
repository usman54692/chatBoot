import React from "react";
import CardDesign from "../../components/Cards";

const RentProtection = () => {
  return (
    <>
      <div className="bg-darkgray text-white">
        <div className="flex flex-col items-center px-6 lg:px-20 py-10">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold md:text-3xl sm:text-2xl">
              Expert Advice
            </h1>
            <h1 className="text-4xl font-bold md:text-3xl sm:text-2xl">
              Exceptional Service
            </h1>
          </div>
          <img
            src="https://expressevictions.co.uk/wp-content/uploads/2021/01/RentGuard.png"
            alt="RentGuard Logo"
            className="w-32 h-32 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 object-contain"
          />
        </div>

        <div className="text-center px-6 lg:px-60 py-10">
          <h1 className="text-3xl font-bold">
            <span className="text-Green">RENT GUARANTEE</span> AND{" "}
            <span className="text-Green">LEGAL EXPENSES</span> INSURANCE
          </h1>
          <p className="mt-5 text-lg">
            Non-payment of rent and legal costs arising from tenancy breaches
            such as anti-social behaviour and tenant fraud are some of the
            biggest financial risks to landlords.
          </p>
          <p className="mt-5 text-lg">
            We have teamed up with leading landlord insurer RentGuard to protect
            you against both rent loss and legal costs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-around items-center gap-6 px-6 lg:px-20 py-20">
          <div className="border border-gray-500 bg-darkgray p-6 w-full lg:w-1/3">
            <img
              src="https://expressevictions.co.uk/wp-content/uploads/2021/01/RentGuard.png"
              alt="RentGuard"
              className="max-w-full h-auto object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center bg-basedark p-5">
            <p className="text-xl font-bold mb-4">PROTECTION AGAINST NON-PAYMENT OF RENT</p>
            <p className="text-lg mb-4">PEACE OF MIND FROM £45</p>
            <p className="text-lg font-semibold mb-6">
              Rent Guarantee and Legal Expenses Cover
            </p>
            <button className="bg-Green text-white font-bold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300">
              Get A Quote
            </button>
          </div>
        </div>

       <section>
         <CardDesign />
       </section>

        <div className="text-center py-10 px-6  lg:px-60">
          <h1 className="text-3xl font-bold">
            OUR <span className="text-Green">RENT GUARANTEE</span> PRODUCT
            AND SERVICE <span className="text-Green">ARE SIMPLE</span>
          </h1>
          <p className="mt-8 text-sm text-left">
            Before a tenant moves in, the landlord(s) or their agent must ensure
            they have completed the 4 Point Check. The 4 Point Check comprises a
            credit check, confirming the tenant's employment status, and taking
            copies of the provided proof of ID and address. Alternately, have
            RentGuard carry out these checks for you via their fair but thorough
            tenant referencing service for just £29.50. Call RentGuard on 0208
            587 1060. Simple.
          </p>
        </div>

        <div className="flex justify-center items-center py-10">
          <button className="bg-Green text-white font-bold py-2 px-6 rounded-full hover:bg-green-400 transition duration-300">
            Get A Quote
          </button>
        </div>
      </div>
    </>
  );
};


export default RentProtection;
