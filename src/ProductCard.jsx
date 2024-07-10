import React from "react";
import Product from "./Product";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink} from 'reactstrap';

function ProductCard() {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <Card
                style={{
                    width: '18rem'
                }}
                >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {Product.name}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {Product.name}
                    </CardSubtitle>
                    <CardText>
                    {Product.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>    
        );
}

export default ProductCard;
