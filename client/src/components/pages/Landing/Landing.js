import React from 'react';
import './style.css';
import BrandDescription from '../../BrandDescription/BrandDescription';
import { Image, Container, Row, Col } from 'react-bootstrap'


function Landing() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="header display-1">Welcome To "Great Backyard"
                     <Image src="https://www.bcf.com.au/on/demandware.static/-/Library-Sites-bcf-shared-library/default/dw1c736d01/images/home-page/tiles/grid/Seaside_Fishing_Men_Sunset_Fishing-QUARTERTILE.jpg" fluid /> </h1>

                </Col>
            </Row>
            <Row>
                <Col>

                    <BrandDescription />
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;
