import { useState } from "react";
import "./FAQ.scss";
import Accordion from "./Accordion";

const initialFAQ = [
   {
      title: "Do You Accept All Major Credit Cards?",
      text: "We accept all major credit cards including Visa, MasterCard, American Express (AMEX), and Discover.",
      visible: false,
   },
   {
      title: "Do You Suppport Local Farmers?",
      text: "Supporting local farmers is one of the best ways we can protect our planet and ensure food security. Buying locally grown produce is an important step in reducing our environmental impacts, supporting our local economies and businesses, and ensuring our communities have access to fresh, nutritious food.",
      visible: false,
   },
   {
      title: "Do You Use Organic Ingredients?",
      text: "Used to label any product that contains 100 percent organic ingredients (excluding salt and water, which are considered natural)",
      visible: false,
   },
];

const FAQ = function () {
   const [FAQData, setFAQData] = useState(initialFAQ);

   const switchVisibilityHandler = (index) => {
      if (FAQData[index].visible) {
         setFAQData(
            FAQData.map((faq) => {
               return { ...faq, visible: false };
            }),
         );
      } else {
         setFAQData(
            FAQData.map((faq, i) => {
               return i === index ? { ...faq, visible: true } : { ...faq, visible: false };
            }),
         );
      }
   };

   return (
      <div>
         <h1 className="title">General Questions</h1>

         <Accordion FAQList={FAQData} switchVisibility={switchVisibilityHandler} />
      </div>
   );
};

export default FAQ;
