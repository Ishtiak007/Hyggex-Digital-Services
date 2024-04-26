import { IoHomeOutline } from "react-icons/io5";

const AfterNavbar = () => {
    return (
        <div className="ml-3">
            <div className="text-sm breadcrumbs">
                <ul className="flex items-center">
                    <IoHomeOutline className="text-[16px] mr-2"></IoHomeOutline>
                    <li>
                        <a className="text-[#696671] text-[14px] inter-font font-[500]">

                            Flashcard
                        </a>
                    </li>
                    <li>
                        <a className="text-[#696671] text-[14px] inter-font font-[500]">
                            Mathematics
                        </a>
                    </li>
                    <li>
                        <a className="inline-flex gap-2 items-center text-[#06286E] text-[14px] inter-font font-[500]">
                            Relation and Function
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AfterNavbar;