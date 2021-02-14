import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import { Container, Row, Col } from 'react-bootstrap'

function Roster() {
    return (
        <Container fluid>
            <Row>
                <Col sm={2}>
                    <Sidebar className="body" />
                </Col>
                <Col sm={8}>
                    {/* <div className="content col-sm-10">
                    <DashboardNewsCard />
                </div>
            </div> */}
                    <div className="content">
                        <h1>Let's See What People Are Up Too?</h1>
                        <DashboardNewsCard />
                    </div>
                </Col>
            </Row>
        </Container >

    );
}

export default Roster;
