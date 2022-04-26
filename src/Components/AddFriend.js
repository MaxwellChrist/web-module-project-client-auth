import React, { useState } from 'react'
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom'

const AddFriend = (props) => {

    const [form, setForm] = useState ({
        name: "",
        email: "",
    })

    const { push } = useHistory()

    const onChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newFriend = {
            name: form.name,
            email: form.email
        }
        axios.post('http://localhost:9000/api/friends', newFriend, {
            headers: {
                authorization: localStorage.getItem("token")
          }
        })
        .then(res => {
            setForm({
                name: "",
                email: "",
            })
        })
        .catch(err => {
            debugger
        })
    }


    return (
        <div>
            <form onSubmit={onSubmit}>  
                <label htmlFor="name"/>friend name
                <input  
                    name = "name"
                    type = "text"
                    value = {form.name}
                    onChange = {onChange}
                    placeholder = "friend name"
                />
                <label htmlFor="email"/>friend email
                <input  
                    name = "email"
                    type = "email"
                    value = {form.email}
                    onChange = {onChange}
                    placeholder = "friend email"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend