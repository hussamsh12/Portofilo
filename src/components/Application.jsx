import React, {useEffect} from "react";
import Name from "./Name";
import Intro from "./Intro";
import MeteorAnimation from "./MeteorAnimation";
import Title from "./Title";
import Stars from "./Stars"
import BackGround from "./BackGround";
import NavigationBar from "./NavBar";
import Card from "./Card";

import "../styling/space-objects.css";
import "../styling/first-page.css"
import "../styling/skills.css"
import ContactMe from "./ContactMe";

function Application(){

    useEffect(() => {
        setNavigation();
    }, []);


    function setNavigation(){
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    


    return(
        <div>
            <BackGround />
            <MeteorAnimation />
            <Stars />
            <NavigationBar />
            <div id="background-container">
                <div id="Home">
                    <div id="basic-info-and-animation">
                        <div id="basic-info-container">
                            <Intro />
                            <Name />
                            <Title />
                        </div>
                    </div>
                </div>
                
                <div id="Skills">
                    <div id="skills-cards-container">
                        <div id="card-container">
                            <Card 
                            skill="Animation"
                            percentage="85"    
                            />
                            <Card 
                            skill="Designs"
                            percentage="90"   
                            />
                            <Card 
                            skill="Web services"
                            percentage="95"   
                            />
                        </div>
                    </div>
                </div>
                <div id="Contact">
                    <div id="contact-me-container">
                        <ContactMe />
                    </div>
                </div>
                

            </div>
            
        </div>
    )

}


export default Application;