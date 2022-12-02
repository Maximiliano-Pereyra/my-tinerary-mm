import React from "react";

export default function MyReactionCard(props) {
  let { nameReaction,  reaction } = props;
  return (
    <div
    >
      <div >
        <div >
          <img src={reaction} alt="reaction" width="15" />
          <h5>{nameReaction}</h5>
        </div>
      </div>
    </div>
  );
}