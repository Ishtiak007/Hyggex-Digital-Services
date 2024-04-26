import { FaRegLightbulb } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { RiFullscreenFill } from "react-icons/ri";

const Banner = () => {
    return (
        <div className="mt-10">
            <h1 className="ml-3 bg-gradient-to-r from-[#06286E] to-[#164EC0] text-[26px] font-bold bg-clip-text text-transparent montserrat-font">Relations and Functions ( Mathematics )</h1>
            <div className="hero">
                <div className="text-center">
                    <div role="tablist" className="tabs my-7">
                        <a role="tab" className="tab tab-active text-[#06286E] inter-font text-[14px] font-[500] border-b-2">Study</a>
                        <a role="tab" className="tab inter-font text-[14px] font-[500] text-[#696671]">Quiz</a>
                        <a role="tab" className="tab inter-font text-[14px] font-[500] text-[#696671]">Test</a>
                        <a role="tab" className="tab inter-font text-[14px] font-[500] text-[#696671]">Game</a>
                        <a role="tab" className="tab inter-font text-[14px] font-[500] text-[#696671]">Others</a>
                    </div>
                    <div className="w-[680px] h-[380px] flex flex-col custom-gradient rounded-[42.51px]">
                        <div className="flex justify-between">
                            <div className="ml-8 mt-8"><FaRegLightbulb className="text-white text-xl font-bold cursor-pointer"></FaRegLightbulb></div>
                            <div className="mr-8 mt-8"><HiSpeakerWave className="text-white text-xl font-bold cursor-pointer"></HiSpeakerWave></div>
                        </div>
                        <div className="flex justify-center items-center h-full w-full">
                            <h1 className="text-2xl font-bold text-[#FFFFFF] mb-7">9 + 6 + 7x - 2x - 3</h1>
                        </div>
                    </div>


                    <div className="flex justify-between items-center my-5 p-4">
                        <div className="ml-5">
                            <h1><FaArrowRotateRight className="text-[#06286E] text-[20px] font-bold cursor-pointer"></FaArrowRotateRight></h1>
                        </div>
                        <div>
                            <div className="flex justify-center gap-5 items-center">
                                <div className="h-[40px] w-[42px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#06286E] to-[#164EC0]"><MdArrowBackIos className="text-white cursor-pointer  text-center text-[20px] font-bold"></MdArrowBackIos></div>
                                <div><h1 className="text-[#202B37] text-[18px] font-medium inter-font">01/10</h1></div>
                                <div className="h-[40px] w-[42px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#06286E] to-[#164EC0]"><MdArrowForwardIos className="text-white cursor-pointer text-center text-[20px] font-bold"></MdArrowForwardIos></div>
                            </div>
                        </div>
                        <div className="ml-5">
                            <h1><RiFullscreenFill className="text-[#06286E] text-[20px] font-bold cursor-pointer"></RiFullscreenFill></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;