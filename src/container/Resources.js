import React from 'react'

const Resources = () => {

    const divStyling = {
        backgroundColor: "#fae0c8",
        // backgroundColor: "#66cc99",
        // height: "90vh",
        width: "90vw",
        margin: "auto 5vw",
        borderRadius: "25px",
        color: "#ffffff"
    }

    return(
        <div style={divStyling}>
            <h2>Resources</h2>
            <ul className="resources">
                <li>
                    <h3>Emergency Contacts</h3>
                    <ul>
                    <h4>New York State Child Abuse Hotline (State Central Register for Child Abuse and Maltreatment) at:</h4> 
                        <li>Mandated Reporters: <a href="tel:8006351522">(800) 635-1522</a></li>
                        <li>General Public: <a href="tel:18003423720">1(800) 342-3720</a></li>
                        <li>Deaf/Hard of Hearing: <a href="tel:18006385163">1(800) 638-5163</a></li>
                        <li>You can also call <a href="tel:311">311</a> in NYC.</li>
                    </ul>
                </li>
                <li>
                    <h3>Further education for clinicians</h3>
                    <ul>
                    <h4>Child Abuse Prevention Program (CAPP)</h4>
                        <li>Phone: <a href="tel:2126601376">(212)-660-1376</a></li>
                        <li>Email: <a href="email:capp@nyfoundling.org">capp@nyfoundling.org</a></li>
                    </ul>
                    <ul>
                        <h4>Contact NYSPEP (New York State Parenting Education Partnership)</h4>
                        <li>Phone: <a href="5188803952">518-880-3592</a></li>
                    </ul>
                </li>
            </ul>
            <form className="follow-up">
                <p>Did you refer the patient to an outside resource based on your NAT evaluation?</p>
                <input type="radio" id="1"></input>
                <label htmlFor="1">Yes, using resources from this app</label>
                <input type="radio" id="2"></input>
                <label htmlFor="2">Yes, using outside resources</label>
                <input type="radio" id="3"></input>
                <label htmlFor="3">No</label>
                <input type="radio" id="4"></input>
                <label htmlFor="4">Other</label>
            </form>
        </div>
    )
}
export default Resources