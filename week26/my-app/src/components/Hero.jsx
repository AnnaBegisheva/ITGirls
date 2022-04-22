import './Hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <div className="hero-image">
                <img src={props.photo} />
            </div>
            <h1 className="hero-name">{props.name}</h1>
            <div className="hero-text">
                <p className="hero-universe"><span>Вселенная:</span> {props.universe}</p>
                <p className="hero-alterEgo"><span>Альтер Эго:</span> {props.alterEgo}</p>
                <p className="hero-powers"><span>Способности:</span> {props.powers}</p>
                <p className="hero-occupation"><span>Род деятельности:</span> {props.occupation}</p>
                <p className="hero-friends"><span>Друзья:</span> {props.friends}</p>
                <p className="hero-description"><span>Подробнее:</span> {props.description}</p>
            </div>
        </div>
    );
}

export default Hero;
