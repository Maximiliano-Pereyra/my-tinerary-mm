import React from "react";

function ChecksInputs(props){
let {continent} = props
return(
    <>
    <div>

        <label> <input type="checkbox" name="continent" />{continent}</label>
      </div>

      </>
)
}
export default ChecksInputs;