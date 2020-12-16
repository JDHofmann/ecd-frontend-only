import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { prevPage, nextPage, updateScore } from '../redux/actions';
// import { data } from '../data.js'


class Screening extends React.Component {

    state = {
        score: 0
    }

    prevPageClick = (e) => {
        e.preventDefault()
        this.props.prevPage()
    }

    nextPageClick = (e) => {
        e.preventDefault()
        this.props.nextPage()
        this.props.updateScore(this.state.score)
    }
    
    handleChange = (e) => {
        this.setState({
            score: parseInt(e.target.value)
        })
    }

    currentQuestion = () => {
        return this.props.questions[this.props.page]
    }

    renderQuestion = () => {
        return  <>
            <h3>{this.currentQuestion().category}</h3>
            { this.currentQuestion().type === "multiple-choice" ?
                <>
                <fieldset onChange={this.handleChange}>
                    <legend>{this.currentQuestion().question}</legend>
                    { this.currentQuestion().choices.map(c => <p>
                        <input type="radio" />
                        <label>{c}</label>
                        </p>) }
                </fieldset>
                </>
                
            :
            <>
                <fieldset onChange={this.handleChange}>
                    <legend>{this.currentQuestion().question}</legend>
                    <p>
                        <label>Yes</label>
                        <input name="y/n" type="radio" value="1"/>
                    </p>
                    <p>
                        <label>No</label>
                        <input name="y/n" type="radio" value="0" checked="true"/>
                    </p>
                </fieldset>
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
            borderRadius: "10px",
            color: "#ffffff"
        }

        
        return(
            <>
            {this.props.page > 5 ?

                <Redirect to="/resources"/>
                : null
            }
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
            </>
        )
    }
}

const msp = state => {
    return {
        page: state.page,
        questions: state.questions,
        score: state.score
    }
}

const mdp = dispatch => {
    return {
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage()),
        updateScore: (newScore) => dispatch(updateScore(newScore))
    }
}
export default connect(msp, mdp)(Screening)