import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyReactionCard from "../components/MyReactionCard";
import reactionsActions from "../redux/actions/reactionAction";
import Swal from "sweetalert2";

export default function MyReactions() {
  const { token, idUser } = useSelector((state) => state.user);
  const { myreactions } = useSelector((state) => state.reactions);
  const { getMyReactions, deleteMyReactions } = reactionsActions;
  let dispatch = useDispatch();

  console.log(token);
  console.log(idUser);
  console.log(myreactions);

  useEffect(() => {
    dispatch(getMyReactions({ idUser, token }));
  }, []);

  return (
    <div >
      <div >
        <h1>My Reactions</h1>
      </div>
      <div>
        {myreactions?.map((item) => {
          function deleteFunc() {
            Swal.fire({
              icon: "question",
              title: " Do you want to delete the reaction?",
              showConfirmButton: true,
              iconColor: "#01344f",
              confirmButtonColor: "#01344f",
              confirmButtonText: "Yes",
              showCancelButton: true,
            }).then(async (result) => {
              if(result.isConfirmed) {
                try {
                  dispatch(deleteMyReactions({ idReaction: item._id, token }));
                } catch (error) {
                  console.log(error);
                }
              }
            });
          }
          return (
            <MyReactionCard
              event={item.itineraryId || item.showId}
              nameReaction={item.name}
              reaction={item.icon}
              onClick={deleteFunc}
            />
          );
        })}
      </div>
    </div>
  );
}