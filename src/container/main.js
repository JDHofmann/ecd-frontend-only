import React from 'react'
import { NavLink } from 'react-router-dom'

class Main extends React.Component {

    clickHandler = () => {
        this.props.beginClickHandler()
    }
    
    render(){
 
        return(
            <div className="main-div">
                <h2>Welcome</h2>
                <p 
                    className="intro"
                >Based on your clinical evaluation, please answer the following questions. A positive screen will generate a list of local referral resources.</p>
                <NavLink 
                    className="begin-btn"
                    to="screening_tool"
                >BEGIN</NavLink>

            </div>
        )
    }
}
export default Main