import React, { useEffect, useState } from 'react'
import "./deshbord.css";

import axios from 'axios';
import { AiFillCloseCircle } from "react-icons/ai";

const Edit = ({ id, setShowEdit, showEdit }) => {
  console.log('id: ', id);
  const [updateData, setUpdateData] = useState()
  useEffect(() => {
    axios.get(`http://restapi.adequateshop.com/api/users/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + storeg
      },
    })
      .then((res) => {
        setUpdateData(res.data)
      }).catch((error) => {
        console.log('error: ', error);
        return error
      })
  }, [showEdit])

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    updateAPI()
  }
  console.log('updateData: ', updateData);
  const storeg = localStorage.getItem('email')
  const updateAPI = async () => {
    await axios.put(`http://restapi.adequateshop.com/api/users/${updateData.id}`, {
      headers: {
        'Authorization': 'Bearer ' + storeg
      },
      data: updateData,
    })
      .then((res) => {
        console.log('res: edit response', res);
      }).catch((error) => {
        console.log('error: ', error);
        return error
      })
  }
  const close = () => {
    setShowEdit(false)
  }
  console.log('updateData: ', updateData);
  return (
    <>
{/* <div className="bgblur"></div> */}
      <div class={`editform_wrapper ${showEdit ? 'open' : ''}`}>
        <form class="myForm" onSubmit={handleUpdate}>
          <div class="formInstructionsDiv formElement">
            <h2 class="formTitle" >Edit Your Detail</h2>
            <div className="close" onClick={close}>
              <AiFillCloseCircle />
            </div>
          </div>
          <div class="fillContentDiv formElement">
            <label>
              <input type="text" name='name' placeholder='Name' class="inputRequest formContentElement" onChange={newData} value={updateData && updateData?.name} />
            </label>
            <label>
              <input type="email" name='email' placeholder='email' class="inputRequest formContentElement" onChange={newData} value={updateData && updateData?.email} />
            </label>
            <label>
              <input type="text" name='location' placeholder='location' class="inputRequest formContentElement" onChange={newData} value={updateData && updateData?.location} />
            </label>
            <button>Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Edit