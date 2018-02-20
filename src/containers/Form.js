import React, {Component} from 'react';
import {connect} from 'react-redux';
import { submitForm } from '../actions/userAction';

class Form extends Component{

    /*  using refs to fetch form value and using in action method, 
    should use firebase or some database to store the value, instead using localstorage  */
    submitForm(e, val){
        e.preventDefault();
        val = {
                name : this.refs.name.value,
                contact : this.refs.contact.value,
                venue : this.refs.venue.value,
                time : this.refs.time.value,
                date : this.refs.date.value
            }
             this.props.submitForm(val); 
             localStorage.setItem("bookingDetails" , JSON.stringify(val));
    }

    render(){
        console.log(this.props.user.state)
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="icon_prefix" 
                            type="text" 
                            className="validate" 
                            ref = "name"/> 
                            <label htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="icon_telephone" 
                            type="tel" 
                            className="validate" 
                            ref = "contact"/>
                            <label htmlFor="icon_telephone">MobileNo</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="venue" 
                            type="tel" 
                            className="validate" 
                            ref = "venue"/>
                            <label htmlFor="venue">Venue</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="time" 
                            type="time" 
                            className="validate" 
                            ref = "time"/>
                        </div>
                        <div className="input-field col s6">
                            <input id="date" 
                            type="date" 
                            className="validate" 
                            ref = "date"/>
                        </div>
                    </div>
                    <button type="submit" 
                    className="btn btn-danger"
                    onClick={this.submitForm.bind(this)}>Confirm Booking</button>
                    {localStorage.getItem("bookingDetails")}
                </form>
            </div>
        );
    }
}

const mapStatetoProps = (state) =>{
    return{
        user : state
    }
}

const mapDispatchtoProps = (dispatch) =>{
    return {
        submitForm(val){
            dispatch(submitForm(val))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Form);