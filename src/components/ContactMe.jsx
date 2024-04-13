import React, { useState} from "react";

import rocket from "../images/rocket.png";
import "../styling/contact-form.css";

function ContactMe()
{


    


    var [conditionsMet, changeConditions] = useState({
        "fName": false,
        "lName": false,
        "email": false
    });

    var[inputValues, changeInputValues] = useState(
        {
            "fName": "",
            "lName": "",
            "email": "",
        }
    )

    function resetForms(){
        changeConditions(
            {
            "fName": false,
            "lName": false,
            "email": false
        });

        changeInputValues(
            {
                "fName": "",
                "lName": "",
                "email": "",
            }
        );
    }

    function valid(){

        if(conditionsMet['fName'] === false || conditionsMet['lName'] === false || conditionsMet['email'] === false){
            
            return false;
        }

        return true;
    }

    function changeValidState(event){
        const name = event.target.name;
        const val = event.target.value;
        changeInputValues(prevValue =>{
            const newValue = {...prevValue, [name]: val};
            return newValue;
        })
        changeConditions(prevValue =>{
            const newValue = {...prevValue, [name]: val !== ""};
            return newValue;
        });
    }


    function buttonScript(){
        const x = valid();
        if(!x){
            return;
        }
        let submitButtonDic = document.getElementById('submit-button');
        let rocket = document.getElementById('rocket');
        for(let i = 0 ; i < 50; ++i){
            let spark = document.createElement('i');
            spark.classList.add('spark');
            //random position for the sparks
            const randomX = (Math.random() - 0.7) * window.innerWidth;
            const randomY = (Math.random() - 0.7) * window.innerHeight;
            spark.style.setProperty('--x', randomX + "px");
            spark.style.setProperty('--y', randomY + "px");

            //random size for the spark
            const randomSize = Math.random() * 8 + 2;
            spark.style.width = randomSize + "px";
            spark.style.height = randomSize + "px";

            resetForms();

            //random animation time
            const duration = Math.random() * 2 - 0.5;
            spark.style.animation = 'animateee ' + duration + 's ease-out forwards';
            
            submitButtonDic.appendChild(spark); 
            setTimeout(function (){
                spark.remove();
            }, 2000);
        }
        
        
        if(rocket.classList.contains('rockett')){
            return;
        }
        rocket.classList.add("rockett");
        setTimeout(function (){
            rocket.classList.remove('rockett');
            
        }, 4000);
        
    }


    return(
        <div id="contact-me-form-container">
            <div id="input-boxes-container">
                <h2 data-text="Leave Your Details Here">Leave Your Details Here</h2>
                <div id="input-box">
                    <input
                    name="fName"
                    type="text"
                    required="required"
                    autoComplete="false"
                    onChange={changeValidState}
                    value={inputValues["fName"]}
                    >
                    </input>
                    <span>First Name</span>
                </div>
                <div id="input-box">
                    <input
                    name="lName"
                    type="text"
                    required="required"
                    autoComplete="false"
                    onChange={changeValidState}
                    value={inputValues["lName"]}
                    >
                    </input>
                    <span>Last Name</span>
                </div>
                <div id="input-box">
                    <input
                    name="email"
                    type="text"
                    required="required"
                    autoComplete="false"
                    onChange={changeValidState}
                    value={inputValues["email"]}
                    >
                    </input>
                    <span>Email Address</span>
                </div>
            </div>

            <div id="submit-container">
            <div id="rocket">
                <img src={rocket} alt="Rocket" />
            </div>   
            <div id="submit-button">
                    <button id="button" onClick={buttonScript}> Send</button>

                </div>
            </div>
        </div>
        
    )

}

export default ContactMe;