import { createContext, useContext, useState } from "react";

// Create the context
const AccordionContext = createContext();

// Provider component to wrap the Accordion
export function AccordionProvider({ children, onChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle opening a specific panel
  const onOpen = (index) => {
    setActiveIndex(index); // Update the active index
    if (onChange) {
      onChange(index); // Call onChange when the active panel changes
    }
  };

  // Provide the activeIndex and onOpen to the context
  return (
    <AccordionContext.Provider value={{ activeIndex, onOpen }}>
      {children}
    </AccordionContext.Provider>
  );
}

// Custom hook to use AccordionContext
export const useAccordion = () => useContext(AccordionContext);
