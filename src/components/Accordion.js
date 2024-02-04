import { useRef, useState, useEffect } from "react";
import { CgCloseO } from "react-icons/cg";
import styles from "./Accordion.module.scss";

const Accordion = function (props) {
   const { FAQList, switchVisibility } = props;
   const [accordBodyHeight, setAccordBodyHeight] = useState([]);
   const accordionBodiesRef = useRef([]);

   useEffect(() => {
      setAccordBodyHeight(accordionBodiesRef.current);
   }, []);

   return FAQList.map((faq, i) => (
      <div className={styles.accordion} key={i}>
         <div className={styles.accordionTitle} onClick={() => switchVisibility(i)}>
            <h2>
               <span>{faq.title}</span>
               <CgCloseO
                  style={
                     faq.visible
                        ? { transform: "translateY(-50%) rotate(0deg)" }
                        : { transform: "translateY(-50%) rotate(-47deg)" }
                  }
               />
            </h2>
         </div>

         <div
            className={`${styles.accordionCollapsed} ${
               faq.visible ? styles.accordionCollapsed_show : ""
            }`}
            style={faq.visible ? { height: `${accordBodyHeight[i]}px` } : { height: `0px` }}
         >
            <div
               className={styles.accordionBody}
               ref={(el) => (accordionBodiesRef.current[i] = el?.scrollHeight)}
            >
               {faq.text}
            </div>
         </div>
      </div>
   ));
};

export default Accordion;
