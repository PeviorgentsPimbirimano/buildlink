import '../css/Home.css'
function Button({btn}) {

    return <a href="#" className="connect-btn-link">
        <button className="connect-btn" type="button">
            <span className="connect-btn-text">{btn.text}</span>
            <span className="connect-btn-icon">
                <svg width="22" height="22" fill="none" stroke="#000" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </button>
    </a>
}

export default Button