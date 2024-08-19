import { Container, Row } from "react-bootstrap";
import Cards from "../component/cards";
import Footer from "../component/footer";
import Header from "../component/header";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Utility/config";
import axios from 'axios';

const Home = () => {

    // States for cards, search string, and filtered cards
    const [allcard, setallcard] = useState([]);
    const [searchstr, setsearchstr] = useState('');
    const [filtercards, setfiltercards] = useState([]);

    // Fetch cards from API
    const Getallcards = async() => {
        try{            
            const response = await axios.get(`${BASE_URL}cards`);
            setallcard(response.data.cards);
            setfiltercards(response.data.cards);
        }
        catch(error){
            console.log(error.response?.data?.error);
        }
    };

    // Call Getallcards on component mount
    useEffect(() => {
        Getallcards();
    },[]);

    // Filter cards based on search string
    const handlesearch = () => {
        const filtered = allcard.filter(card => 
            card.title.toLowerCase().includes(searchstr.toLowerCase()) || 
            card.description.toLowerCase().includes(searchstr.toLowerCase())
        );
        
        setfiltercards(filtered);
        
    };

    return (
        <>

        {/* Header with search functionality */}
        <Header searchstr={searchstr} setsearchstr={setsearchstr} handlesearch={handlesearch} />
        
        {/* Display filtered cards or a message if none found */}
        <Container className="px-0 my-5 py-5">
            <Row className="m-0">
            {filtercards.length > 0 ? (
                filtercards.map((card, index) => (
                    <Cards key={index} card={card} />
                ))
            ) : (
                <div className="text-center">
                <h2>No have any cards.</h2>
                </div>
            )}
            </Row>            
        </Container>

        {/* Footer component */}
        <Footer />
        </>
    )
};

export default Home;