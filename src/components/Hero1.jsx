
function Hero1({ hero }) {

    return <div className="hero1">
        <img src={hero.img} />
        <div className="hero-overlay">
            <div className="top-box">
                <h2>{hero.h2}</h2>
            </div>
            <h1>{hero.h1}</h1>
            <p>{hero.p}</p>
            <div className="scroll-down">
                <i>⬇</i>
            </div>
        </div>
    </div>
}

export default Hero1