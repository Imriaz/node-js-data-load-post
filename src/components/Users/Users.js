import React, { useEffect, useRef, useState } from 'react';
import User from '../user/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(result => setUsers(result));
    }, []);

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name: name, email: email }


        //send data to the server
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const addedUser = data;
                const newUsers = [...users, addedUser];
                setUsers(newUsers);
            })

        nameRef.current.value = '';
        emailRef.current.value = '';

        e.preventDefault();
    }

    return (
        <div>
            <form onClick={handleAddUser}>
                <input type='text' ref={nameRef} placeholder='Name'></input>
                <input type='email' ref={emailRef} placeholder='Email'></input>
                <input type='submit' value='Submit'></input>

            </form>
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                ></User>)
            }
        </div>
    );
};

export default Users;