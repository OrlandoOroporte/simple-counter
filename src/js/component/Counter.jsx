import React from "react";
import PropTypes from "prop-types"

const Counter = (props)=> {
const {one, two, three, four} = props 

    return (
        <div className="contanier bg-dark">
            <div className="row justify-content-center">
                <div className="col-2"><i className="far fa-clock"></i></div>
                <div className="col-2">{four}</div>
                <div className="col-2">{three}</div>
                <div className="col-2">{two}</div>
                <div className="col-2">{one}</div>
            </div>
        </div>
    
    )
}

Counter.propTypes = {
    one: PropTypes.number,
    two: PropTypes.number,
    three: PropTypes.number,
    four: PropTypes.number,


}

export default Counter