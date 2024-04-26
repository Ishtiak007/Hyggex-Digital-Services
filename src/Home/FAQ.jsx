

const FAQ = () => {
    return (
        <div className="mt-28">
            <h1 className="bg-gradient-to-r from-[#06286E] to-[#164EC0] text-[26px] font-bold bg-clip-text text-transparent inter-font">FAQ</h1>
            <div className="w-[70%] my-4">
                <div className="join join-vertical w-full space-y-4">
                    <div className="collapse collapse-arrow join-item border border-gradient">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[14px] font-[500] inter-font text-[#28262C]">
                            Can education flashcards be used for all age groups?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-gradient">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[14px] font-[500] inter-font text-[#28262C]">
                            How do education flashcards work?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-gradient">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-[14px] font-[500] inter-font text-[#28262C]">
                            Can education flashcards be used for test preparation?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;