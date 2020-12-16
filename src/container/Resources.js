import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class Resources extends React.Component{

    render(){

        return(
            <>
            { this.props.score > 3 ? 

            <div className="main-div">
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
                        <ul>
                            <h4>Domestic Violence Resources:</h4>
                            <li>Domestic Violence Support Hotline (24 hours) <a href="tel:18006214673">1-800-621-4673</a></li>
                            <li>Culturally specific domestic violence hotlines in NYC <a href="https://www.nyscadv.org/find-help/program-directory.html">Visit Website</a></li>
                        </ul>
                    </li>
                    
                    {/* <li>
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
                    </li> */}
                </ul>
                <form className="follow-up resources">
                    <fieldset>
                    <legend>Did you refer the patient to an outside resource based on your NAT evaluation?</legend>
                    <p>
                        <input type="radio" id="1"></input>
                        <label htmlFor="1">Yes, using resources from this app</label>
                    </p>
                    <p>
                        <input type="radio" id="2"></input>
                        <label htmlFor="2">Yes, using outside resources</label>
                    </p>
                    <p>
                        <input type="radio" id="3"></input>
                        <label htmlFor="3">No</label>
                    </p>   
                    </fieldset>
                </form>
            </div>
            :  
            <div className="resources low">
                <h3>Thank you for completing the screening.</h3>
                <h4>This patient is low risk for non-accidental trauma and no further action is neccessary.</h4>
            </div>
            }
            <div className="main-div">
                <div className="resources">
                <h3>Further Education for Clinicians</h3>
                <ul>
                <h4>Child Abuse Prevention Program (CAPP):</h4>
                    <li>Phone: <a href="tel:2126601376">(212)-660-1376</a></li>
                    <li>Email: <a href="email:capp@nyfoundling.org">capp@nyfoundling.org</a></li>
                </ul>
                <ul>
                    <h4>New York State Parenting Education Partnership (NYSPEP):</h4>
                    <li>Phone: <a href="5188803952">518-880-3592</a></li>
                </ul>
                <ul>
                    <h4>Cultural Responsiveness: Child Abuse and Neglect:</h4>
                    <li>
                    <a href="https://www.childwelfare.gov/topics/systemwide/cultural/can/">Visit Website</a>
                    </li>
                </ul>
                <ul>
                    <h4>What Happens after I Call?:</h4>
                    <li><a href="https://www.dorightbykids.org/what-happens-after-i-call/#:~:text=After%20I%20Call%3F-,What%20Happens%20After%20I%20Call%3F,must%20follow%20up%20and%20investigate.&text=The%20child%20may%20be%20examined,reporter%20who%20initiated%20the%20call">Visit Website</a></li>
                </ul>
                </div>
                <NavLink className="begin-btn"  to="/" >Begin Again</NavLink>
            </div>
            </>
        )
    }
}

const msp = state => {
    return {
        score: state.score
    }
}

export default connect(msp)(Resources)