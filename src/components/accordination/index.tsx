import React, { useState } from "react";
import { FAQS } from "../home/utils";

interface AccordionItem {
  title: string;
  description: string;
  questions: {
    title: string;
    descrition: string;
  }[];
}

const Accordination: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center flex-col">
      <h2 className="capitalize text-4xl font-bold text-center pb-12">FAQ's</h2>

      <div
        id="accordion-collapse"
        data-accordion="collapse  "
        className="w-[80%] m-auto flex flex-col gap-3"
      >
        {FAQS.map((item, i) => (
          <div key={item.title} className="!w-[100%] m-auto">
            <h2 className="" id={`accordion-collapse-heading-${i}`}>
              <button
                type="button"
                className={`flex font-bold bg-white items-center justify-between w-full p-5 text-gray-500 border border-b-0 border-gray-200 rounded-t-[10px]   dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
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

              <div className="text-gray-500 dark:text-gray-400 mt-8 flex flex-col gap-4">
                {item?.questions.map((question) => {
                  return (
                    <div className="flex flex-col gap-2">
                      <b>{question.title}</b>
                      <p className="ml-2 text-justify">{question.descrition}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordination;
