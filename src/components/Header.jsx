import logo1 from "../images/logo1.png"

const LanguageButtons = ({ clickOnLanguage }) => {
    return (
        <div>

            <button
                onClick={() => clickOnLanguage(true)}
            >
                English
            </button>


            <button
                onClick={() => clickOnLanguage(false)}
            >
                عربو
            </button>

        </div>
    )
}


const Header = ({ clickOnLanguage }) => {
    return (
        <div className="h-32 w-full flex items-center justify-between">
            <LanguageButtons
                clickOnLanguage={clickOnLanguage}
            />
            <img src={logo1} />
        </div>
    )
}

export default Header;