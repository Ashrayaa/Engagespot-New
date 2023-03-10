import React from "react";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black sm:pt-8">
      <Header />
      <div className="mt-12 px-12 flex flex-col gap-4 xl:gap-7 xl:px-32">
        <h1 className="text-white text-2xl lg:text-6xl xl:text-7xl font-bold text-center lg:mb-10">
          Privacy Policy
        </h1>
        <h1 className="text-white text-2xl lg:text-6xl xl:text-5xl font-semibold lg:mb-6">
          Introduction
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          This Privacy Policy explains what and how Engagespot owned by
          Engagespot Inc collects yours and your website visitors information,
          how we use such information, and the circumstances under which we may
          disclose such information to others. We respect and value the privacy
          of everyone who use our website and will only collect and use
          information in ways that are useful to you and in a manner consistent
          with your rights and our obligations under the law. Please read this
          Privacy Policy carefully and understand it clearly before using our
          service. Your acceptance of this Privacy Policy is deemed to occur
          upon Your first use of our website. If You do not accept and agree
          with this Privacy Policy, You must stop using Our Site immediately.
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
          Definitions{" "}
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          <span className="text-base font-semibold text-[#C0C0C8]">
            {" "}
            We/Us/Engagespot
          </span>{" "}
          Means Engagespot Inc, company registered in Delaware, United States
          having it&apos;s business address at 1588, 1007 N Orange St. 4th Floor ,
          Wilmington, DE, New Castle, US, 19801
          <span className="text-base font-semibold text-[#C0C0C8]">
            You/Your/Customer
          </span>{" "}
          The registered person/company who use our service to enable push
          notifications on their website.
          <span className="text-base font-semibold text-[#C0C0C8]">
            Subscriber
          </span>{" "}
          The person who subscribe for push notifications on your website.
          <span className="text-base font-semibold text-[#C0C0C8]">
            Cookie
          </span>{" "}
          A small text file placed on Your computer or device by our website
          when You visit certain parts of Our Site and/or when You use certain
          features of Our Site. Details of the Cookies used by Our Site are set
          out in Cookies Section, below.
          <span className="text-base font-semibold text-[#C0C0C8]">
            GDPR
          </span>{" "}
          The EU Regulation 2016/679 General Data Protection Regulation and any
          applicable national laws made under it.
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
          Information We Collect{" "}
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          As a general website visitor, We don ot require any of your personal
          data. However we may use some third party services to customize and
          improve your website browsing experiences. Such informations are
          stored as cookie in your browser. You always have the option to opt
          out of such services. During the registration process, we ask for your
          personal information such as Your Name, Email, Phone Number, Password.
          We may gather additional non personal information about you during the
          registration process.
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
          How do we use your information?{" "}
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          We use your information to provide the service you requested and also
          to contact you regarding our servies. When we collect information
          about you, we will always give an option to opt out. However some
          features may not work if you opt-out.
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
          Who we share your data with{" "}
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          We will never share your personal information such as your Name,
          Passwords, Email etc to any third party.
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
          How we protect your data{" "}
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          We have implemented security and encryption mechanisms on our website
          and any part of the service using SSL and other security features.
          However, please keep in mind that no security system is impenetrable.
          It may be possible for third parties to intercept or access customer
          data in spite of these measures. We cannot guarantee the security of
          your information and cannot be held responsible for unauthorized
          access to Customer accounts. In case of a data breach, We will inform
          you within 48 hours.
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
          What rights you have over your data{" "}
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          If you have an account on this site, you can request to receive an
          exported file of the personal data we hold about you, including any
          data you have provided to us. You can also request that we erase any
          personal data we hold about you. This does not include any data we are
          obliged to keep for administrative, legal, or security purposes.
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
          What cookies do we store?{" "}
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          We use some third party cookies to identify you and optimize the
          service according to your interests. You may opt out of the service by
          disabling cookies in your browser or blocking the cookies for the
          domain engagespot.co
        </p>

        <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-semibold">
          Changes to Privacy Policy{" "}
        </h1>
        <p className="text-[#C0C0C8] text-sm lg:text-lg ">
          We deserve the right to amend or modify this Privacy Policy from time
          to time. If we make material changes to the way we collect, use or
          disclose Personally Identifiable Information, we will notify you by
          posting a clear and prominent announcement on our website or through a
          direct communication to your email.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;
