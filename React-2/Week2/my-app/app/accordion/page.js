"use client";

import Accordion from "@/app/accordion/Accordion";

export default function Page() {
  const handleAccordionChange = (activeIndex) => {
    console.log("Active section changed to:", activeIndex);
  };

  return (
    <div>
      Accordion page
      <Accordion onChange={handleAccordionChange} />
    </div>
  );
}
