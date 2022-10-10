import logo1 from "../images/logo1.png"
import "../css/LanguageButton.css"

const LanguageButtons = ({ clickOnLanguage, isEng, activeElement }) => {

    const Class = (value) => {
        return value ? "LanguageButton_Selected" : "LanguageButton_Idle";
    }

    return (
        <div className={`${activeElement == null ? "Container_enabled" : "Container_disabled"}`}>

            <div
                className={`LanguageButton ${Class(isEng)}`}
                onClick={() => clickOnLanguage(true)}
            >
                English
            </div>


            <div
                className={`LanguageButton ${Class(!isEng)}`}
                onClick={() => clickOnLanguage(false)}
            >
                عربو
            </div>

        </div>
    )
}


const Header = ({ clickOnLanguage, isEng, activeElement }) => {
    return (
        <div className="h-32 w-full flex items-center justify-between">
            <LanguageButtons
                activeElement={activeElement}
                clickOnLanguage={clickOnLanguage}
                isEng={isEng} />
            <img src={logo1} />
        </div>
    )
}

export default Header;