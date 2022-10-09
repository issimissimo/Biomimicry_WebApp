import logo1 from "../images/logo1.png"
import "../css/LanguageButton.css"

const LanguageButtons = ({ clickOnLanguage, isEng }) => {
    return (
        <div className="flex">

            <div
                className={`LanguageButton ${isEng ? "LanguageButton_Selected" : "LanguageButton_Idle"}`}
                onClick={() => clickOnLanguage(true)}
                style={{ backgroundColor: "#c7c7c7" }}>
                English
            </div>


            <div className={`LanguageButton ${!isEng ? "LanguageButton_Selected" : "LanguageButton_Idle"}`}
                onClick={() => clickOnLanguage(false)}
                style={{ backgroundColor: "#c7c7c7" }}>
                عربو
            </div>

        </div>
    )
}


const Header = ({ clickOnLanguage, isEng }) => {
    return (
        <div className="h-32 w-full flex items-center justify-between">
            <LanguageButtons
                clickOnLanguage={clickOnLanguage}
                isEng={isEng} />
            <img src={logo1} />
        </div>
    )
}

export default Header;