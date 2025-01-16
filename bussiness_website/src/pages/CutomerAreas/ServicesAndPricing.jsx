import React from 'react'
import styles from "../Styles/Home.module.css";
import review from '../components/Reviews.jsx'
import ReviewsSlider from '../components/Reviews.jsx';
import { GrSecure } from "react-icons/gr";



const BailiffStage = () => {
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
        <h1 className="text-Green text-lg md:text-3xl text-center font-semibold">
        REQUESTING 
          <span className="text-white">POSSESSION</span> REQUESTING 
        </h1>
      </div>
      {/*  */}
      <div class="container mx-auto px-4 py-6">
  <div class="text-center mb-8">
    <h2 class="text-3xl font-semibold">Our Fixed Fee Services</h2>
    <p class="text-lg mt-2">We offer fixed fees for our most popular services, providing our clients savings and clarity.</p>
    <p class="text-lg mt-2">If you have any queries please get in touch with us, one of our customer service agents will be happy to help.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <div class="bg-white shadow-md rounded-lg p-4 text-center">
      <h3 class="text-xl font-semibold">SECTION 21 NOTICE</h3>
      <p class="mt-2">£195</p>
      <p>Prepare and Serve a Section 21 Notice.</p>
    </div>
    
    <div class="bg-white shadow-md rounded-lg p-4 text-center">
      <h3 class="text-xl font-semibold">SECTION 8 NOTICE (Rent Only)</h3>
      <p class="mt-2">£195</p>
      <p>Prepare and Serve a Section 8 Notice for Rent Arrears only.</p>
    </div>


    <div class="bg-white shadow-md rounded-lg p-4 text-center">
      <h3 class="text-xl font-semibold">SECTION 8 NOTICE (Non Rent)</h3>
      <p class="mt-2">£250</p>
      <p>Prepare and Serve a Section 8 Notice for any Ground other than rent.</p>
    </div>

    
    <div class="bg-white shadow-md rounded-lg p-4 text-center">
      <h3 class="text-xl font-semibold">BOTH SECTION 8 AND 21 NOTICES</h3>
      <p class="mt-2">From £350</p>
      <p>Prepare and Serve both Section 8 and Section 21 Notices together.</p>
    </div>

    
    <div class="bg-white shadow-md rounded-lg p-4 text-center">
      <h3 class="text-xl font-semibold">WARNING LETTER</h3>
      <p class="mt-2">From: £195</p>
      <p>Prepare and Serve any tenancy letter.</p>
    </div>

    <div class="bg-white shadow-md rounded-lg p-4 text-center">
      <h3 class="text-xl font-semibold">DRAFT WITNESS STATEMENT</h3>
      <p class="mt-2">From £750</p>
      <p>Prepare a draft witness statement.</p>
    </div>

    
     Add similar blocks for each other service as required
    
  </div>

  <div class="mt-8 text-center">
    <p class="text-lg">For anything not listed, please contact us.</p>
  </div>
</div>



            {/*  */}
            <section className="px-4 py-20 flex flex-col lg:flex-row items-stretch bg-darkgray text-white space-y-6 lg:space-y-0 lg:space-x-6">
  {/* First Div: Bailiff/Warrant Stage Fees */}
  <div className="lg:w-1/2 border border-white p-6 lg:p-8 flex flex-col">
    <h1 className="text-2xl lg:text-3xl font-bold mb-4">BAILIFF/WARRANT STAGE FEES</h1>
    <ul className="list-disc pl-6 space-y-4">
      <li>
        <strong>County Court Bailiff Eviction – £300</strong>
        <p className="mt-2">Court Fee of £143 is also payable. No hidden costs.</p>
        <p>Eviction is usually carried out within 3 to 12 weeks.</p>
      </li>
      <li>
        <strong>High Court Enforcement Eviction – £1195</strong>
        <p className="mt-2">All inclusive of tax and court fees.</p>
        <p>Eviction is usually carried out within 1 to 3 weeks.</p>
      </li>
    </ul>
    <p className="mt-6">
      All warrant/writ applications are completed within 48 hours of payment, excluding Sunday.
    </p>
    <p className="mt-2">No Hidden Fees. Eviction Guaranteed. Money Back Guarantee. Price Match Available.</p>
  </div>

  {/* Second Div: Bailiff/Warrant Stage Service */}
  <div className="lg:w-1/2 bg-basedark p-6 lg:p-8 flex flex-col">
    <h1 className="text-2xl lg:text-3xl font-bold mb-4">BAILIFF/WARRANT STAGE SERVICE</h1>
    <p className="mb-4">We will arrange a bailiff to evict the tenant for you.</p>
    <h2 className="text-xl lg:text-2xl font-semibold mb-4">The service includes the following:</h2>
    <ul className="list-disc pl-6 space-y-4">
      <li>Preparation and completion of all relevant court paperwork.</li>
      <li>Arranging for bailiffs or enforcement officers/agents to evict the tenant(s).</li>
      <li>All Writ/Warrant applications are submitted within 48 hours of payment.</li>
      <li>We support and advise you for the duration.</li>
    </ul>
  </div>
</section>
{/*  */}
<section className="px-4 py-8 flex flex-col lg:flex-row items-stretch bg-darkgray text-white space-y-6 lg:space-y-0 lg:space-x-6">
  {/* First Div: WHY US */}
  <div className="lg:w-1/2 border border-white p-6 lg:p-8 flex flex-col">
    <h1 className="text-2xl lg:text-3xl font-bold mb-4">WHY US?</h1>
    <ul className="list-disc pl-6 space-y-4">
      <li>Our methods are tried, tested, and continuously improved.</li>
      <li>We ensure ALL the work is done BEFORE we apply, mitigating any risks involved.</li>
      <li>We have a 99% success rate and 10,000’s of happy customers.</li>
      <li>Service delivery is within 48 hours of payment being made.</li>
      <li>We deploy a Microsoft Full Stack data processing and security solution.</li>
      <li>We are members of the Property Redress Scheme.</li>
      <li>All our work is insured.</li>
      <li>We guarantee eviction.</li>
    </ul>
  </div>

  {/* Second Div: Call to Action */}
  <div className="lg:w-1/2 bg-basedark p-6 lg:p-8 flex flex-col">
    <h1 className="text-2xl lg:text-3xl font-bold mb-4">CALL 0800 118 4 118</h1>
    <p className="text-lg mb-4">
      Call <span className="font-bold">0800 118 4 118</span> for a <span className="font-bold">FREE case review</span> now!
    </p>
    <p className="text-lg">
      <strong>
        If you have already obtained a court order and want to proceed with an
        eviction, we may be able to organise one in just a few days; please
        contact us for further details.
      </strong>
    </p>
  </div>
</section>
{/*  */}

<div className="px-4 sm:px-6 lg:px-8 py-20">
  <div className="max-w-7xl mx-auto">
    <div className="w-full overflow-hidden">
      <ReviewsSlider />
    </div>
  </div>
</div>

{/* about */}
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
      {/*  */}

      <section className="bg-basedark py-20 px-4">
  <div className="flex flex-col md:flex-row gap-10">
    {/* First Section with Border */}
    <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-basedark p-6 rounded-lg border border-white">
      <div className="h-20 w-20 bg-darkgray rounded-full flex justify-center items-center mb-4">
        <GrSecure className="text-white text-2xl" />
      </div>
      <span className="text-4xl font-semibold mb-4 text-Green">Secure</span>
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

    {/* Second Section without Border */}
    <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-darkgray p-6 rounded-lg">
      <div className="h-20 w-20 bg-basedark rounded-full flex justify-center items-center mb-4">
        <GrSecure className="text-white text-2xl" />
      </div>
      <span className="text-4xl font-semibold mb-4 text-Green">Informed</span>
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

{/* Trusted Swift */}
<section className="bg-basedark py-10 px-4 ">
  <div className="flex flex-col md:flex-row gap-10">
    {/* First Section without Border */}
    <div className="flex-1 flex flex-col items-center justify-center text-white text-center bg-darkgray p-6 rounded-lg">
      <div className="h-20 w-20 bg-basedark rounded-full flex justify-center items-center mb-4">
        <GrSecure className="text-white text-2xl" />
      </div>
      <span className="text-4xl font-semibold mb-4 text-Green">Trusted</span>
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

    {/* Second Section with Border */}
    <div className="flex-1 flex flex-col items-center justify-center text-white text-center  p-6 rounded-lg border border-white">
      <div className="h-20 w-20 bg-darkgray rounded-full flex justify-center items-center mb-4">
        <GrSecure className="text-white text-2xl" />
      </div>
      <span className="text-4xl font-semibold mb-4 text-Green">Swift</span>
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

      {/* links*/}
      <section className="py-20 px-4 bg-basedark mt-10">
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
<section className="py-20 px-4 bg-darkgray mt-10 ">
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
<section class="flex flex-col items-center justify-center p-6 py-20">
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









            


            



    </div>

    
      
    </>
  )
}

export default BailiffStage