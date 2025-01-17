import React from "react";
import styles from "../Styles/Home.module.css";
import { CiStickyNote } from "react-icons/ci";
import { FaServicestack } from "react-icons/fa";
import { CiBookmarkMinus } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import Reviews from "../components/Reviews.jsx";
import { GrSecure } from "react-icons/gr";


const SectionNotice = () => {
  return (
    <>
      <div>
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
          <h1 className="text-white text-lg md:text-3xl text-center font-semibold">
            SECTION 8 NOTICE <span className="text-Green"> AND </span>
            SECTION 21 NOTICE
          </h1>
        </div>
        {/*  */}
        <section className="px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-center">
          <div
            className="w-full sm:w-1/2 bg-cover bg-center h-72 sm:h-96"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/6077587/pexels-photo-6077587.jpeg?auto=compress&cs=tinysrgb&w=600')",
            }}
          >
            {/* Image as background */}
          </div>

          <div className="w-full sm:w-1/2 px-4 sm:px-8 mt-4 sm:mt-0">
            <p className="text-justify mb-4 text-white">
              In all cases of possession, a written Notice must be provided.
              <br />
            </p>
            <p className="text-justify mb-4 text-white">
              We ensure all Notices are in the prescribed format, filled out
              correctly, and properly served.
            </p>
            <p className="text-justify mb-4 text-white">
              A defective Notice is one of the most common reasons a possession
              claim is dismissed (thrown out of court).
            </p>
            <p className="text-justify mb-4 text-white">
              It is crucial to get this stage right. We correctly prepare and/or
              legally serve either a Section 8 Notice, a Section 21 Notice, or
              both at the same time.
            </p>
            <p className="text-justify mb-4 text-white">
              Which Notice(s) are served depends on the type of tenancy in place
              and the circumstances of the case.
            </p>
            <p className="text-justify mb-4 text-white">
              Being served an eviction Notice is when most tenants realise how
              serious the situation is.
            </p>
            <p className="text-justify mb-4 text-white">
            Over half of tenants resolve any issues, pay the rent, or leave the property after receiving a Notice from us.
            </p>
           
          </div>
        </section>

        {/*  */}

        <div className="py-10 text-center">
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-Green text-white rounded-full  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
           Call  0 800 118 4 118
          </button>
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-Green rounded-full  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Book Consultation
          </button>
        </div>

        {/*  */}
        <div className="py-10">
          <h1 className="text-Green text-lg md:text-3xl text-center font-semibold">
            FEES
            <span className="text-white"> AND </span>
            SERVICES
          </h1>
        </div>
        {/*  */}

        <section className="bg-darkgray py-10">
          <div className="flex flex-col md:flex-row px-6 md:px-14 gap-6 md:gap-4">
            <div className="bg-basedark flex-1 p-6">
              <div className="flex justify-center mb-14">
                <CiStickyNote className="text-Green text-3xl" />
              </div>
              <h1 className="text-left text-2xl font-bold text-white mb-4">
                NOTICE STAGE FEES
              </h1>
              <h3 className="text-left text-xl font-semibold text-white mb-4">
                Section 21 Notices
              </h3>
              <h4 className="text-left text-lg text-white mb-4">
                Section 21 Notice – We Legally Serve: £195
              </h4>
              <h1 className="text-left text-2xl font-bold text-white mb-4">
                Section 8 Notices
              </h1>
              <p className="text-justify text-white mb-4">
                Section 8 Notice (Rent Only) – We Legally Serve: £195
              </p>
              <p className="text-justify text-white mb-4">
                Section 8 Notice (Non-Rent) – We Legally Serve: £250
              </p>
              <h1 className="text-left text-2xl font-bold text-white mb-4">
                Section 8 and Section 21 Notices Together
              </h1>
              <p className="text-justify text-white mb-4">
                Both Section 8 and Section 21 Notices Served Together – £350
              </p>
              <p className="text-justify text-white mb-4">
                It is best practice to serve both notices together as it
                provides options.
              </p>

              <p className="text-justify text-white mb-4">
                Tax Included. No Hidden Fees. Eviction Guaranteed. Money Back
                Guarantee. Price Match Available.
              </p>
              <h1 className="text-left text-2xl font-bold text-white mb-4">
                Service Includes:
              </h1>
              <ul className="list-disc pl-6 text-white">
                <li className="mb-2">
                  Preparation and/or Service of a Section 8 Notice, a Section 21
                  Notice/Form 6A or both together.
                </li>
                <li className="mb-2">
                  A strongly worded but professional warning letter.
                </li>
                <li className="mb-2">
                  You receive relevant copies of: the Notice(s); Certificate of
                  Service; Proof of Postage; Sworn Affidavits and/or Signed
                  Statement of Service.
                </li>
                <li className="mb-2">
                  All Notices are issued within 48 hours of payment, excluding
                  Sundays and public holidays.
                </li>
              </ul>
            </div>

            <div className="border border-white flex-1 p-6">
              <div className="flex justify-center mb-14">
                <FaServicestack className="text-Green text-3xl" />
              </div>
              <h1 className="text-left text-2xl font-bold text-white mb-4">
                NOTICE STAGE SERVICE
              </h1>
              <h2 className="text-left text-xl font-semibold text-white mb-4">
                Options available for Section 8 and Section 21 Notices:
              </h2>
              <p className="text-justify text-white mb-4">
                You Serve PDF Copy Only’ We prepare the Section 8 Notice,
                Section 21 Notice (Form 6A) or both together, with all the
                relevant details. You receive a copy as a PDF to
                download/email/print/serve, as required. The Notice(s) remain
                the responsibility of the landlord(s) to Serve Legally. This is
                not recommended for everyone.
              </p>

              <p className="text-justify text-white mb-4">
                We Legally Serve’ This is our standard default service and is by
                far the most popular choice. We follow Civil Procedure Part 6
                Rules when serving our Notices – it cannot be argued the Notice
                wasn’t received – legally – it was served when we say it was. We
                serve documents in the same way as speeding tickets, using the
                Court system. You receive Proof of Postage and a Certificate of
                Service.
              </p>

              <p className="text-justify text-white mb-4">
                ‘We Serve by Hand’ Our nationwide network of Association of
                British Investigators registered, professional and experienced
                field agents provide a reliable and confidential service. 75% of
                instructions are completed within 24 hours, most within 3 days
                and all within 10 days. A field agent will attempt to serve the
                Notice(s) at least three times, at different times of the day,
                and at least one visit will be made out of hours. You receive
                either a Certificate of Service, a Statement of Service or a
                Sworn Affidavit confirming the date and time the Notice(s) were
                served.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              type="button"
              class="py-2.5 px-5 text-sm font-medium text-white bg-Green rounded-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
             Call 0 800 118 4 118
            </button>
            <button
              type="button"
              class="py-2.5 px-5 text-sm font-medium text-white bg-Green rounded-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Book Consultation
            </button>
          </div>
        </section>

        {/*  */}

        <section className="bg-darkgray py-10">
          <div className="flex flex-col md:flex-row px-6 md:px-14 gap-6 md:gap-4">
            <div className="bg-basedark flex-1 p-6">
              <div className="flex justify-center mb-14">
                <CiBookmarkMinus className="text-Green text-3xl" />
              </div>
              <h1 className="text-left text-2xl font-bold text-white mb-4">
                WHY US
              </h1>
              <p className="text-justify text-white mb-4">
                Our methods are tried, tested and continuously improved.
              </p>
              <p className="text-justify text-white mb-4">
                We ensure ALL the work is done BEFORE we get to court,
                mitigating any risks involved.
              </p>
              <p className="text-justify text-white mb-4">
                We don’t take on cases we can't win. We have a 99% success rate
                and 10,000’s of happy customers.
              </p>
              <p className="text-justify text-white mb-4">
                We are experts in Accelerated Possession, Unpaid Rent/Rent
                Arrears Possession and Crime/Anti-Social Behaviour Possession.
              </p>
              <p className="text-justify text-white mb-4">
                Service delivery is within 48 hours of payment being made.
              </p>
              <p className="text-justify text-white mb-4">
                We deploy a Full Stack Microsoft and Zoho data processing and
                security solution.
              </p>
              <p className="text-justify text-white mb-4">
                We are a member of the Property Redress Scheme, providing
                enhanced customer support to all our clients.
              </p>
              <p className="text-justify text-white mb-4">
                All our work is insured.
              </p>
              <p className="text-justify text-white mb-4">
                We guarantee eviction.
              </p>
            </div>

            <div className="border border-white flex-1 p-6">
              <div className="flex justify-center mb-14">
                <IoCall className="text-Green text-3xl" />
              </div>
              <h1 className="text-left text-2xl font-bold text-white mb-4">
                CALL 0800 118 4 118
              </h1>
              <p className="text-justify text-white mb-4">
                Call for a FREE case review now! We can still help where:
              </p>
              <ul className="list-disc pl-6 text-white mb-4">
                <li>No tenancy agreement exists.</li>
                <li>There are issues with tenant fees.</li>
                <li>There are issues with the landlord’s licence.</li>
                <li>
                  The deposit wasn’t protected or was incorrectly protected.
                </li>
                <li>
                  The deposit prescribed information wasn’t served or was
                  incorrectly served.
                </li>
                <li>
                  There are issues with the EPC, Gas Safety Certificate or How
                  to Rent Guide.
                </li>
                <li>A solicitor is involved.</li>
              </ul>
              <p className="text-justify text-white mb-4">
                <strong>
                  If you, your Agent or Solicitor have already served a Notice,
                  we can check it for you before proceeding through the Court
                  Stage. We can also apply to transfer the case up to the High
                  Court, call us for further details.
                </strong>
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              type="button"
              class="py-2.5 px-5 text-sm font-medium text-white bg-Green rounded-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
            Call  0 800 118 4 118
            </button>
            <button
              type="button"
              class="py-2.5 px-5 text-sm font-medium text-white bg-Green rounded-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Book Consultation
            </button>
          </div>
        </section>
        {/*  */}
        <section className="bg-basedark py-8">
  <div className="px-6 sm:px-10">
    <h2 className="text-2xl sm:text-3xl font-bold text-left text-white mb-6">
      Section 21 Rules and Advice
    </h2>
    <h3 className="text-xl font-semibold text-left text-white mb-4">
      New Legislation
    </h3>
    <p className="text-white text-justify mb-4">
      New rules as part of The Deregulation Act, The Tenant Fees Act and The Coronavirus Act have been introduced. These Acts added steps to the process of obtaining possession of rental properties.
    </p>
    <p className="text-white text-justify mb-4">
      The Acts state that in all cases of possession, for a Section 21 to be valid, no banned fees must have been charged to the tenant and the landlord must have provided the tenant with copies of the following documents:
    </p>
    <ul className="list-disc pl-6 text-white mb-4">
      <li>The EPC – Energy Performance Certificate (this can be found on the “EPC Register” online, if there is one).</li>
      <li>A valid gas safety certificate, if there is gas at the property.</li>
      <li>The Government’s publication “How to Rent… The checklist for renting in England” (this can be found on the .Gov website online).</li>
    </ul>
    <p className="text-white text-justify mb-4">
      You cannot serve a section 21 within the first 4 months of a tenancy. For a renewed tenancy, it can be served at any time.
    </p>
    <p className="text-white text-justify mb-4">
      Proof that the above documents have been provided to the tenant will be required.
    </p>
    <p className="text-white text-justify mb-4">
      Please contact us for help with any of this.
    </p>

    <h3 className="text-xl font-semibold text-left text-white mb-4">
      Deposit Refund Advice
    </h3>
    <p className="text-white text-justify mb-4">
      To serve a valid section 21, the deposit should have been protected within 30 days of being paid; if not, it must be refunded in full.
    </p>
    <p className="text-white text-justify mb-4">
      Alternately, you can offset it against rent owed or property damage with the tenant(s) agreement – Evidence of the full refund will be needed for court.
    </p>
    <p className="text-white text-justify mb-4">
      If the deposit was protected within 30 days, the deposit Prescribed Information must have been provided to the tenant before a valid section 21 notice can be served. Proof of this will be required for court.
    </p>
    <p className="text-white text-justify mb-4">
      Please contact us for help with any of this.
    </p>

    <h3 className="text-xl font-semibold text-left text-white mb-4">
      Tenancy Agreement
    </h3>
    <p className="text-white text-justify mb-4">
      You must have a written and signed copy of the tenancy agreement (the first and most recent tenancy agreement if there is more than one). Please contact us for further advice if you do not have a signed agreement.
    </p>

    <h3 className="text-xl font-semibold text-left text-white mb-4">
      Property Licence
    </h3>
    <p className="text-white text-justify mb-4">
      If applicable – you must check this – you may need a valid Property/Landlord Licence, as required by any legislation and/or local authority/council – for example: a HMO licence or any other licence required by any legislation and/or any local authority property/landlord licensing scheme and/or private rented/landlord licencing scheme.
    </p>

    <h3 className="text-xl font-semibold text-left text-white mb-4">
      A Section 21 Notice cannot be served in the following circumstances:
    </h3>
    <ul className="list-disc pl-6 text-white mb-4">
      <li>Where any of the above legislation has not been adhered to.</li>
      <li>Where banned tenant fees have been charged.</li>
      <li>Within the first 4 months of the tenancy.</li>
      <li>Where an Improvement Notice for repairs (Section 11 Notice and/or Section 12 Notice) have been served on the property by the local authority within the last 6 months.</li>
    </ul>

    <p className="text-white text-justify mb-4">
      For help with any of the above please call 0800 118 4 118
    </p>
  </div>
</section>


        {/*  */}
        <div className="flex justify-center py-20">
        <Reviews />
      </div>
       
      {/*  ABOUT SECTION */}

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
      {/*  INFORMATION  */}
      <section className="bg-basedark py-10 px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* First Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-darkgray p-6 rounded-lg">
            <div className="h-20 w-20 bg-basedark rounded-full flex justify-center items-center mb-4">
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
            <div className="h-20 w-20 bg-darkgray rounded-full flex justify-center items-center mb-4">
              <GrSecure className="text-white text-2xl" />
            </div>
            <span className="text-4xl font-semibold mb-2 text-Green ">Informed</span>
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


      {/* SWIFTY  */}

      <section className="bg-basedark py-10 px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* First Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-basedark p-6 rounded-lg">
            <div className="h-20 w-20 bg-darkgray rounded-full flex justify-center items-center mb-4">
              <GrSecure className="text-white text-2xl" />
            </div>
            <span className="text-4xl font-semibold mb-2 text-Green ">Trusted</span>
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
            <div className="h-20 w-20 bg-basedark rounded-full flex justify-center items-center mb-4">
              <GrSecure className="text-white text-2xl" />
            </div>
            <span className="text-4xl font-semibold mb-2 text-Green ">Swift</span>
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
      {/* LINKS */}
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
{/*  */}
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
{/*  */}





      </div>
    </>
  );
};

export default SectionNotice;
