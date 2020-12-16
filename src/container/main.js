import React from 'react'
import { NavLink } from 'react-router-dom'

class Main extends React.Component {

    clickHandler = () => {
        this.props.beginClickHandler()
    }
    
    render(){
        const divStyling = {
            backgroundColor: "#fff0de",
            // backgroundColor: "#66cc99",
            height: "90vh",
            width: "90vw",
            margin: "2.5vh 5vw",
            borderRadius: "25px",
            color: "#ffffff"
        }
        const pStyling = {
            margin: "2.5vh 5vw",
            fontSize: "18px"
        }
        const btnStyling = {

        }
        return(
            <div style={divStyling}>
                <h2>Welcome</h2>
                <p 
                    style={pStyling} 
                    // className="red"
                >Based on your clinical evaluation, please answer the following questions. A positive screen will generate a list of local referral resources.</p>
                <NavLink 
                    className="begin-btn"
                    to="screening_tool"
                >Begin</NavLink>

            </div>
        )
    }
}
export default Main