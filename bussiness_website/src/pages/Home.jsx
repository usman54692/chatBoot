import React from "react";
import styles from "../Styles/Home.module.css";
import PaymentPlans from "../components/PaymentPlans";
import Reviews from "../components/Reviews.jsx";
import Navbar from "../components/Navbar.jsx";
import { GrSecure } from "react-icons/gr";

const Home = () => {
  return (
    <>
      <section className={`${styles.background_Container}`}>
        <div className={`${styles.content} text-center`}>
          <h1 className="md:text-3xl text-lg font-bold uppercase ">
            Evictions Start Here
          </h1>
          <div>
            <button className={`${styles.btn}`}>START NOW</button>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="py-10">
        <h1 className="text-Green text-lg md:text-3xl text-center font-semibold">
          <span className="text-white">EXPERTS IN</span> OBTAINING POSSESSION
          FOR LANDLORDS
        </h1>
      </div>

      {/*  */}

      <section className={`${styles.container} px-10  `}>
        <div className={`${styles.imageContainer}`}></div>
        <div className={`${styles.textContainer} text-white`}>
          <p className="text-justify">
            Now part of Sentinel Solutions Ltd. Express Evictions are based at
            the iconic City Tower offices within Manchester’s Central Business
            District right in the heart of the city. We have dealt with almost
            every eviction scenario imaginable. Our dedicated team of committed
            professionals advises and assists clients with residential tenancy
            evictions and collect associated debts and costs nationally.
            Specialists in our field – we advise, mediate, litigate and manage
            national delivery of our core services. <br />
          </p>
          <p className="text-justify">
            We have been providing outstanding solutions which minimise costs
            and reduce losses for almost 2 decades.
          </p>
          <p className="text-justify">
            Our services are available throughout England and Wales.
          </p>
          <p className="text-justify">
            There are 3 stages to the eviction process with each step having a
            fixed price – with NO HIDDEN COSTS.
          </p>
          <p className="text-justify">
            Contact us for further help, information or to book a FREE CASE
            REVIEW.
          </p>
          <p className="text-justify">
            Click here to read our advice page on ‘How to Evict a Tenant in
            2023’.
          </p>
          <a href="" className="text-Green">
            Click here to read our advice page on ‘How to Evict a Tenant in
            2023’.
          </a>
        </div>
      </section>

      {/*  */}

      <div className="py-10 text-center">
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-Green text-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          0 800 118 4 118
        </button>
        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-Green rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Book Consultation
        </button>
      </div>

      {/*  */}

      <div className="py-10">
        <h1 className="text-Green text-lg md:text-3xl text-center font-semibold">
          TENANT
          <span className="text-white"> EVICTION</span>
          SERVICES
        </h1>
      </div>

      {/*  */}
      <div className=" px-10 flex flex-wrap justify-center gap-3">
        <PaymentPlans stage="Stage 1" />
        <PaymentPlans stage=" Stage 2" />
        <PaymentPlans stage=" Stage 3" />
      </div>

      {/*  */}
      <div className="py-10 text-center">
        <button
          type="button"
          class="py-3 px-7 me-2 mb-2 text-sm font-medium focus:outline-none bg-Green text-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          0 800 118 4 118
        </button>
        <button
          type="button"
          class="py-3 px-7 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-Green rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Book Consultation
        </button>
      </div>

      {/* Reviews */}

      <div className="flex justify-center py-20">
        <Reviews />
      </div>

      {/*  tanet*/}

      <section className="bg-darkgray px-4 py-8">
        <div className="text-center p-10 flex flex-col gap-10 text-white">
          <h1 className="font-semibold text-2xl text-Green">
            RENT <span className="text-white">PROTECTION</span> GUARANTEE
          </h1>
          <p className="text-sm md:text-base">
            Non-payment of rent and legal costs arising from tenancy breaches,
            such as anti-social behaviour and tenant fraud, are two of the
            biggest financial risks to landlords.
          </p>
          <p className="text-sm md:text-base">
            We have teamed up with leading landlord insurer RentGuard to protect
            landlords against both rent loss and legal costs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 p-5 md:p-20">
          {/* Left Section with Image */}
          <div className="md:flex-1 border border-white flex items-center justify-center">
            <img
              src="https://expressevictions.co.uk/wp-content/uploads/2020/12/Express-Evictions-Grey-E1-Light-1-1536x588.png"
              alt="Express Evictions"
              className="w-full h-auto"
            />
          </div>

          {/* Right Section with Text and Button */}
          <div className="md:flex-1 flex justify-center items-center bg-basedark text-white p-5 rounded-lg">
            <div className="text-center flex flex-col gap-6">
              <h1 className="font-semibold text-xl">
                PROTECTION AGAINST NON-PAYMENT OF RENT
              </h1>
              <h4 className="text-lg font-medium">PEACE OF MIND FROM £45</h4>
              <h3 className="text-lg font-medium">
                Rent Guarantee and Legal Expenses Cover
              </h3>
              <div>
                <button
                  type="button"
                  className="py-3 px-7 text-sm font-medium bg-Green text-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 transition duration-300"
                >
                  0800 118 4 118
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section  */}

      <section className="bg-darkgray px-4 py-8 my-10">
        <div className="text-center p-10 flex flex-col gap-10 text-white">
          <h1 className="font-semibold text-2xl text-Green">
            ABOUT <span className="text-white">OUR</span> SERVICES
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 p-5 md:p-20">
          {/* Left Section with Image */}
          <div className="md:flex-1 border border-white flex items-center justify-center">
            <img
              src="https://expressevictions.co.uk/wp-content/uploads/2020/12/Express-Evictions-Grey-E1-Light-1-1536x588.png"
              alt="Express Evictions"
              className="w-full h-auto"
            />
          </div>

          {/* Right Section with Text and Button */}
          <div className="md:flex-1 flex justify-center items-center bg-basedark text-white p-5 rounded-lg">
            <div className="text-center flex flex-col gap-6">
              <h1 className="font-semibold text-xl">We are a member of the:</h1>
              <div className="flex justify-center">
                <img
                  src="http://expressevictions.co.uk/wp-content/uploads/2021/01/prs.jpg"
                  alt="The Independent Property Ombudsman"
                  className="w-32 h-auto"
                />
              </div>
              <h3 className="text-lg font-medium">
                The Independent Property Ombudsman
              </h3>
              <p className="text-sm md:text-base">
                The purpose of PRS is to provide our customers enhanced customer
                service.
              </p>
              <div>
                <button
                  type="button"
                  className="text-white bg-Green hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* secure informed */}

      <section className="bg-basedark py-10 px-4">
  <div className="flex flex-col md:flex-row gap-10">
    {/* First Section */}
    <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-darkgray p-6 rounded-lg">
      <div className="h-20 w-20 bg-gray-700 rounded-full flex justify-center items-center mb-4">
        <GrSecure className="text-white text-2xl" />
      </div>
      <span className="text-4xl font-semibold mb-2 text-Green ">Secure</span>
      <p className="text-sm md:text-base leading-relaxed text-justify">
        We deploy a bespoke integrated Microsoft IT solution that brings
        together best-in-class data, communication, and security products by
        Microsoft, along with advanced systems and device management capabilities
        to process and safeguard your data. Data flows through our systems
        quickly and meticulously, ensuring accuracy and security. All data is
        protected via Microsoft’s secure cloud servers, and we control and manage
        access to it. Our Full Stack Microsoft deployment (Dynamics, Exchange,
        Office, Windows) enables us to manage identity and access across all
        systems, protect data, and use advanced threat protection. We are also
        safeguarded against unsafe attachments, suspicious links, and other cyber
        threats.
      </p>
    </div>

    {/* Second Section */}
    <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-basedark p-6 rounded-lg">
      <div className="h-20 w-20 bg-gray-700 rounded-full flex justify-center items-center mb-4">
        <GrSecure className="text-white text-2xl" />
      </div>
      <span className="text-4xl font-semibold mb-2 text-Green ">Secure</span>
      <p className="text-sm md:text-base leading-relaxed text-justify">
        We deploy a bespoke integrated Microsoft IT solution that brings
        together best-in-class data, communication, and security products by
        Microsoft, along with advanced systems and device management capabilities
        to process and safeguard your data. Data flows through our systems
        quickly and meticulously, ensuring accuracy and security. All data is
        protected via Microsoft’s secure cloud servers, and we control and manage
        access to it. Our Full Stack Microsoft deployment (Dynamics, Exchange,
        Office, Windows) enables us to manage identity and access across all
        systems, protect data, and use advanced threat protection. We are also
        safeguarded against unsafe attachments, suspicious links, and other cyber
        threats.
      </p>
    </div>
  </div>
</section>

{/* trusted swift */}

<section className="bg-basedark py-10 px-4">
  <div className="flex flex-col md:flex-row gap-10">
    {/* First Section */}
    <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-basedark p-6 rounded-lg">
      <div className="h-20 w-20 bg-gray-700 rounded-full flex justify-center items-center mb-4">
        <GrSecure className="text-white text-2xl" />
      </div>
      <span className="text-4xl font-semibold mb-2 text-Green ">Secure</span>
      <p className="text-sm md:text-base leading-relaxed text-justify">
        We deploy a bespoke integrated Microsoft IT solution that brings
        together best-in-class data, communication, and security products by
        Microsoft, along with advanced systems and device management capabilities
        to process and safeguard your data. Data flows through our systems
        quickly and meticulously, ensuring accuracy and security. All data is
        protected via Microsoft’s secure cloud servers, and we control and manage
        access to it. Our Full Stack Microsoft deployment (Dynamics, Exchange,
        Office, Windows) enables us to manage identity and access across all
        systems, protect data, and use advanced threat protection. We are also
        safeguarded against unsafe attachments, suspicious links, and other cyber
        threats.
      </p>
    </div>

    {/* Second Section */}
    <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-darkgray p-6 rounded-lg">
      <div className="h-20 w-20 bg-gray-700 rounded-full flex justify-center items-center mb-4">
        <GrSecure className="text-white text-2xl" />
      </div>
      <span className="text-4xl font-semibold mb-2 text-Green ">Secure</span>
      <p className="text-sm md:text-base text-justify leading-relaxed">
        We deploy a bespoke integrated Microsoft IT solution that brings
        together best-in-class data, communication, and security products by
        Microsoft, along with advanced systems and device management capabilities
        to process and safeguard your data. Data flows through our systems
        quickly and meticulously, ensuring accuracy and security. All data is
        protected via Microsoft’s secure cloud servers, and we control and manage
        access to it. Our Full Stack Microsoft deployment (Dynamics, Exchange,
        Office, Windows) enables us to manage identity and access across all
        systems, protect data, and use advanced threat protection. We are also
        safeguarded against unsafe attachments, suspicious links, and other cyber
        threats.
      </p>
    </div>
  </div>
</section>

{/* links */}

<section className="py-10 px-4 bg-basedark mt-10">
  {/* Title */}
  <div className="text-center mb-6">
    <h1 className="text-2xl font-semibold text-white">Powered and Secured by:</h1>
  </div>

  {/* Images Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
    {/* Each Image */}
    <div>
      <img
        src="https://expressevictions.co.uk/wp-content/uploads/2019/02/sitelock.jpg"
        alt="Sitelock"
        className="w-full h-auto max-w-[150px]"
      />
    </div>
    <div>
      <img
        src="https://expressevictions.co.uk/wp-content/uploads/2019/02/microsoft-dynamics.jpg"
        alt="Microsoft Dynamics"
        className="w-full h-auto max-w-[150px]"
      />
    </div>
    <div>
      <img
        src="https://expressevictions.co.uk/wp-content/uploads/2019/02/microsoft-dynamics.jpg"
        alt="Microsoft Dynamics"
        className="w-full h-auto max-w-[150px]"
      />
    </div>
    <div>
      <img
        src="https://expressevictions.co.uk/wp-content/uploads/2019/02/ssl-secure.jpg"
        alt="SSL Secure"
        className="w-full h-auto max-w-[150px]"
      />
    </div>
  </div>
</section>


{/*  last section */}

<section className="py-10 px-4 bg-darkgray mt-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Tenants Section */}
    <div className="flex flex-col justify-center items-center p-6 bg-basedark rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-Green mb-2 ">Tenants</h1>
      <p className="text-white mb-2 text-justify">
        We cannot help you. You should contact a solicitor or local advice centre.
      </p>
      <p className="text-white text-justify">
        We only speak to tenants when instructed by their landlord(s).
      </p>
    </div>

    {/* Landlords Section */}
    <div className="flex flex-col justify-center items-center p-6 bg-darkgray rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold text-Green mb-2 ">Landlords</h1>
      <p className="text-white mb-2 text-justify">
        Evictions usually take 2 to 6 months. Notices and court applications must run their course.
      </p>
      <p className="text-white mb-2 text-justify">
        For an update on your case please email us. Emails are responded to within 1 business day.
      </p>
      <p className="text-white text-justify">
        Please read the Eviction Advice and T&Cs pages before contacting us.
      </p>
    </div>

    {/* Local Authority/Solicitor Section */}
    <div className="flex flex-col justify-center items-center p-6 bg-basedark  rounded-lg shadow-md text-center">
      <h1 className="text-lg font-bold text-Green mb-2 text-justify">Local Authority/Solicitor or Adviser Enquiries</h1>
      <p className="text-white mb-2 text-justify">
        All communication in writing. Please email any enquiries to info@expressevictions.co.uk.
      </p>
      <p className="text-white text-justify">
        Please include the tenant's name, the rental property address, and evidence of your authority to act.
      </p>
    </div>
  </div>
</section>
{/*  */}

<section class="flex flex-col items-center justify-center p-6">
   <div class="text-center">
      <h1 class="text-3xl font-bold mb-4 text-white capitalize">
         Speak to an eviction expert 365 days a year
      </h1>
      <div>
         <button 
            type="button" 
            class="py-2.5 px-5 mb-2 text-xl font-medium text-white focus:outline-none bg-Green rounded-full  hover:bg-gray-100 hover:text-Green focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700">
            Alternative
         </button>
      </div>
   </div>
</section>





    </>
  );
};

export default Home;
