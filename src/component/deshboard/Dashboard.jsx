import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/slice';
import "./deshbord.css";

const Dashboard = () => {
    const storeg = localStorage.getItem('email')
    const [userdata, setUserData] = useState()
    const dispathch = useDispatch()
    const [count, setCount] = useState(1);
    const nextpage = () => {
        setCount(count + 1)
    }
    const Prevage = () => {
        setCount(count - 1)
    }
    console.log('count:-- ', count);
    useEffect(() => {
        axios.get(`http://restapi.adequateshop.com/api/users?page=${count}`, {
            headers: {
                'Authorization': 'Bearer ' + storeg
            },
        }).then(res => {
            console.log('res.data:--- ', res.data);
            setUserData(res.data.data)
            // dispathch(setData(res.data.data))
        }).catch((error) => {
            return error
        })
    }, [count])
    const dispatch = useDispatch()
    const logoutnbtn = () => {
        dispatch(logout())
    }
    console.log('userdata:---- ', userdata);
    return (
        <>
            <h1>User Dashboard</h1>
            <button onClick={logoutnbtn}>logout</button>
            <div className='card-main'>
                {
                    userdata?.map((item) => {
                        return (

                            <div className="card">

                                <div className="card-main-wrap">
                                    <div className="img-name-wrap">
                                        <div className="img">
                                            <img src={item.profilepicture} alt="profile" />
                                        </div>

                                        <div className="name">
                                            <h2>{item.name}</h2>
                                        </div>
                                    </div>
                                    <div className="detail">

                                        <div className="emai">
                                            <h2> <span> Your Email :- </span> {item.email}</h2>
                                        </div>
                                        <div className="location">
                                            <h2> <span> Your location :-</span> {item.location}</h2>
                                        </div>
                                        <div className="createdat">
                                            <h2> <span> Your createdat :- </span>{item.createdat}</h2>
                                        </div>
                                    </div>
                                    <button  >  <Link to={`/dashboard/userdetail/${item.id}`}>View </Link></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="pagetion">
                <button onClick={Prevage}> Previous</button>
                <button onClick={nextpage}> Next</button>
            </div>
        </>
    )
}

export default Dashboard