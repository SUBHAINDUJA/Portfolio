import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import IndustryRelations from "../../Assets/Projects/Industry-Relations.png";
import PlacementCell from "../../Assets/Projects/Placement cell.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IndustryRelations}
              isBlog={false}
              title="Industry-Relations"
              description="The Center of Industry Relationship Portal is a full-stack MERN application designed to streamline and manage all industry-related activities within an educational institution. The platform facilitates seamless communication and workflow management between students, faculty, HODs, and the Industry Relations (IR) department.•	To transform traditional paper-based industrial relations workflows into a fully digital system, eliminating manual paperwork and reducing processing time."
              ghLink="https://github.com/SUBHAINDUJA/IR_Application"
             // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlacementCell}
              isBlog={false}
              title="Placement cell Management system"
              description="Placement Cell Management 
System is designed to enhance the placement process by integrating advanced features such 
as QR-based attendance tracking and  resume analysis. 
The system introduces a real-time QR attendance module where students can mark their 
attendance by scanning dynamically generated QR codes during sessions. Additionally, they 
can upload QR-based PDFs, allowing tutors to verify and track attendance with precise 
timestamps."
              ghLink="https://github.com/SUBHAINDUJA/Placement-Cell-Management-System-"
              //demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
