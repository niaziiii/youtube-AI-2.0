import React, { useState } from "react";
import { FAQS } from "../home/utils";

interface AccordionItem {
  title: string;
  description: string;
}

const AccordinationFAQ = (props: { faqs: any; number: number }) => {
  const { faqs, number } = props;
  const { title, description } = faqs;
  const questions: AccordionItem[] = faqs.questions;

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className=" text-white flex items-center justify-center flex-col mb-10">
      <h2 className="capitalize text-4xl font-bold text-center pb-2">FAQs</h2>
      <div className="w-[80%] m-auto text-center mt-4">
        <h3 className="capitalize  text-2xl font-bold pb-2 mt-4">{title}</h3>
        <p className=" mb-8">{description}</p>
      </div>
      <div
        id="accordion-collapse"
        data-accordion="collapse  "
        className="w-[80%] m-auto flex flex-col gap-3"
      >
        {questions?.map((item, i) => (
          <div key={i} className="!w-[100%] m-auto">
            <h2 className="" id={`accordion-collapse-heading-${i}`}>
              <button
                type="button"
                className={`flex text-justify font-bold bg-white items-center justify-between w-full p-5 text-gray-500 border border-b-0 border-gray-200 rounded-t-[10px]   dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                  openAccordion === i ? "active" : ""
                }`}
                onClick={() => toggleAccordion(i)}
                aria-expanded={openAccordion === i ? "true" : "false"}
                aria-controls={`accordion-collapse-body-${i}`}
              >
                <span>{item.title}</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${i}`}
              className={`p-5 bg-white border border-b-0 border-gray-200 dark:border-gray-700 ${
                openAccordion === i ? "block" : "hidden"
              }`}
              aria-labelledby={`accordion-collapse-heading-${i}`}
            >
              <div className="text-gray-500 dark:text-gray-400 text-justify">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordinationFAQ;
