import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionAction from "../redux/actions/reactionAction";

export default function Reaction(props) {
  let { eventId, type } = props;
  const { token, idUser } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const { getReactions, updateReactions } = reactionAction;
  const [reaction, setReaction] = useState([]);
  const [reload, setReload] = useState(true);
  async function changeIcon(event) {
   
    let name;
    reaction.reactions.data.forEach((e) => {
      if (e.name === event.target.name) {
        name = e.name;
      }
    });
    try {
      let datos = {
        token: token,
        type: type,
        eventId: eventId,
        name: name
      }
      await dispatch(updateReactions(datos));
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    reactions();

  }, [reload]);

  async function reactions() {
    let res = await dispatch(getReactions({eventId, type}));
    setReaction(res.payload);
  }

  console.log(reaction);
  return (
    <>
      {reaction.success &&
        reaction.reactions.data?.map((e) => {
          let res = e.userId.find((user)=> user._id === idUser)
          return (
            res ? (
            <><img
              src={e.icon}
              width="15"
              alt={e.name}
              name={e.name}

              onClick={changeIcon}
            />
            <p>{reaction.reactions.lengthOfReactions[e.name]}</p>
            </>) : (
              <>
              <img
              src={e.iconBack}
              width="15"
              alt={e.name}
              name={e.name}

              onClick={changeIcon}
            />
            <p>{reaction.reactions.lengthOfReactions[e.name]}</p>
            </>
            )
          );
        })}
    </>
  );
}