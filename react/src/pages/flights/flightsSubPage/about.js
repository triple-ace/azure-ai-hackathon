import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function MeetTheTeam() {
    return (
        <div>
            <Card style={{ margin: "5px", paddingTop: "15px", paddingBottom: "0px" }}>
                <CardImg top style={{ width: "60%", margin: "auto" }}
                    src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/461/277/datas/profile.png"
                    alt="Ashley Mui" />
                <CardBody>
                    <CardTitle tag="h4" style={{ textAlign: "center" }}>Ashley Mui</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ textAlign: "center" }}>Analytical Consultant at SAS</CardSubtitle>

                    <CardText>
                        <div style={{ textAlign: "center" }}>
                            <a href="https://github.com/muiashley"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png"
                                    style={{ width: "80px", height: "60px" }}
                                    alt="Github">
                                </img>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ashleymui1/"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png"
                                    style={{ width: "80px", height: "45px" }}
                                    alt="LinkedIn">
                                </img>
                            </a>
                        </div>
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{ margin: "5px", paddingTop: "15px", paddingBottom: "0px" }}>
                <CardImg top style={{ width: "60%", margin: "auto" }}
                    src="https://avatars.githubusercontent.com/u/21337801?v=4"
                    alt="Alexander Lam" />
                <CardBody>
                    <CardTitle tag="h4" style={{ textAlign: "center" }}>Alexander Lam</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ textAlign: "center" }}>Senior Associate Analytical Consultant at SAS</CardSubtitle>

                    <CardText>
                        <div style={{ textAlign: "center" }}>
                            <a
                                href="https://github.com/acylam"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png"
                                    style={{ width: "80px", height: "60px" }}
                                    alt="Github">
                                </img>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/alexcylam/"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png"
                                    style={{ width: "80px", height: "45px" }}
                                    alt="LinkedIn">
                                </img>
                            </a>
                        </div>
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{ margin: "5px", paddingTop: "15px", paddingBottom: "0px" }}>
                <CardImg top style={{ width: "60%", margin: "auto" }}
                    src="https://avatars.githubusercontent.com/u/80792111?v=4"
                    alt="Andie Hodge" />
                <CardBody>
                    <CardTitle tag="h4" style={{ textAlign: "center" }}>Andie Hodge</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ textAlign: "center" }}>Senior Consultant at SAS</CardSubtitle>

                    <CardText>
                        <div style={{ textAlign: "center" }}>
                            <a
                                href="https://github.com/wooliekyat"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png"
                                    style={{ width: "80px", height: "60px" }}
                                    alt="Github">
                                </img>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/andiehodge/"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png"
                                    style={{ width: "80px", height: "45px" }}
                                    alt="LinkedIn">
                                </img>
                            </a>
                        </div>
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{ margin: "5px", paddingTop: "15px", paddingBottom: "0px" }}>
                <CardImg top style={{ width: "60%", margin: "auto" }}
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQGko_CAvDQ2iw/profile-displayphoto-shrink_800_800/0/1520734237889?e=1623283200&v=beta&t=QOVfdelKOPOPxbH65V7W50w-hSKm8AqeDTp6dpZHUNE"
                    alt="Angela Lane" />
                <CardBody>
                    <CardTitle tag="h4" style={{ textAlign: "center" }}>Angela Lane</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ textAlign: "center" }}>Senior Data Scientist at ADM</CardSubtitle>

                    <CardText>
                        <div style={{ textAlign: "center" }}>
                            <a
                                href="https://github.com/LogBandit"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src="https://miro.medium.com/max/719/0*9f5uMrKMjLbzEf7q.png"
                                    style={{ width: "80px", height: "60px" }}
                                    alt="Github">
                                </img>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/angelaclane/"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png"
                                    style={{ width: "80px", height: "45px" }}
                                    alt="LinkedIn">
                                </img>
                            </a>
                        </div>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export { MeetTheTeam };