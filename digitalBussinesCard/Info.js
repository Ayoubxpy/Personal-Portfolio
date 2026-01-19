import React from "react";

export default function Header(){
    return (
        <>
           <header className="header">
                <img src="/images/84749143.png" alt="image" />
                <h1>AYOUB LOUDINI</h1>
                <p>Full Stack Developer</p>
                <span>ayoub loudini website</span>
                <div>
                    <button onClick={()=>{window.open('https://github.com/Ayoubxpy','_blank')}} className="email-btn">
                        <img src="/assest/github-142-svgrepo-com.svg" alt="" className="btn-icon" />
                        GitHub</button>
                    <button onClick={()=>{window.open('https://www.linkedin.com/in/ayoub-loudini-368120255/','_blank')}} className="linkedin-btn">
                        <img src="/assest/linkedin-svgrepo-com.svg" alt="" className="btn-icon" />
                        Linkedin</button>
                </div>
            </header> 
        </>
    )
}