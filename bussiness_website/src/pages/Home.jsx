import React from "react";
import styles from "../Styles/Home.module.css";
import PaymentPlans from "../components/PaymentPlans";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <section className={`${styles.background_Container}`}>
        <div className={`${styles.content} text-center`}>
          <h1 className="text-3xl font-bold uppercase ">
            Evictions Start Here
          </h1>
          <div>
            <button className={`${styles.btn}`}>START NOW</button>
          </div>
        </div>
      </section>
      {/*  */}
      <div className="py-10">
        <h1 className="text-Green text-3xl text-center font-semibold">
          <span className="text-white">EXPERTS IN</span> OBTAINING POSSESSION
          FOR LANDLORDS
        </h1>
      </div>

      {/*  */}

      <section className={`${styles.container} px-10`}>
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
      We have been providing outstanding solutions which minimise costs and reduce losses for almost 2 decades.
    </p>
    <p className="text-justify">Our services are available throughout England and Wales.</p>
    <p className="text-justify">
      There are 3 stages to the eviction process with each step having a fixed price – with NO HIDDEN COSTS.
    </p>
    <p className="text-justify">
      Contact us for further help, information or to book a FREE CASE REVIEW.
    </p>
    <p className="text-justify">
      Click here to read our advice page on ‘How to Evict a Tenant in 2023’.
    </p>
    <a href="" className="text-Green">
      Click here to read our advice page on ‘How to Evict a Tenant in 2023’.
    </a>
    <div className="flex gap-10 font-semibold capitalize text-xl">
      <a href="" className={`${styles.btn}`}>
        Call 0800 118 4 118
      </a>
      <a href="" className={`${styles.btn}`}>
        Booking Consultation
      </a>
    </div>
  </div>
</section>

{/*  */}

<div className="py-10 my-10">
        <h1 className="text-Green text-3xl text-center font-semibold">
          <span className="text-white">TENANT</span> EVICTION SERVICES
        </h1>
      </div>
      {/*  */}
     <div className="px-10 flex flex-wrap justify-center gap-2">
     <PaymentPlans  stage='Stage 1' />
     <PaymentPlans  stage=' Stage 2'/>
     <PaymentPlans  stage=' Stage 3'/>
     <PaymentPlans  stage=' Stage 4'/>

     </div>

      {/*  */}

      <div className="flex justify-center gap-3  py-20 ">
        <a href="" className={`${styles.btn} text-white`}>0800 118 4 118</a>
        <a href="" className={`${styles.btn} text-white`}> Booking Consultation</a>
      </div>

      {/* Reviews */}

       <div className="flex justify-center">
       <Reviews />

       </div>
    </>

  
  );
};

export default Home;
