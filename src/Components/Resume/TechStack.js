import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const TechStack = () => {
    return (
        <>
        <Row className="Exp" >
            <h2 className="section-header text-w">Tech Stack</h2>
            </Row>
            <Row>
                <Col s={4} className="tech-stack-division">
                    <h4 className="stack-title text-w">UX</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-w">Information Architecture</li>
                        <li className="tech-descrip-list text-w">Persona Development</li>
                        <li className="tech-descrip-list text-w">Wireframing</li>
                        <li className="tech-descrip-list text-w">Prototyping</li>
                    </ul>
                </Col>
                <Col s={4} className="tech-stack-division">
                    <h4 className="stack-title text-w">Development</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-w">HTML</li>
                        <li className="tech-descrip-list text-w">CSS</li>
                        <li className="tech-descrip-list text-w">JavaScript</li>
                        <li className="tech-descrip-list text-w">SCSS</li>
                    </ul>
                </Col>
                <Col s={4} className="tech-stack-division">
                    <h4 className="stack-title text-w">Design</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-w">Web</li>
                        <li className="tech-descrip-list text-w">Responsive</li>
                        <li className="tech-descrip-list text-w">Interaction</li>
                        <li className="tech-descrip-list text-w">Application/Interface</li>
                    </ul>
                </Col>
                <Col s={4} className="tech-stack-division">
                    <h4 className="stack-title text-w">Creative</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-w">Photoshop</li>
                        <li className="tech-descrip-list text-w">Illustrator</li>
                        <li className="tech-descrip-list text-w">Lightroom</li>
                        <li className="tech-descrip-list text-w">Premiere Pro</li>
                        <li className="tech-descrip-list text-w">After Effects</li>
                    </ul>
                </Col>
            </Row>
            </>
        )
}