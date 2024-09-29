import Navbar from "./components/Navbar"
import IconNumber from "./components/IconNumber";
import Card from "./components/Card"
import Video from "./components/Video"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="w-full bg-[#f5f5f5] relative z-10">
      <div className='absolute top-0 right-0 -z-10 w-[38.8vw] h-[180vh] bg-[#c99484] max-sm:w-[28vw] max-sm:h-[58vh]'>
      </div>
      <div className='relative z-20'>
        <Navbar />
        <div className="flex flex-col justify-between items-center p-8 w-full mt-14 max-sm:pb-0 max-sm:mt-0">
          <div className="flex justify-evenly items-center max-sm:flex-col">
            <div className="flex flex-col justify-center items-start w-[50%] gap-5 mb-24 max-sm:order-2 max-sm:w-[100%] max-sm:gap-0">
              <h3 className="font-montserrat font-semibold text-[#be7c68] text-[0.8rem] pt-20"><sup>___________</sup>  WELCOME</h3>
              <h1 className="font-fraunces text-7xl text-black font-bold py-5 w-[70%] max-sm:text-4xl max-sm:w-[90%]">I’m Dianna Adams</h1>
              <h2 className="font-fraunces text-3xl text-black font-bold py-5 max-sm:text-2xl max-sm:pt-0">Food Critic / Influencer / Blogger</h2>
              <p className="font-montserrat text-[#878d91] w-[65%] max-sm:w-[90%]">Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.</p>
              <button className="font-montserrat font-semibold border border-[#be7c68] text-[#be7c68] text-[0.9rem] px-8 py-2 cursor-pointer hover:bg-[#be7c68] hover:text-white my-10 mb-16 max-sm:mb-0 max-sm:my-12">
                JOIN INSIDER
              </button>
              <div className="flex justify-start items-start gap-14 w-[50%] mt-20 max-sm:mt-14 max-sm:w-[90%] max-sm:justify-between">
                <IconNumber icon="youtube" number="1.2M+" type="SUBSCRIBERS" />
                <IconNumber icon="instagram" number="1.8M+" type="FOLLOWERS" />
                <IconNumber icon="wifi" number="800K+" type="READERS" />
              </div>
            </div>
            <div className=" flex justify-start items-start max-sm:order-1 max-sm:w-full translate-x-2 -translate-y-48 max-sm:translate-x-0 max-sm:translate-y-0">
              <img
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center mb-14 pb-20 max-sm:pb-10 max-sm:mb-0">
          <h1 className="font-montserrat text-black text-[0.9rem] font-semibold">AS FEATURED IN</h1>
          <div className="flex justify-evenly items-center w-full flex-wrap">
            <div className="max-sm:w-[45vw] max-sm:flex max-sm:justify-center "><img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg" /></div>
            <div className="max-sm:w-[45vw] max-sm:flex max-sm:justify-center "><img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg" /></div>
            <div className="max-sm:w-[45vw] max-sm:flex max-sm:justify-center "><img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg" /></div>
            <div className="max-sm:w-[45vw] max-sm:flex max-sm:justify-center "><img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg" /></div>
            <div className="max-sm:w-[90vw] max-sm:flex max-sm:justify-center "><img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg" /></div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-full pb-14">
          <div className="flex justify-between items-center w-full px-10 mb-8 max-sm:flex-col">
            <h1 className="font-fraunces text-black font-bold text-[3.5rem] max-sm:text-2xl max-sm:mb-9">Latest Reviews</h1>
            <button className='font-montserrat font-semibold text-sm py-2 px-5 border-[#c19787] border text-[#c19787] hover:bg-[#c19787] hover:text-white mb-8 max-sm:mb-0'>
              VIEW ALL
            </button>
          </div>
          <div className="w-full flex justify-evenly items-center max-sm:flex-col max-sm:items-start max-sm:pl-6 max-sm:gap-4">
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
              title="Grilled Flank Steak with Chimichurri"
              desc="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."
              link="true"
            />
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
              title="Mushroom Penne with Walnut Pesto"
              desc="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus."
              link="true"
            />
            <Card
              image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
              title="Garlic Butter White Wine Shrimp Linguine"
              desc="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."
              link="true"
            />
          </div>
        </div>
        <div className="bg-[#f3efee]">
          <div className="flex flex-col justify-between items-center w-full bg-[#f3efee]">
            <div className="flex flex-col justify-between items-center w-full py-16 mb-8 max-sm:flex-col max-sm:mb-2">
              <h1 className="font-fraunces text-black font-bold text-[3.5rem] max-sm:text-2xl max-sm:mb-6">Best in Class Restaurant</h1>
              <p className="font-montserrat w-[60%] text-center text-[#71818b] max-sm:w-[90%]">Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</p>
            </div>
            <div className="w-full flex justify-evenly flex-wrap gap-2 items-center max-sm:flex-col max-sm:items-start max-sm:pl-6">
              <Card
                image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg"
                title="Bern's Steak House"
                desc="Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet."
              />
              <Card
                image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg"
                title="Eewak Korean Restaurant"
                desc="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui."
              />
              <Card
                image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg"
                title="The Ramban Vegan House"
                desc="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."
              />
              <Card
                image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg"
                title="Maniest Bake & Cake"
                desc="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."
              />
              <Card
                image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg"
                title="Crush Los Angeles"
                desc="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."
              />
              <Card
                image="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg"
                title="The Mike Winery"
                desc="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."
              />
            </div>
          </div>
          <div className="flex justify-center items-center py-16 my-10 bg-[#f3efee] max-sm:flex-col max-sm:mb-0 max-sm:py-8">
            <div className="card w-[95%] max-sm:w-full card-side bg-white border-8 rounded-none flex justify-start items-center max-sm:flex-col">
              <figure className="translate-y-[-3rem] translate-x-10 w-[45%] h-auto max-sm:w-[90%] max-sm:translate-y-[-1.5rem] max-sm:translate-x-0">
                <img
                  src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
                />
              </figure>
              <div className="card-body mt-10 ml-12 gap-8 max-sm:ml-0 max-sm:mt-0 max-sm:pt-0 max-sm:gap-6 max-sm:pl-6">
                <h2 className="font-fraunces card-title text-black text-5xl font-bold max-sm:text-3xl">Join Mailing List</h2>
                <p className="font-montserrat text-[#71818b] w-[80%] max-sm:w-[100%] max-sm:text-[0.8rem]">Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.</p>
                <div className="card-actions mt-10 max-sm:flex-col max-sm:gap-5 max-sm:mt-8">
                  <input className="font-montserrat border bg-[#fafafa] w-[25vw] pl-3 py-4 placeholder-[#828382] focus:outline-dotted max-sm:w-[98%] max-sm:py-2.5 max-sm:placeholder:text-[1.02rem]" placeholder="Email address"></input>
                  <button className='font-montserrat text-[0.8rem] font-semibold py-3 px-10 border-[#c19787] border text-[#c19787] hover:bg-[#c19787] hover:text-white mb-8 max-sm:mb-0 max-sm:w-[100%] max-sm:text-[1rem] max-sm:py-2.5'>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly items-center w-full px-10 py-5 gap-10 bg-[#f3efee] pb-16 max-sm:pb-8">
            <h1 className="font-fraunces flex justify-start items-start w-full text-black font-bold text-[4rem] max-sm:text-3xl max-sm:mb-9 max-sm:justify-center max-sm:items-center">Latest Videos</h1>
            <div className="flex justify-between items-start max-sm:flex-col max-sm:gap-16 pb-10 max-sm:pb-0">
              <div className="flex flex-col justify-between items-start w-[48%] gap-5 max-sm:w-[90vw] ">
                <div className="relative flex justify-center items-center max-sm:w-[90vw]">
                  <img className="max-sm:w-full max-sm:h-52" src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg" />
                  <div className="absolute flex justify-center items-center h-full w-full">
                    <div className="btn btn-circle border-none max-sm:h-14 max-sm:w-14 bg-white hover:bg-[#be7c68] group">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#be7c68" className="group-hover:fill-white w-[90%] h-[100%]"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                    </div>
                  </div>
                </div>

                <h1 className="font-fraunces text-black text-[1.8rem] font-bold mt-4 max-sm:text-lg">Dianna Adams visits the Sooto Restaurant | Uncovered Miami</h1>
                <p className="font-montserrat text-[#71818b] w-[85%] max-sm:w-[100%] max-sm:text-[1rem]">A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</p>
              </div>
              <div className="flex flex-col justify-between items-start w-[48%] gap-10 max-sm:w-full">
                <Video
                  video="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg"
                  title="Family Dinner - Latea pulvinar scelerisque diam tempus facilisi"
                  desc="Enim imperdiet fames nisl, purus et diam aliquet"
                />
                <Video
                  video="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg"
                  title="Lobortis turpis turpis vehicula laoreet egestas enim ornare"
                  desc="Enim imperdiet fames nisl, purus et diam aliquet"
                />
                <Video
                  video="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg"
                  title="Tempus quis ac viverra condimentum sit nulla viverra"
                  desc="Enim imperdiet fames nisl, purus et diam aliquet"
                />
                <Video
                  video="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg"
                  title="Quis mauris egestas enim urna dictum"
                  desc="Enim imperdiet fames nisl, purus et diam aliquet"
                />
                <button className='font-montserrat py-2.5 text-sm px-5 border-[#be7c68] border font-semibold text-[#be7c68] hover:bg-[#be7c68] hover:text-white mb-8 w-full '>
                  VIEW ALL VIDEOS
                </button>
              </div>
            </div>
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
    </div>
  )
}

export default App