import { Link } from "react-router-dom";
import Card from"../components/Card";
//import Creations from "../components/Creations";
import data from "../data/data";


const Home = () => {
    return (
        <>
           
           <section className="data__section">
            {data.map((card) =>(
                <div className="data__section__card" key={`${card.id}`}>
                    <Link className ="data__section__link" to={`/Creation/${card.id}`}>
                        <Card key={`${card.id}`} cover={card.cover} title={card.title} description={card.description} prix={card.prix} />
                    </Link>
                </div>
            ))}
           </section>
        </>
    );
};

export default Home;