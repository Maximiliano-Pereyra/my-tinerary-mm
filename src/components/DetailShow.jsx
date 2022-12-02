import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentActions from '../redux/actions/commentActions';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api/url';
import showActions from '../redux/actions/showAction';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function DetailShow() {
  let { id } = useParams()
  let [showFind, setShowFind] = useState([])
  const dispatch = useDispatch();
  const { getCommentsShowId } = commentActions
  const { getOneShowId } = showActions
  const { comments } = useSelector((state) => state.comments);
  const { shows } = useSelector((state) => state.shows);
  const { idUser, photo, token } = useSelector((state) => state.user);
  const commentInputElement = useRef();
  //dispatch(getOneShowId(id))

  useEffect(() => {

    axios.get(`${BASE_URL}/show/?=${id}`)
      .then(response => setShowFind(response.data.res.find(show => show._id === id)))
      .catch(err => console.log(err.message))

    dispatch(getCommentsShowId(id))

  }, [])
  console.log(showFind);
  console.log(comments);
  console.log(photo);

  let handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      showId: id,
      userId: idUser,
      date: '2022-12-12',
      comment: commentInputElement.current.value,
    };
    console.log(data);


  /*   let day = showFind.date
    let output = String(day.getDate()).padStart(2, '0') + '/' + String(day.getMonth() + 1).padStart(2, '0') + '/' + day.getFullYear();
    console.log(output); */

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
        window.location.href = `http://localhost:3000/shows/prueba/`
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
    <div className='detailsDeShow'>
      <h1>{showFind.name}</h1>
      <img src={showFind.photo} alt={`imagen de ${showFind.photo}`} />
      <h2>{showFind.description}</h2>
      <h2>Date: {showFind.date}</h2>
      <h2>Price: ${showFind.price}</h2>
      <div>
        <h2>Comments</h2>
        {comments.map(allcomments => <h3 key={allcomments._id} >{allcomments.comment}</h3>)}
        <h2>Your comments</h2>
  
      </div>
      <div>
        <img src={photo} alt={`imagen de ${photo}`} />
        <input
          type="text"
          placeholder="leave us your's opinion"
          name='comment'
          ref={commentInputElement}
        />
      </div>
      <button id='signIn2' type='submit' onClick={handleSubmit}>Post</button>
      <ToastContainer />
      <button id='signIn2' type='submit' onClick={''}>Edit your comment</button>
    </div>
  )
}


