"use client";

import clsx from "clsx";
import { useAccordion, AccordionProvider } from "./AccordionContext";

function Panel({ title, children, activeIndexValue }) {
  const { activeIndex, onOpen } = useAccordion(); // Get state and function from context

  const isOpen = activeIndex === activeIndexValue; // Check if the panel is open
  const toggle = () => onOpen(activeIndexValue); // Function to open the panel

  return (
    <div
      className={
        "p-2 border-t border-t-black flex flex-col justify-center items-center"
      }
    >
      <h2 className={"text-xl font-bold"}>{title}</h2>
      <div
        className={clsx({
          hidden: !isOpen,
        })}
      >
        {children}
      </div>
      {!isOpen && (
        <button
          className={"border border-blue-500 rounded text-blue-500"}
          onClick={toggle}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Accordion({ onChange }) {
  return (
    <AccordionProvider onChange={onChange}>
      <div className={"flex flex-col border border-black rounded"}>
        <Panel title={"Section 1"} activeIndexValue={1}>
          Content 1
        </Panel>
        <Panel title={"Section 2"} activeIndexValue={2}>
          Content 2
        </Panel>
        <Panel title={"Section 3"} activeIndexValue={3}>
          Content 3
        </Panel>
      </div>
    </AccordionProvider>
  );
}
