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
                        <input name="multi" type="radio" value="1"/>
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
                        <input name="y/n" type="radio" value="1"
                        />
                    </p>
                    <p>
                        <label>No</label>
                        <input name="y/n" type="radio" value="0"/>
                    </p>
                </fieldset>
            </>
             }
        </>
    }
    render(){
 
        return(
            <>
            {this.props.page > 24 ?

                <Redirect to="/resources"/>
                : null
            }
            <div className="main-div">
                <form
                    className="form-container"
                >
                    {this.renderQuestion()}
                    <div className="btn-div">
                    <button
                        onClick={this.prevPageClick} 
                        className="pag-btn prev"
                    >Prev</button>
                    <button 
                        onClick={this.nextPageClick}
                        className="pag-btn next"
                    >Next</button>
                    </div>

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