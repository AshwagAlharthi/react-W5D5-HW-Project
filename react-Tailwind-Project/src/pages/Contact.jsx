import ContactInfo from "../components/ContactInfo"
import Footer from "../components/Footer"
import IconNumber from "../components/IconNumber"
import Navbar from "../components/Navbar"

function Contact() {
    return (
        <div className="w-full bg-[#f5f5f5] relative z-10">
            <div className='absolute top-0 right-0 -z-10 w-[38.8vw] h-[120vh] bg-[#c99484] max-sm:w-[28vw] max-sm:h-[108vh]'>
            </div>
            <div className='relative z-20'>
                <Navbar />
                <div className="flex flex-col justify-between items-center p-8 pb-2 w-full mt-14 max-sm:pb-0 max-sm:mt-0">
                    <div className="flex justify-evenly items-center max-sm:flex-col">
                        <div className="flex flex-col justify-center items-start w-[50%] gap-5 mb-24 max-sm:order-2 max-sm:w-[100%] max-sm:gap-0">
                            <h1 className="font-fraunces text-7xl text-black font-bold py-5 w-[70%] max-sm:text-4xl max-sm:w-[90%]">Contact</h1>
                            <p className="font-montserrat text-[#878d91] w-[75%] max-sm:w-[90%]">Massa urna magnis dignissim id euismod porttitor vitae etiam viverra at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>
                            <div className="pt-10 flex flex-col justify-evenly items-start gap-10">
                                <ContactInfo type="address" title="ADDRESS" value="1234 N Spring St, Los Angeles, CA" />
                                <ContactInfo type="phone" title="PHONE" value="+01 - 123 456 7890" />
                                <ContactInfo type="email" title="EMAIL" value="mail@example.com" />
                            </div>
                            <div className="flex justify-start items-start gap-14 w-[50%] mt-20 max-sm:mt-14 max-sm:w-[90%] max-sm:justify-between">
                                <IconNumber icon="youtube" number="1.2M+" type="SUBSCRIBERS" />
                                <IconNumber icon="instagram" number="1.8M+" type="FOLLOWERS" />
                                <IconNumber icon="wifi" number="800K+" type="READERS" />
                            </div>
                        </div>
                        <div className=" flex flex-col justify-evenly items-start max-sm:order-1 max-sm:w-full translate-x-2 -translate-y-48 max-sm:translate-x-0 max-sm:translate-y-0 w-[50vw] h-[90vh] gap-5 bg-white border-2 px-8 py-3">
                            <h1 className="text-3xl text-black font-bold">Let's Talk</h1>
                            <div className="flex flex-col justify-between items-start">
                                <label className="text-black text-[0.95rem]">Name</label>
                                <input type="text" className="w-[40vw] h-12 bg-slate-50 border-2 pl-3 max-sm:w-[80vw]" placeholder="Name" />
                            </div>
                            <div className="flex flex-col justify-between items-start">
                                <label className="text-black text-[0.95rem]">Email</label>
                                <input type="text" className="w-[40vw] h-12 bg-slate-50 border-2 pl-3 max-sm:w-[80vw]" placeholder="Email" />
                            </div>
                            <div className="flex flex-col justify-between items-start">
                                <label className="text-black text-[0.95rem]">Subject</label>
                                <input type="text" className="w-[40vw] h-12 bg-slate-50 border-2 pl-3 max-sm:w-[80vw]" placeholder="Subject" />
                            </div>
                            <div className="flex flex-col justify-between items-start">
                                <label className="text-black text-[0.95rem]">Message</label>
                                <input type="text" className="w-[40vw] h-20 bg-slate-50 border-2 pl-3 max-sm:w-[80vw]" placeholder="Message" />
                            </div>
                            <button className='font-montserrat font-semibold text-sm py-2.5 px-7 border border-[#be7c68] bg-white text-[#be7c68] hover:bg-[#be7c68] hover:text-white hover:border-white mb-8'>
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-evenly items-center pb-14 max-sm:flex-col max-sm:gap-6 max-sm:text-center font-montserrat">
                    <img height="450" width="450" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg" />
                    <p className="text-black text-3xl font-semibold w-[40vw] px-12 max-sm:w-[80vw]">"Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.
                       
                    </p>
                </div>
                <div className="felx flex-col justify-center items-center text-center bg-[#be7c68] text-white w-full py-8 pb-20 max-sm:pb-10">
                    <h1 className="font-fraunces text-[3.5rem] font-bold px-7 py-5 mt-5 max-sm:text-3xl max-sm:py-1">Invite me to your restaurant.<br />
                        Get exposure of millions food lovers.</h1>
                    <div className="w-full flex justify-center items-center mb-5 max-sm:py-3 max-sm:mb-4 text-[#f6ecea]">
                        <p className="font-montserrat w-[50%] max-sm:w-[90%]">Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer amet eget blandit phasellus est natoque blandit facilisi eleifend.</p>
                    </div>
                    <button className='font-montserrat font-semibold text-sm py-2.5 px-7 border border-[#be7c68] bg-white text-[#be7c68] hover:bg-[#be7c68] hover:text-white hover:border-white mb-8'>
                        LET'S TAIK
                    </button>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact