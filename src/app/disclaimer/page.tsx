import Header from "@/components/shared/header";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <Header active={-1} />
      <div
        className=" flex items-center justify-center flex-col bg-[#0f0f0f] text-white text-justify"
        style={{ paddingTop: 0 }}
      >
        <div className="w-[90%] sm:w-[80%] md:w-[60%] m-auto mt-10 md:mt-16 mb-14">
          <h1 className="text-3xl text-center mb-6 font-bold">
            Disclaimer for Writroai
          </h1>
          <p>
            If you require any more information or have any questions about our
            sites disclaimer, please feel free to contact us by email at
            malikshakoor7656@gmail.com.
          </p>
          <h2 className="text-2xl mt-6 mb-2 font-bold">
            Disclaimers for Writroai
          </h2>
          <p>
            All the information on this website - https://writroai.com - is
            published in good faith and for general information purposes only.
            Writroai does not make any warranties about the completeness,
            reliability and accuracy of this information. Any action you take
            upon the information you find on this website (Writroai), is
            strictly at your own risk. Writroai will not be liable for any
            losses and/or damages in connection with the use of our website.
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone {"bad"}. Please be also aware that when you leave our
            website, other sites may have different privacy policies and terms
            which are beyond our control. Please be sure to check the Privacy
            Policies of these sites as well as their {"Terms of Service"} before
            engaging in any business or uploading any information.
          </p>
          <h2 className="text-2xl mt-6 mb-2 font-bold">Consent</h2>
          <p>
            By using our website, you hereby consent to our disclaimer and agree
            to its terms
          </p>
          <h2 className="text-2xl mt-6 mb-2 font-bold">Update</h2>
          <p>
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;