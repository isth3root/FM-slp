import avatar from "../assets/images/me.jpg"

const Main = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-neutralBlack text-neutralWhite font-inter-regular">
            <div className="flex flex-col items-center bg-neutralDarkGrey px-10 sm:px-20 py-5 rounded-3xl">
                <img className="rounded-full" src={avatar} alt="user" width={80} />
                <h2 className="text-2xl mt-5 font-inter-bold">Mohamad Amin Seyedi</h2>
                <p className="text-primaryGreen font-inter-semibold mb-4">Tehran, Iran</p>
                <p className="font-inter-regular mb-6">"Front-end developer."</p>
                <div className="flex flex-col items-center gap-3 font-inter-semibold">
                    <a className="w-full" href="https://github.com/isth3root"><button className="bg-neutralGrey w-full rounded-lg py-2 hover:bg-primaryGreen px-10 hover:text-neutralBlack">GitHub</button></a>
                    <a className="w-full" href="https://www.frontendmentor.io/profile/isth3root"><button className="bg-neutralGrey w-full rounded-lg py-2 hover:bg-primaryGreen px-10 hover:text-neutralBlack">Frontend Mentor</button></a>
                    <a className="w-full" href="https://www.linkedin.com/in/mohamad-a-seyedi/"><button className="bg-neutralGrey w-full rounded-lg py-2 hover:bg-primaryGreen px-10 hover:text-neutralBlack">Linkedin</button></a>
                    <a className="w-full" href="https://t.me/its_sheesh"><button className="bg-neutralGrey w-full rounded-lg py-2 hover:bg-primaryGreen px-10 hover:text-neutralBlack">Telegram</button></a>
                    <a className="w-full" href="https://instagram.com/pixelC0der"><button className="bg-neutralGrey w-full rounded-lg py-2 hover:bg-primaryGreen px-10 hover:text-neutralBlack">Instagram</button></a>
                </div>
            </div>
        </div>
    )
}

export default Main;