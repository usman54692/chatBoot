import React from 'react'
import styles from "../../Styles/Home.module.css";
import { GrSecure } from "react-icons/gr";

const LandlordAdvice = () => {
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
        <span className="text-white"> TENANT </span>
            
            EVICTION ADVICE
            <span className="text-white"> FOR 2024 </span>
         
            
        </h1>
      </div>
      <div className="py-10">
        <h1 className="text-white text-lg md:text-3xl text-center font-semibold">
        
            
        EVERYTHING YOU NEED TO KNOW ABOUT TENANT EVICTION IN 2024
         
            
        </h1>
      </div>

      {/* section */}
        {/* Section with two divs using flex */}
        <div className="flex flex-col md:flex-row justify-between gap-10 px-4 py-20 bg-darkgray text-white">
        {/* Left div (DISCLAIMER) */}
        <div className="flex-1 p-5 m-2 rounded-lg bg-basedark">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-center text-Green font-bold">
            DISCLAIMER
            <br />
            DO NOT TRY THIS AT HOME!
          </h2>
          <p className="text-center text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">
            This page/site is to be used for information only. All information
            is correct at the time of publishing.
          </p>
          <p className="text-center text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">
            We ask you to read this as part of our free case review. You must
            seek legal advice before acting on any information provided.
          </p>
        </div>
        {/* Right div (INTRODUCTION) */}
        <div className="flex-1 p-5 m-2 rounded-lg border border-white">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-left text-Green font-bold">
            INTRODUCTION
          </h2>
          <p className="text-left text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">
            Residential tenant eviction is a complex area. Getting through an
            eviction successfully can be a complicated process and mistakes can
            be expensive.
          </p>
          <p className="text-justify text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">
            With this in mind a lot of our landlords ask us the following
            question:
          </p>
        </div>
      </div>
      <hr className="w-4/5 sm:w-full  border-t-3 border-Green mx-auto" />

      {/*  */}
      <div className="py-10 bg-darkgray">
        <h1 className="text-white text-lg md:text-3xl text-center font-semibold">
        What can be done to avoid mistakes and get tenant eviction right the first time?
         
            
        </h1>
      </div>
      <div className="py-10 bg-darkgray">
        <h1 className="text-white text-lg md:text-3xl text-center font-semibold pb-5">
        
            
        To answer this question we created this guide.
         
            
        </h1>
        <hr className="w-4/5 sm:w-full  border-t-3 border-Green mx-auto" />
      </div>
    
    {/*  */}
    <div className="py-10 bg-darkgray">
        <h1 className="text-white text-lg md:text-3xl text-center font-semibold">
        RESIDENTIAL TENANCY EVICTION ADVICE 
         
            
        </h1>
      </div>
      {/*  */}
     {/* Single div containing both sections */}
     <div className="flex flex-col px-4 py-10 bg-darkgray text-white">
        {/* AST Section */}
        <div className="p-5 m-2 rounded-lg bg-basedark">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-center text-Green font-bold">
            AST
          </h2>
          <p className="text-center text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">
            In most cases the eviction scenario involves a landlord giving full use
            of a whole property to a tenant on an Assured Shorthold Tenancy (AST). The
            AST is the default tenancy type for a tenancy created after February 1997. 
            To gain possession of a property on an AST you must first give Notice, this 
            is done by serving a Section 8 Notice, a Section 21 Notice, or both.
          </p>
        </div>
        
        {/* Horizontal Line */}
        <hr className="w-4/5 sm:w-full my-10 mx-auto" />
        
        {/* SERVING A VALID NOTICE Section */}
        <div className="p-5 m-2 rounded-lg bg-basedark">
          <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-left text-Green font-bold  ">
            SERVING A VALID NOTICE
          </h2>
          <p className="text-left text-base sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4">
            To be able to use a Section 8 Notice or Section 21 Notice at court, you must
            be able to prove that it was properly served. Tenants can argue they never
            received it or they received it late – which could see a possession claim
            dismissed (thrown out of court), which means starting again. We follow 
            <span className="text-Green font-bold"> Civil Procedure Part 6 Rules</span> 
            when serving our Notices. A tenant cannot argue the Notice wasn’t received – 
            legally it was served when we say it was.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="bg-basedark p-6 rounded-lg shadow-md mx-4 my-8 sm:mx-12 lg:mx-32">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-white">
        SECTION 21 EVICTION EXPLAINED
      </h1>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        Section 21 is the most common method by which landlords regain possession of
        their property let on an AST. A Section 21 Notice is used to end an AST.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The landlord does not need to give a reason for possession via Section 21.
        The process is often called “no fault possession”.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        For a Section 21 Notice to be valid the landlord must be able to provide
        evidence that they have provided the tenant copies of following:
      </p>

      <ul className="list-disc list-inside text-white text-sm sm:text-base lg:text-lg mb-4">
        <li>The government booklet, the ‘How to Rent’ guide;</li>
        <li>A copy of a valid EPC for the property;</li>
        <li>A copy of a valid Gas Safety Certificate for the property, if there is gas;</li>
        <li>A copy of the deposit prescribed information, if there is a deposit.</li>
      </ul>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The deposit, if any, must have been protected within 30 days of being paid.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        No banned tenant fees must have been charged.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        If applicable – you must check this – you may need a valid Property/Landlord
        Licence, as required by any legislation and/or local authority/council - for
        example: a HMO licence or any other property/landlord licence required by any
        legislation and/or any local authority property/landlord licensing scheme
        and/or private rented/landlord licence scheme.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        Once the landlord is able to prove compliance with the above – a Section 21
        Notice can be served.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        If after being served a valid Notice the tenant fails to provide the landlord
        vacant possession (leave the property) by the Notice Date stated within the
        Notice the landlord can apply to court for a possession order.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The landlord in most cases has 6 MONTHS from when the Notice is issued to
        apply to court for a possession order. In some cases where the tenancy
        period is quarterly or longer it is valid for 4 months from the possession
        date specified in the notice.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The Section 21 court process is also known as Accelerated Possession.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The processes involved in Accelerated Possession often mean the landlord does
        not have to go to court to obtain a possession order – IF – everything has
        been done correctly a possession order is usually granted with no court
        hearing.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        However, if there are issues or the tenant defends the case, a court hearing
        may be set.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        Tenants cannot counterclaim via Section 21/Accelerated Possession.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        You cannot obtain a money judgement via Section 21/Accelerated Possession –
        the landlord cannot use Section 21 to recover any rent arrears owed.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        A Section 21 Notice cannot be served in the following circumstances:
      </p>

      <ul className="list-disc list-inside text-white text-sm sm:text-base lg:text-lg mb-4">
        <li>Where any of the above legislation has not been adhered to.</li>
        <li>Within the first 4 months of the tenancy.</li>
        <li>
          Where an Improvement Notice (for repairs, Section 11 and/or Section 12
          Notice) has been served on the property by the local authority within the
          last 6 months.
        </li>
      </ul>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4 font-bold">
        For help with any of above please call 0800 118 4 118
      </p>
    </div>
    {/* section 8 */}
    <div className="bg-basedark p-6 rounded-lg shadow-md mx-4 my-8 sm:mx-12 lg:mx-32">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-white">
        SECTION 8 EVICTION EXPLAINED
      </h1>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        A Section 8 Notice, commonly known as a ‘Notice Seeking Possession’, is used
        to end a tenancy due to a breach of the terms of the AST, such as not paying
        rent.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        To obtain possession via Section 8 you must satisfy at least one of 17 Grounds
        for Possession within the Notice and at County Court. A Section 8 Notice can
        be served whenever a Ground for Possession is met. You must always give a
        reason (Ground for Possession) via Section 8.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        A Section 8 Notice can be used where a Section 21 Notice cannot, such as during
        the fixed term of an AST.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        There will always be a court hearing via Section 8.
      </p>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        More than 8 weeks/2 months owed
      </h2>
      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        Landlords most commonly want to use Section 8 when there are rent arrears.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        If rent is paid weekly, arrears must be 8 weeks or more; if rent is paid monthly,
        arrears must be two months or more – BOTH when the Notice was served and at
        court at the hearing.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        If the tenant reduces the rent arrears balance owed below the 8 weeks/2 months
        threshold before the hearing – it may nullify the rent arrears Grounds for
        Possession contained within the Notice, which may mean starting again or
        severely delaying the process.
      </p>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        Non-Rent Grounds – Evidence and Convincing the Court
      </h2>
      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        When relying on any other Ground for Possession (fraud, crime, disorder, damage),
        you must be able to prove by evidence that the criteria for obtaining a possession
        order have been met.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        You must provide enough evidence – by independent witness, police, local authority,
        agent and/or other(s) reports/statements, pictures, video, etc. – to deal with any
        tenant defence and convince the Court(s).
      </p>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        Counterclaims
      </h2>
      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        Section 8 proceedings allow the tenant to make a counterclaim and defend the case.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The landlord is left open to counterclaims and spurious defences by the tenant,
        which could lead to lengthy legal wrangles.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        A possible outcome of a counterclaim is the landlord leaving court owing the tenant
        money, with the tenant still being allowed to remain in the property.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The tenant may not be bound by pre-court protocols in counterclaim situations and
        may meet criteria for public funding because they are at threat of losing their home.
      </p>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        Deposit
      </h2>
      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The potential penalty at a Section 8 court hearing for not protecting the deposit
        within 30 days of it being paid is – up to three times the amount of the deposit.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        If a penalty is awarded it will be credited to the tenant, usually to the tenant rent
        account. This penalty could bring the tenant rent account out of arrears, nullifying
        the rent arrears Ground for Possession within the Notice, which could mean starting
        again or severely delaying the process.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The tenant may not be bound by pre-court protocols in deposit counterclaim situations
        and may meet criteria for public funding.
      </p>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        Disrepair
      </h2>
      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        At a Section 8 court hearing the tenant may claim the landlord has failed to carry
        out repairs. A tenant can claim disrepair and seek an injunction for repair works
        and compensation for the inconvenience caused by the disrepair.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The tenant may not be bound by pre-court protocols in disrepair counterclaim situations
        and may meet criteria for public funding.
      </p>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        Delays
      </h2>
      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        Upon application the County Court will set a first Section 8 court hearing, the court
        usually set the hearing for between 10 and 20 minutes. If there is any lengthy dispute
        at the first hearing between the landlord and tenant, the matter is usually adjourned
        as there is not enough time for it to be dealt with.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        It is then re-listed to be heard on another day, usually the first available date after
        4 weeks, with more time allocated for the matter to be properly heard. Each time the case
        is adjourned the tenant remains in the property and costs are added due to the further
        hearing being added.
      </p>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        Money Judgement
      </h2>
      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The landlord can obtain a money judgement for rent arrears owed via Section 8.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4 font-bold">
        For help with any of above please call 0800 118 4 118
      </p>
    </div>
    {/* section 8 end */}
    {/* section 8 or 21 compined */}
    <div className="bg-basedark p-6 rounded-lg shadow-md mx-4 my-8 sm:mx-12 lg:mx-32">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-white">
        SECTION 8 OR SECTION 21?
      </h1>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        The Section 8 route is very different to the Section 21 route. In some cases we recommend the Section 21 route over Section 8, due to the inherent risks with Section 8 in regards to counterclaims, etc.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        Section 8 is however a very good tool in certain circumstances and on occasion is the only eviction option available.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        In most cases gaining possession via Section 21 is simpler and less risky.
      </p>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        Section 8 is best used within the first 4 months when Section 21 cannot be used, or where there are high rent arrears and there are no issues with the deposit or repairs.
      </p>
    </div>
    {/* section 8 or 21 end */}
    <div className="bg-basedark p-6 rounded-lg shadow-md mx-4 my-8 sm:mx-12 lg:mx-32">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-white">
        DO’S AND DON’TS
      </h1>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        Avoid Being Prosecuted and Allegations of Harassment
      </h2>
      <ul className="list-disc list-inside text-white text-sm sm:text-base lg:text-lg mb-4">
        <li>Landlords can be prosecuted under the Protection from Eviction Act 1977.</li>
        <li>A landlord cannot interfere with the peace and comfort of a tenant or stop services needed to occupy the property.</li>
        <li>Any illegal action by the landlord can lead to a large fine and even imprisonment.</li>
      </ul>

      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        For further information on harassment <a href="#" className="text-blue-400 underline">click here</a>
      </p>
      <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
        For the Protection from Eviction Act 1977 <a href="#" className="text-blue-400 underline">click here</a>
      </p>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        DO NOT:
      </h2>
      <ul className="list-disc list-inside text-white text-sm sm:text-base lg:text-lg mb-4">
        <li>Turn up unannounced</li>
        <li>Send lots of messages</li>
        <li>Turn off utilities</li>
        <li>Change the locks</li>
        <li>Remove tenant belongings</li>
        <li>Get involved in any verbal/physical altercation</li>
      </ul>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">
        DO:
      </h2>
      <ul className="list-disc list-inside text-white text-sm sm:text-base lg:text-lg mb-4">
        <li>Call us and let us deal with it</li>
      </ul>

      <p className="text-white text-sm sm:text-base lg:text-lg font-bold">
        0800 118 4 118
      </p>
    </div>
    {/* dos end */}
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
      {/* about end */}
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
      
      
            {/* SWIFTY  */}
      
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
            {/* swift  trusted section end */}
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


    









    </div>
      
    </>
  )
}

export default LandlordAdvice

