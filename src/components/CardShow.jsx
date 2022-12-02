import React from "react";
import axios from 'axios';
import commentActions from '../redux/actions/commentActions';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';
import Comments from "./Comments";


function CardShow(props) {
    let { titulo } = props
    let { imagen } = props
    let { precio } = props
    let { fecha } = props
    let { id } = props
    let _id = id
    const dispatch = useDispatch();
    const { idUser, photo, token } = useSelector((state) => state.user);
    const commentInputElement = useRef();

    let handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            showId: id,
            userId: idUser,
            date: '2022-12-12',
            comment: commentInputElement.current.value,
        };

        let headers = { headers: { Authorization: ` Bearer ${token} ` } };

        try {
            let res = await axios.post((`http://localhost:8000/api/comments/`), data, headers)
            console.log(res);
            if (res.data.success) {
                toast.success(' The comment was created', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                window.location.href = `http://localhost:3000/hotels`
            } else {
                toast.error(res.data.message.join('///'), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }

        } catch (error) {
            console.log(error.message);
            toast.error('Sorry, the comment could not be created!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    
    return (
        <div className="detallesDeShow">
            <div className="tituloEImagenDeShow">
                <h1>{titulo}</h1>
                <h1>{id}</h1>
                <img src={imagen} />
            </div>
            <div className="suplementoDeShow">
                <p>Price: {precio} USD</p>
                <p>Date: {fecha}</p>
            </div>
            <Comments idShow={_id}/>
            <div className="footerDeShow">
                <div className="nuevoComentario">
                    <img src={photo} alt={`imagen de ${photo}`} />
                    <input
                        type="text"
                        placeholder="leave us your's opinion"
                        name='comment'
                        ref={commentInputElement}
                    />
                    <button id='signIn2' type='submit' onClick={handleSubmit}>Post</button>
                    <ToastContainer />
                </div>
                <button id='signIn2' type='submit' onClick={''}>Edit your's comment</button>
                <button id='signIn2' type='submit' onClick={''}>Delete your's comment</button>
            </div>
        </div>

    );
}
export default CardShow;
