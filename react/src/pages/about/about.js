import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Container, Row, Col
} from 'reactstrap';


const AboutUs = (props) => {
    return (
        <div>
            <Row>
                <Col sm="3">
                    <Card>
                        <CardImg top width="100%"
                            src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/461/277/datas/profile.png"
                            alt="Ashley Mui" />
                        <CardBody>
                            <CardTitle tag="h1" style={{ textAlign: "center" }}>Ashley Mui</CardTitle>
                            <CardText>
                                <a href="https://github.com/muiashley" target="_blank"><img src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png" style={{ width: "150px", height: "100px" }}></img></a>
                                <a href="https://www.linkedin.com/in/ashleymui1/" target="_blank"><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" style={{ width: "150px", height: "80px" }}></img></a>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card>
                        <CardImg top width="100%"
                            src="https://avatars.githubusercontent.com/u/21337801?v=4"
                            alt="Alexander Lam" />
                        <CardBody>
                            <CardTitle tag="h1" style={{ textAlign: "center" }}>Alexander Lam</CardTitle>
                            <CardText>
                                <a href="https://github.com/acylam" target="_blank"><img src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png" style={{ width: "150px", height: "100px" }}></img></a>
                                <a href="https://www.linkedin.com/in/alexcylam/" target="_blank"><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" style={{ width: "150px", height: "80px" }}></img></a>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card>
                        <CardImg top width="100%"
                            src="https://avatars.githubusercontent.com/u/80792111?v=4"
                            alt="Andie Hodge" />
                        <CardBody>
                            <CardTitle tag="h1" style={{ textAlign: "center" }}>Andie Hodge</CardTitle>
                            <CardText>
                                <a href="https://github.com/wooliekyat" target="_blank"><img src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png" style={{ width: "150px", height: "100px" }}></img></a>
                                <a href="https://www.linkedin.com/in/andiehodge/" target="_blank"><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" style={{ width: "150px", height: "80px" }}></img></a>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card>
                        <CardImg top width="100%"
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQGko_CAvDQ2iw/profile-displayphoto-shrink_800_800/0/1520734237889?e=1623283200&v=beta&t=QOVfdelKOPOPxbH65V7W50w-hSKm8AqeDTp6dpZHUNE"
                            alt="Angela Lane" />
                        <CardBody>
                            <CardTitle tag="h1" style={{ textAlign: "center" }}>Angela Lane</CardTitle>
                            <CardText>
                                <a href="https://github.com/LogBandit" target="_blank"><img src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png" style={{ width: "150px", height: "100px" }}></img></a>
                                <a href="https://www.linkedin.com/in/angelaclane/" target="_blank"><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" style={{ width: "150px", height: "80px" }}></img></a>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export { AboutUs };