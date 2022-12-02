import React from 'react'
import commentActions from '../redux/actions/commentActions';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';
import { useState } from "react";
import UserComment from './UserComment';

export default function Comments({ idShow }) {
    const dispatch = useDispatch();
    const { getCommentsShowId } = commentActions
    const { comments } = useSelector((state) => state.comments);
    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    let hide = () => {
        setMostrarOcultar(!mostrarOcultar);
    };
        useEffect(() => {
            dispatch(getCommentsShowId(idShow))
        }, [idShow])
console.log(comments);
        return (
            <div className="comments">
                <h3>Your's comments</h3>
                <h3>*Acatendrian que ir los comentarios del usuario de ese show*</h3>
               {/*  <UserComment /> */}
                { mostrarOcultar ? (
            
                <ol className="listaDeComentarios">
                    {comments.map(allcomments => <li className="cadaComentario">{allcomments.comment}</li>)}
                </ol>
                ) : (
                    <button id='commentsbutton' onClick={hide}>See others comments</button>
            )}
            </div>
        )
    }
