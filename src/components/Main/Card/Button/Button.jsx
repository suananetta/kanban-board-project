
function Button({btnClass, btnName, btnIcon, disabled,onClick}) {
    return (
        <button className={btnClass} disabled={disabled} onClick={onClick}>
            {btnIcon}
            {btnName}
        </button>
    )
}

export default Button;