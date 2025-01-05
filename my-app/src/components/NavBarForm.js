import React from "react";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            buttonText: "Login",
        };
    }


    handleClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false: true
        }),  () => console.log(this.state.isLoggedIn))
    }

    render() {
        return (
            <div className={css.NavBarForm}>
                <h1>My Gallery</h1>

                {
                    this.state.isLoggedIn ? 
                        <button onClick={() => this.handleClick()}>Log In</button>
                        :
                        <form>
                            <label htmlFor = "username">Username:</label>
                            <input placeholder="username" id="username"/>
                            
                            <label htmlFor = "password">Password:</label>
                            <input placeholder="password" id="password"/>
                            <button onClick={() => this.handleClick()}>Submit</button>
                        </form>
                }     
            </div>
        );
    }
}

export default NavBarForm;