import React from 'react'
import { connect } from 'react-redux';
import { prevPage, nextPage } from '../redux/actions';
// import { data } from '../data.js'


class Screening extends React.Component {

    prevPageClick = (e) => {
        e.preventDefault()
        this.props.prevPage()
    }

    nextPageClick = (e) => {
        e.preventDefault()
        this.props.nextPage()
    }
    
    currentQuestion = () => {
        return this.props.questions[this.props.page]
    }

    renderQuestion = () => {
        return  <>
            <h2>{this.currentQuestion().category}</h2>
            { this.currentQuestion().type === "multiple-choice" ?
                <>
                <p>{this.currentQuestion().question}</p>
    { this.currentQuestion().choices.map(c => <><input type="radio"></input><label>{c}</label></>) }
                </>
                
            :
            <>
                <label>{this.currentQuestion().question}</label>
                <select className="dropdown">
                    <option>Yes</option>
                    <option>No</option>
                </select>
                </>
             }
        </>
    }
    render(){
        const divStyling = {
            backgroundColor: "#fff0de",
            height: "90vh",
            width: "90vw",
            margin: "2.5vh 5vw",
            borderRadius: "25px",
            color: "#ffffff"
        }

        return(
            <div style={divStyling}>
                <form
                    className="form-container"
                >
                    {this.renderQuestion()}
                    <button
                        onClick={this.prevPageClick} 
                        className="pag-btn prev"
                    >Prev</button>
                    <button 
                        onClick={this.nextPageClick}
                        className="pag-btn next"
                    >Next</button>

                </form>
            </div>
        )
    }
}

const msp = state => {
    return {
        page: state.page,
        questions: state.questions
    }
}

const mdp = dispatch => {
    return {
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage())
    }
}
export default connect(msp, mdp)(Screening)