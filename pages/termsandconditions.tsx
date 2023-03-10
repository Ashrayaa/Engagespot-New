import React from "react";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";

const Terms = () => {
  return (
    <div className="bg-black sm:pt-8">
    <Header/>
      <div className="mt-12 px-12 flex flex-col gap-4 xl:gap-7 xl:px-32">
        <h1 className="text-white text-2xl lg:text-6xl xl:text-7xl font-bold text-center lg:mb-10">Terms and Conditions</h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          Please understand that by accepting these terms and conditions,
          Customer represents and warrants that the Customer is major and thus
          legally capable to enter into contract and in case Customer is acting
          on behalf of some business entity, Customer is duly authorized to
          enter into agreement on behalf of the entity Customer is representing.
          Customer also represents and warrants that the Customer is not a
          competitor of Engagespot. Now therefore by clicking “I agree”,
          ordering and/or using Engagespot™s services, Customer agrees to be
          bound by all of the terms and conditions of this agreement hereinafter
          referred to as the agreement This agreement is entered between
          Engagespot Inc, a company registered under Companies Act 1956 in India
          and the payer or/and the recipient of services hereunder as identified
          as part of the subscription process for Services herein after called
          as Customer , Now Whereas Customer and Engagespot both hereby agree to
          the terms & conditions hereinafter mentioned
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">Using our Service</h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          You must follow any policies made available to you within the
          Services. Don&apos;t misuse our Services. For example, don&apos;t
          interfere with our Services or try to access them using a method other
          than the interface and the instructions that we provide. You may use
          our Services only as permitted by law, including applicable export and
          re-export control laws and regulations. We may suspend or stop
          providing our Services to you if you do not comply with our terms or
          policies or if we are investigating suspected misconduct. Using our
          Services does not give you ownership of any intellectual property
          rights in our Services or the content you access. You may not use
          content from our Services unless you obtain permission from its owner
          or are otherwise permitted by law. These terms do not grant you the
          right to use any branding or logos used in our Services. Don&apos;t
          remove, obscure, or alter any legal notices displayed in or along with
          our Services. In connection with your use of the Services, we may send
          you service announcements, administrative messages, and other
          information. You may opt out of some of those communications
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">Refund Policy</h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          Engagespot doesn&apos;t provides a refund once the paid plan is
          purchased. However, Customer can cancel the service during the free
          trial period (if any) without getting charged. After the trial period
          if mentioned in the subscription plan, we do not offer any refunds.
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">Data and Privacy Protection</h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          Engagespot&apos;s privacy policies explain how we treat your personal
          data and protect your privacy when you use our Services. By using our
          Services, you agree that Engagespot can use such data in accordance
          with our privacy policies.
        </p>

        <h1  className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">Modifying and Terminating our Services</h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          We are constantly changing and improving our Services. We may add or
          remove functionalities or features, and we may suspend or stop a
          Service altogether. You can stop using our Services at any time,
          although we&apos;ll be sorry to see you go. We believe that you own
          your data and preserving your access to such data is important. If we
          discontinue a Service, where reasonably possible, we will give you
          reasonable advance notice and a chance to get information out of that
          Service.
        </p>
      </div>
      <Footer/>
    </div>
  );
};
export default Terms;
