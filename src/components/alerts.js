import React from "react";


const Alerts = (props) => {
    return (
        <div id="alertBox" style={{display : 'flex'}}>
          <div className="write">
            <strong>Privacy Notice!</strong>
            We are not storing your data.
          </div>
          <div style={{ paddingLeft : "1rem", cursor: "pointer", fontsize: "0.5rem" }}>
          <span onClick={props.handledel}>x</span>
          </div>
        </div>
    );
}

export default Alerts;