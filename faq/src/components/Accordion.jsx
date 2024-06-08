import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [openItemId, setOpenItemId] = useState(1);

  const handleItemClick = (id) => {
    setOpenItemId(id === openItemId ? null : id);
  };

  return (
    <div>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItemId === item.id}
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
};
Accordion.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Accordion;
