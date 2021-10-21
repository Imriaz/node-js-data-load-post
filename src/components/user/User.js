import React from 'react';

const User = (props) => {
    const { name, email, phone } = props.user;

    // const handleAddUser = e => {
    //     e.preventDefault();
    // }

    return (
        <div>
            {/* 
            <form onClick={handleAddUser}>
                <input type='text' placeholder='Name'></input>
                <input type='submit' value='Submit'></input>

            </form> */}

            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Name: {phone}</h2>

            <br></br>
        </div>
    );
};

export default User;