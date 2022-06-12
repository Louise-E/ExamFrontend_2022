import React from "react";

const WelcomePage = ({name, role}) => {
    return (
        <div>
            <h3>Welcome {name}</h3>
            <br/>
            <h6>Your role on this site is {role}</h6>
        </div>
    )
}
export default WelcomePage;