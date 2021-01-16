import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react"
import { Image } from "react-bootstrap";
import { NavBar } from "../NavBar/NavBar";
// import "../scss/_work.scss"
import "../scss/_greet.scss"
import "../scss/_variables.scss"
import LTphoto from '../../images/Standup.png'
import C43photo from '../../images/cap.png'
import Journalphoto from '../../images/Diary.png'
import { Link } from "react-router-dom";
import ScrollToTop from "./Greet";

export const ProjectPage = () => {
    return (
        <div className="work-page">
            <NavBar />
            <ScrollToTop />
            <div id="projects-all">
                <h3 id="project-header">Recent Work</h3>
                <Container id="Container">
                    <Row noGutters>
                        <Col xl={6}>
                            <Link to="/laugh-track" >
                                <Image src={LTphoto} width="100%" height="auto" />
                            </Link>
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Laugh Track</h4>
                            <p className="project-text date">November 2020</p>
                            <p className="project-text">Designed to help comedians improve, organize and succeed.</p>
                            <Link to="/laugh-track"><Button size="sm" id="btn">Case Study</Button></Link>
                        </Col>
                    </Row>
                    <Row id="large-screen" noGutters>
                        <Col xl={6}>
                            <h4 className="project-title">Cohort 43 Class Site</h4>
                            <p className="project-text date">December 2020</p>
                            <p className="project-text">Showcasing the talented individuals at the Nashville Software School in Cohort 43</p>
                            <Link to="/cohort-site"><Button size="sm" id="btn">Case Study</Button></Link>
                        </Col>
                        <Col xl={6}>
                            <Link to="/cohort-site" >
                                <Image src={C43photo} width="100%" height="auto" />
                            </Link>
                        </Col>
                    </Row>
                    <Row id="small-screen" noGutters>
                        <Col xl={6}>
                            <Link to="/cohort-site" >
                                <Image src={C43photo} width="100%" height="auto" />
                            </Link>
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Cohort 43 Class Site</h4>
                            <p className="project-text date">December 2020</p>
                            <p className="project-text">Showcasing the talented individuals at the Nashville Software School in Cohort 43</p>
                            <Link to="/cohort-site"><Button size="sm" id="btn">Case Study</Button></Link>
                        </Col>
                    </Row>
                    <Row id="margin" noGutters>
                        <Col xl={6}>
                            <Link to="/journal" >
                                <Image src={Journalphoto} width="100%" height="auto" />
                            </Link>
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Coding Journal</h4>
                            <p className="project-text date">August 2020</p>
                            <p className="project-text">A tool to help remember what every day at the Nashville Software School had in store.</p>
                            <Link to="/journal"><Button size="sm" id="btn">Case Study</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}