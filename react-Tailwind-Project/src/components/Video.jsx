function Video(props) {
    return (
        <div className="flex justify-between items-start w-full max-sm:flex-col max-sm:w-full font-montserrat">
            <img src={props.video}/>
            <div className="flex flex-col justify-start items-start w-[70%] gap-2 max-sm:w-[100%]">
                <h2 className="text-black text-[1.1rem] font-bold">{props.title}</h2>
                <p className="text-[#71818b]">{props.desc}</p>
            </div>
        </div>
    )
}

export default Video