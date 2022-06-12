import React from "react";
const Logout = ({onClick}) => {
    return(
        <div>
            <input type="submit" value="Logout" onClick={onClick}/>
        </div>
    )
}
export default Logout