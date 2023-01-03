

const Card = ({cover,title, description, prix}) => {
    return (
        <article className="card">
            <img className="card__img" src={cover} alt="la malle dé fil" />
            <div className="card__set">
            <h2 className="card__set__title">{title}</h2>
            <p className="card__set__description">{description}</p>
            <p className="card__set__prix">{prix}</p>
            </div>
        </article>
    );
};

export default Card;