import React from "react";

import happy from "../images/happy.svg";
import unhappy from "../images/unhappy.svg";

const Result = (lucky) => {
    var s1 = "Hurray!!You are a lucky person!";
    var s2 = "Oops!!Your birthday is not a lucky number!";
    return (
        <div>
            {lucky.lucky ? <div className="label">{s1}</div> : <div className="label">{s2}</div>}
            {lucky.lucky ? <img src={happy} alt="happy" width="100%" height="200px"/> : <img src={unhappy} alt="unhappy" width="100%" height="200px" />}
        </div>
    );
}

export default Result;