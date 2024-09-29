function Card(props) {
    return (
        <div className="card w-96 rounded-none">
            <figure>
                <img className="w-full"
                    src={props.image} />
            </figure>
            <div className="card-body px-0 mx-0">
                <h2 className="font-fraunces card-title font-bold text-black text-[1.8rem] mb-3 max-sm:text-[1.3rem]">{props.title}</h2>
                <p className="font-montserrat text-[#71818b] mb-2 w-[90%] max-sm:w-[90vw] max-sm:mb-4">{props.desc}</p>

                {
                    props.link &&
                    <p className="font-montserrat w-[9vw] max-sm:w-[26vw] flex justify-between text-[#c99484] font-bold text-[0.8rem] group hover:text-black">READ MORE <svg className="w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
                    </svg>
                    </p>
                }

            </div>
        </div>
    )
}

export default Card