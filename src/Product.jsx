import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink} from 'reactstrap';

function Product(props) {
    return (
        <div className="w-64 bg-gray-200 rounded-lg shadow-md p-4">
          <Card>
          <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">{props.name}</CardSubtitle>
              </CardBody>
                  <img alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
              <CardBody>
              <CardText>
                  {props.description}
              </CardText>
          </CardBody>
          </Card>
        </div>


    );
} 

export default Product;