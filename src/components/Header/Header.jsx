import LoginMenu from './LoginMenu/LoginMenu'

function Header({logoName}) {
    return (
        <header>
            <span>{logoName}</span>
            <LoginMenu/>
        </header>
    )
}

export default Header;