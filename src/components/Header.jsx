const LanguageButtons = () => {
    return (
        <div>
            <button>English</button>
            <button>عربو</button>
        </div>
    )
}


const Header = () => {
    return (
        <div className="bg-red-700 h-9 w-full flex items-center justify-between">
            <LanguageButtons/>
            <p>logo</p>
        </div>
    )
}

export default Header;