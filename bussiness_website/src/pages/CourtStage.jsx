import React from 'react'
import styles from "../Styles/Home.module.css";
import { CiStickyNote } from "react-icons/ci";
import { FaServicestack } from "react-icons/fa";
import { CiBookmarkMinus } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import Reviews from "../components/Reviews.jsx";
import { GrSecure } from "react-icons/gr";

const CourtStage = () => {
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
          <span className="text-Green"> TENANT EVICTION </span>
          COURT ORDERS
          </h1>
        </div>
        {/*  */}
        <section className="px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-center">
          <div
            className="w-full sm:w-1/2 bg-cover bg-center h-72 sm:h-96"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600')",
              backgroundSize:"cover",
              height:"100vh"
                
            }}
          >
            {/* Image as background */}
          </div>

          <div className="w-full sm:w-1/2 px-4 sm:px-8 mt-4 sm:mt-0">
            <p className="text-justify mb-4 font-bold text-white">
            Accelerated Possession, Rent Arrears or Standard Possession
            All Applications Submitted Within 10 Days
              <br />
            </p>
            <p className="text-justify mb-4 text-white">
            If a tenant does not leave or resolve issues by the date stated in either the Section 8 or Section 21 Notice, we can commence possession action via the County Court to obtain a Possession Order, which will specify the date by which the tenant(s) must leave the property.
            </p>
            <p className="text-justify mb-4 text-white">
            During this stage, we complete and submit the full possession application bundle to the court, including all required evidence. An SRA-regulated Landlord and Tenant expert eviction solicitor will represent you in court to present your case.
            </p>
            <p className="text-justify mb-4 text-white">
            Possession can only be granted by the court; gaining possession by any other means could be unlawful and constitute a criminal offence.
            </p>
            <p className="text-justify mb-4 text-white">
            We will obtain a possession order for you. We are experts in Accelerated Possession, Unpaid Rent/Rent Arrears Possession, and Crime/Anti-Social Behaviour Possession.
            </p>
            <p className="text-justify mb-4 text-white">
            There are different methods by which possession applications can be made; the method used will depend on the circumstances.
            </p>
            <p className="text-justify mb-4 text-white">
            An SRA-regulated Landlord and Tenant Law expert eviction solicitor will represent you in court to present your case.
            </p>
            <p className="text-justify mb-4 text-white">
            We will support you throughout this entire stage via phone, email, and message.
           </p>
            <p className="text-justify mb-4 text-white">
            *If you, your agent, or solicitor have already served notices, we can check them for you before proceeding through this stage. We can also apply to transfer the case to the High Court; call us for further details*
            </p>
           
          </div>
        </section>

        {/*  */}

        <div className="py-10 text-center">
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-Green text-white rounded-full  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
           Call 0 800 118 4 118
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
          <h1 className="text-Green text-lg md:text-3xl text-center font-semibold space-x-1">
            FEES
            <span className="text-white"> AND </span>

            SERVICES
          </h1>
        </div>
        {/*  */}

        <section className="bg-darkgray py-10">
          <div className="flex flex-col md:flex-row px-6 md:px-14 gap-6 md:gap-4">
          <div className="bg-basedark flex-1 p-6">
  <div className="flex justify-center mb-10">
    <CiStickyNote className="text-Green text-3xl" />
  </div>
  <h1 className="text-center text-3xl font-bold text-white mb-6">
    COURT STAGE SERVICE
  </h1>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-left text-2xl font-semibold text-white mb-4">
      Court Possession Order Service
    </h2>
    <p className="text-justify text-white mb-6">
      We will obtain a possession order for you.
    </p>
    <p className="text-justify text-white mb-6">
      The complete possession order application bundle is submitted to court,
      with all the evidence required to obtain a possession order attached
      with it.
    </p>
    <p className="text-justify text-white mb-6">
      An SRA regulated, Landlord and Tenant Law eviction solicitor represents
      you in court to present your case.
    </p>
    <p className="text-justify text-white mb-6">
      You receive your possession order issued by the courts, ordering the
      tenant to leave.
    </p>

    <h2 className="text-left text-2xl font-semibold text-white mb-4">
      Court Stage/Possession Order Service Includes:
    </h2>
    <ul className="list-disc pl-6 text-white space-y-3">
      <li>
        Preparation of the complete court application bundle.
      </li>
      <li>
        The complete court bundle is sent to the landlord to sign within 10
        working days.
      </li>
      <li>We deal with any tenant defence.</li>
      <li>
        An SRA regulated Landlord and Tenant Law expert solicitor represents
        you in court at one court hearing.
      </li>
      <li>
        Preparation and completion of all relevant court paperwork.
      </li>
      <li>
        A Staffed Landlord Helpline open 7 days a week.
      </li>
      <li>
        We have a 99% success rate – we don’t submit cases we can’t win and we
        submit everything we need to win at the outset.
      </li>
      <li>
        We submit everything required to obtain possession with the
        application, including all copies of any document/evidence, such as
        Witness Statements, Rent Statements, Court Forms, AST’s, Notices,
        Certificates of Service, Gas/Deposit Certificates, EPC etc.
      </li>
      <li>
        Phone, email, and message support for the whole duration of the claim.
      </li>
    </ul>

    <p className="text-center text-white mt-6">
      <strong>Tax Included. No Hidden Costs. 24/7 Call Centre.</strong>
    </p>
  </div>
</div>
{/*  */}

<div className="bg-basedark flex-1 p-6">
  <div className="flex justify-center mb-14">
    <CiBookmarkMinus className="text-Green text-3xl" />
  </div>
  <h1 className="text-left text-2xl font-bold text-white mb-4">
    COURT STAGE FEES
  </h1>
  <p className="text-justify text-white mb-4">
    Court Possession Order Fees
  </p>
  <p className="text-justify text-white mb-4">
    ‘Accelerated’ Possession Order via Section 21/Form 6A – £795
  </p>
  <p className="text-justify text-white mb-4">
    Accelerated Possession is a relatively quick route to obtaining a
    possession order. The court makes its decision initially by examining
    the submitted documents. A court hearing is not always required. The
    court can however request a hearing at any time. Solicitor
    Representation at court is included – £795.
  </p>
  <p className="text-justify text-white mb-4">
    ‘Standard’ Possession Order via Section 8 ‘Rent Only’ – £895
  </p>
  <p className="text-justify text-white mb-4">
    For ‘Rent Only’ Section 8 Notices – where the only ‘Grounds’ or reasons
    for possession are that rent is owed. Solicitor Representation at court
    is included – £895.
  </p>
  <p className="text-justify text-white mb-4">
    “Standard” Possession Order via Section 8 for any ‘Non-Rent’ Notice –
    £995
  </p>
  <p className="text-justify text-white mb-4">
    For any Section 8 Notice where any ‘Ground’ or reason other than rent is
    stated. This is usually where a Possession Order is obtained via Section
    8 for crime or disorder. Solicitor Representation at court is included –
    £995.
  </p>
  <p className="text-justify text-white mb-4">
    Court Fee of £391 is also payable.
  </p>
  <p className="text-justify text-white mb-4">
    We are experts in Accelerated Possession, Unpaid Rent/Rent Arrears
    Possession and Crime/Anti-Social Behaviour Possession.
  </p>
  <p className="text-justify text-white mb-4">
    All court applications are completed within 10 working days of payment.
  </p>
  <p className="text-justify text-white mb-4">
    No Hidden Fees. Eviction Guaranteed. Money Back Guarantee. Price Match
    Available.
  </p>
</div>



          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              type="button"
              class="py-2.5 px-5 text-sm font-medium text-white bg-Green rounded-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              0 800 118 4 118
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
        


{/*  */}
<div className="bg-basedark flex-1 p-6">
  <div className="flex justify-center mb-10">
    <CiBookmarkMinus className="text-Green text-3xl" />
  </div>
  <h1 className="text-center text-3xl font-bold text-white mb-6">
    WHY US?
  </h1>
  <div className="max-w-4xl mx-auto">
    <ul className="list-disc pl-6 text-white space-y-4">
      <li>
        Our methods are tried, tested, and continuously improved.
      </li>
      <li>
        We ensure ALL the work is done BEFORE we get to court, mitigating any risks involved.
      </li>
      <li>
        We don’t take on cases we can’t win. We have a 99% success rate and 10,000’s of happy customers.
      </li>
      <li>
        We are experts in Accelerated Possession, Unpaid Rent/Rent Arrears Possession, and Crime/Anti-Social Behaviour Possession.
      </li>
      <li>
        Service delivery is within 10 working days of payment being made.
      </li>
      <li>
        We deploy a Full Stack Microsoft and Zoho data processing and security solution.
      </li>
      <li>
        We are members of the Property Redress Scheme.
      </li>
      <li>
        We are fully insured.
      </li>
      <li>
        We guarantee eviction.
      </li>
    </ul>
  </div>
</div>



{/*  */}


<div className="bg-basedark flex-1 p-6">
  <div className="text-center mb-8">
    <div className="mb-4">
      <IoCall className="text-Green text-4xl font-bold mx-auto" />
    </div>
    <h1 className="text-3xl font-bold text-white mb-2">CALL 0800 118 4 118</h1>
    <p className="text-xl text-white">
      Call <span className="font-semibold">0800 118 4 118</span> for a <span className="font-bold">FREE case review</span> now!
    </p>
  </div>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-semibold text-white mb-4">We can still help where:</h2>
    <ul className="list-disc pl-6 text-white space-y-4">
      <li>There is no written tenancy agreement.</li>
      <li>There are issues with tenant fees.</li>
      <li>There are issues with the landlord’s licence.</li>
      <li>The deposit wasn’t protected or was incorrectly protected.</li>
      <li>
        The deposit prescribed information wasn’t served or was incorrectly
        served.
      </li>
      <li>
        There are issues with the EPC, Gas Safety Certificate, or How to Rent
        Guide.
      </li>
      <li>There is a solicitor involved.</li>
    </ul>
    <p className="text-white mt-6">
      <span className="font-bold">*</span> In some cases, we can apply to transfer the case up to 
      <span className="font-semibold"> The High Court</span>. Transferring the case up can make things quicker at the next stage but is at the discretion of 
      <span className="font-semibold"> The County Court</span> and is usually more expensive. Call for further details.
    </p>
  </div>
</div>

          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              type="button"
              class="py-2.5 px-5 text-sm font-medium text-white bg-Green rounded-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              0 800 118 4 118
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
            <div className="h-20 w-20 bg-gray-700 rounded-full flex justify-center items-center mb-4">
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
            <div className="h-20 w-20 bg-gray-700 rounded-full flex justify-center items-center mb-4">
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
      
  
  )
}

export default CourtStage
