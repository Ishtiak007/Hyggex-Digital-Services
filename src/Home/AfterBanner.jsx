import logo from '../assets/logo.png'
import { FaPlus } from "react-icons/fa6";

const AfterBanner = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <div className='w-[60px] h-[60px]  shadow-2xl rounded-full'>
                    <img className='w-full h-full flex justify-center items-center' src={logo} alt="" />
                </div>
                <div>
                    <p className='text-[#696671] inter-font text-[10px]'>Published by</p>
                    <h1 className='text-xl font-semibold'>Hygge<span className='text-[#06286E] font-bold'>X</span></h1>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div>
                    <div className="h-[40px] w-[42px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#06286E] to-[#164EC0]"><FaPlus className="text-white cursor-pointer text-center text-[20px] font-bold"></FaPlus></div>
                </div>
                <div className='mr-16'>
                    <h1 className='bg-gradient-to-r from-[#06286E] to-[#164EC0] text-[16px] font-bold bg-clip-text text-transparent montserrat-font'>Create Flashcard</h1>
                </div>
            </div>
        </div>
    );
};

export default AfterBanner;