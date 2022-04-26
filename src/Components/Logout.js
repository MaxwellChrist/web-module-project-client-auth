import React, { useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Logout = (props)=> {

    const { push } = useHistory()

    useEffect(() => {
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res => {
            window.localStorage.removeItem('token')
            push('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div></div>
    )
}

export default Logout;