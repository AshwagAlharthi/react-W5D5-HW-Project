import Card from "../components/Card"
import Footer from "../components/Footer"
import IconNumber from "../components/IconNumber"
import Navbar from "../components/Navbar"

function About() {
    return (
        <div className="w-full bg-[#f5f5f5] relative z-10 max-sm:flex max-sm:flex-col">
            <div className='absolute top-0 right-0 -z-10 w-[40vw] h-[100vh] max-sm:w-[95vw] max-sm:h-[50vh] max-sm:order-1'>
                <img className="h-full w-full" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg" />
            </div>
            <div className='relative z-20'>
                <Navbar />
                <div className="flex flex-col justify-between items-center p-8 w-full pr-0 mt-14 max-sm:pb-0 max-sm:mt-100 max-sm:order-2">
                    <div className="flex justify-start items-center max-sm:flex-col">
                        <div className="flex flex-col justify-center items-start w-[50%] gap-5 mb-24 max-sm:order-2 max-sm:w-[100%] max-sm:gap-0 max-sm:mt-80">
                            <h1 className="font-fraunces text-7xl text-black font-bold py-5 w-[70%] max-sm:text-4xl max-sm:w-[90%]">About Me</h1>
                            <p className="font-montserrat text-[#878d91] w-[90%] max-sm:w-[90%]">Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.</p>
                            <div className="flex justify-start items-start gap-14 w-[50%] pt-10 max-sm:mt-14 max-sm:w-[90%] max-sm:justify-between">
                                <IconNumber icon="youtube" number="1.2M+" type="SUBSCRIBERS" />
                                <IconNumber icon="instagram" number="1.8M+" type="FOLLOWERS" />
                                <IconNumber icon="wifi" number="800K+" type="READERS" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center w-full pb-14">
                <div className="flex justify-between items-center w-full px-10 mb-8 max-sm:flex-col">
                    <h1 className="font-fraunces text-black font-bold text-[3rem] max-sm:text-2xl max-sm:mb-9">Follow along</h1>
                    <button className='font-montserrat font-semibold text-sm py-2 px-5 border-[#c19787] border text-[#c19787] hover:bg-[#c19787] hover:text-white mb-8 max-sm:mb-0'>
                        VIEW ALL
                    </button>
                </div>
                <div className="w-full flex justify-evenly flex-wrap items-center max-sm:flex-col max-sm:pl-6 max-sm:gap-4">
                    <img className="max-sm:w-[90vw]" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-5.jpg" />
                    <img className="max-sm:w-[90vw]" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-4.jpg" />
                    <img className="max-sm:w-[90vw]" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-6.jpg" />
                    <img className="max-sm:w-[90vw]" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-3.jpg" />
                    <img className="max-sm:w-[90vw]" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-2.jpg" />

                </div>
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
    )
}

export default About