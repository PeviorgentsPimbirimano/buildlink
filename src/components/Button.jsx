
function Button({btn}) {

    return <a href="#" class="connect-btn-link">
        <button class="connect-btn" type="button">
            <span class="connect-btn-text">{btn.text}</span>
            <span class="connect-btn-icon">
                <svg width="22" height="22" fill="none" stroke="#000" stroke-width="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </button>
    </a>
}

export default Button