import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom'

const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    const { push } = useHistory()

    if (!window.localStorage.getItem("token")) {
        push('/login')
    }

    const getData = () => {
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Friends List</h1>
            <div>
                <ul>
                    {
                        friends.map(friend => {
                            return (
                                <li key={friend.id}>{friend.name} - ({friend.age}) - ({friend.email})</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )


}

export default FriendsList