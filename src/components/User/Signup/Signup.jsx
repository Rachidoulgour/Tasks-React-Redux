import React from 'react';


class Signup extends React.Component{
    constructor(props){
        super(props);
        this.status={
            firstname:"",
            lastname:"",
            password:"",
            repeatpassword:"",
            email:"",
            confirmemail:""


        }
    }
    render(){
        return(
        <form className="signup">
            <input type="text"/>
            <input type="text"/>
            <input type="password"/>
            <input type="password"/>
            <input type="email"/>
            <input type="email"/>
            <button type="submit">Sign Up</button>
        </form>
        )
    }

}
export default Signup;