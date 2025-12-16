import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      {/* --- YOUR ORIGINAL CARD --- */}
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi everyone! I’m <span className="purple">Subhainduja B</span>{" "}
              from <span className="purple">Tirunelveli, India</span>.
              
          
            </p>

        

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive for Excellence !!"{" "}
            </p>
            <footer className="blockquote-footer">Subhainduja B</footer>
          </blockquote>
        </Card.Body>
      </Card>

      {/* --- NEW BUTTONS BELOW CARD --- */}
      <div className="about-buttons">
        <button onClick={() => setActiveTab("higher")}>Higher Studies</button>
        <button onClick={() => setActiveTab("school")}>School</button>
        <button onClick={() => setActiveTab("internship")}>Internships</button>
        <button onClick={() => setActiveTab("club")}>Club Activities</button>
      </div>

      {/* --- SLIDE BOX CONTENT --- */}
      <div className={`slide-box ${activeTab ? "show" : ""}`}>
        {activeTab === "higher" && (
          <div className="content">
            <h3>Higher Studies</h3>
            <p>•Upon pursuing my higher studies,I delved deeply into programming and computer science</p>


            <p>• B.Tech Information Technology,National Engineering College,Kovilpatti</p>
            <p>• CGPA: 8.77</p>
          </div>
        )}

        {activeTab === "school" && (
          <div className="content">
            <h3>School</h3>
            <p>• Magdalene Matric Higher Secondary School,Rahmath Nagar,Tirunelveli</p>
            <p>• 12th – 92.6%</p>
            
          </div>
        )}

        {activeTab === "internship" && (
          <div className="content">
            <h3>Internships</h3>
            <p>• I am currently seeking internship opportunities to gain hands-on experience in the tech industry</p>
            <p>•I aim to apply my skills and knowledge while learning from real-world projects and professionals</p>
            
          </div>
        )}

        {activeTab === "club" && (
          <div className="content">
            <h3>Club Activities</h3>

            <h4>Press-report@IT ASSOCIATION </h4>
            <h4>Editorial Board@COMPUTER SOCIETY OF INDIA </h4>
            <h4>Member@Board of Studies</h4>

            <p>• I  have organised  Tech events for the computer society of India</p>
            <p>• Through this,I have gained valuable experience in leadership and team management</p>
            
          </div>
        )}
      </div>
    </>
  );
}

export default AboutCard;
