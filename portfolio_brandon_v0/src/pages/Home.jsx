import { useState } from 'react';
import PortfolioList from '../components/PortfolioList';

const Home = () => {
    const [showList, setShowList] = useState(false);

    const toggleList = () => {
        setShowList(prevState => !prevState);
    };

    return (
        <div className="home">
            <h1>Bienvenue sur mon portfolio</h1>
            <button onClick={toggleList} className="toggle-button">
                {showList ? 'Masquer la liste' : 'Afficher la liste'}
            </button>

            {showList && <PortfolioList />}
        </div>
    );
};

export default Home;
