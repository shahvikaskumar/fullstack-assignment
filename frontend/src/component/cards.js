import { Card, Col } from "react-bootstrap";

const Cards = (props) => {

    return (
        <Col lg={6} md={12} className="p-5">
            
            {/* Card component from React-Bootstrap */}
            <Card className="bg-body-secondary rounded-4 mx-5">
                <Card.Body className="p-0">
                    
                    {/* Card title with styling */}
                    <Card.Title className="px-4 py-3 border-bottom border-2 border-secondary border-opacity-50 fs-3 fw-bold">{props.card.title}</Card.Title>               
                    
                    {/* Card text with description */}
                    <Card.Text className="px-4 py-3 fs-5">
                        {props.card.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Cards;