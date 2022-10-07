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
        <div className="bg-red-700 h-24 w-full flex items-center justify-between">
            <LanguageButtons
                clickOnLanguage={clickOnLanguage}
            />
            <p>logo</p>
        </div>
    )
}

export default Header;