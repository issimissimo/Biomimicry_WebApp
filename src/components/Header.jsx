import logo1 from "../images/logo1.png"
import "../css/LanguageButton.css"
import { AttentionSeeker } from "react-awesome-reveal";
import language_ara from "../images/language_ara.svg"
import language_eng from "../images/language_eng.svg"


const LanguageButtons = ({ clickOnLanguage, isEng, activeElement }) => {

    const Class = (value) => {
        return value ? "LanguageButton_Selected" : "LanguageButton_Idle";
    }

    if (isEng) {
        return (
            <div className={`${activeElement == null ? "Container_enabled" : "Container_disabled"}`}>

                <AttentionSeeker effect="headShake">
                    <div
                        className={`LanguageButton ${Class(isEng)}`}
                        onClick={() => clickOnLanguage(true)}
                    >
                        <img className="h-8" src={language_eng} />
                    </div>
                </AttentionSeeker>


                <div
                    className={`LanguageButton ${Class(!isEng)}`}
                    onClick={() => clickOnLanguage(false)}
                >
                   <img className="h-8" src={language_ara} />
                </div>

            </div>
        )
    }
    else {
        return (
            <div className={`${activeElement == null ? "Container_enabled" : "Container_disabled"}`}>


                <div
                    className={`LanguageButton ${Class(isEng)}`}
                    onClick={() => clickOnLanguage(true)}
                >
                    <img className="h-8" src={language_eng} />
                </div>


                <AttentionSeeker effect="headShake">
                    <div
                        className={`LanguageButton ${Class(!isEng)}`}
                        onClick={() => clickOnLanguage(false)}
                    >
                        <img className="h-8" src={language_ara} />
                    </div>
                </AttentionSeeker>

            </div>
        )
    }

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