import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./deshbord.css";
import axios from 'axios';
import Edit from './Edit';


const UserDetail = ({ }) => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [showEdit, setShowEdit] = useState(false)
    const [datadetail, setDatadetail] = useState(false)
    const back = () => {
        navigate("/dashboard")
    }
    const storeg = localStorage.getItem('email')
    const deletItem = async (id) => {
        console.log('id:delet id che ', id);
        await axios.delete(`http://restapi.adequateshop.com/api/users/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + storeg
            }
        }).then((res) => {
            console.log('res: ', res);
        }).catch((error) => {
            console.log('error: ', error);
            return error
        })
        navigate("/dashboard")
    }

    useEffect(() => {
        axios.get(`http://restapi.adequateshop.com/api/users/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + storeg
            },
        })
            .then((res) => {
                console.log('res:get isd  ', res.data);
                setDatadetail(res.data)

            }).catch((error) => {
                console.log('error: ', error);
                return error
            })
    }, [])

    const editItem = (eid) => {
        console.log('eid: ', eid);
        setShowEdit(true)
    }
    return (
        <>
            <div className="back" onClick={back}>
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.3332 12.3333H7.04984L16.3665 3.01667L13.9998 0.666672L0.666504 14L13.9998 27.3333L16.3498 24.9833L7.04984 15.6667H27.3332V12.3333Z" fill="#051934" />
                </svg>
                <h2>Back</h2>
            </div>
            <div className="card">

                <div className="card-main-wrap">
                    <div className="img-name-wrap">

                        <div className="img">
                            <img src={datadetail.profilepicture} alt="profile" />
                        </div>

                        <div className="name">
                            <h2>{datadetail.name}</h2>
                        </div>
                    </div>

                    <div className="detail">

                        <div className="emai">
                            <h2> <span> Your Email :- </span> {datadetail.email}</h2>
                        </div>
                        <div className="location">
                            <h2> <span> Your location :-</span> {datadetail.location}</h2>
                        </div>
                        <div className="createdat">
                            <h2> <span> Your createdat :- </span>{datadetail.createdat}</h2>
                        </div>
                    </div>
                    <div className="button-wrap">

                        <button onClick={() => editItem(datadetail.id)}> Edit   </button>
                        <button onClick={() => deletItem(datadetail.id)} >  Delete </button>
                    </div>
                </div>
            </div>
            
            {<Edit id={datadetail.id} showEdit={showEdit} setShowEdit={setShowEdit} />}
        </>
    )
}

export default UserDetail