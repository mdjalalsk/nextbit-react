import { IoCaretDownSharp } from "react-icons/io5";
import { IoCaretUpSharp } from "react-icons/io5";
import PropTypes from 'prop-types';


const AccordionItem = ({item,isOpen,onClick}) => {
    const{id,question,answer}=item;

    return (
        <div className='my-5 border-2 p-4'>
         <div className='flex justify-between items-center'>
            <p className='text-3xl font-medium'>{question}</p>
            <button className='text-3xl' onClick={() => onClick(id)}>
         {isOpen ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
       </button>

         </div>
        {isOpen && <p className='text-lg'>{answer}</p>}
        </div>
    );
};
AccordionItem.propTypes ={
    item:PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
}
export default AccordionItem;