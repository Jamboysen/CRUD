import { useState, useEffect } from 'react'
import axios from 'axios'

const AddUser = () =>  {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = () => {
        // axios.get('http://localhost:4000/users').then((res) =>  {
        //     console.log(res)
        // })

        fetch('http://localhost:4000/users').then((res) =>  {
            console.log(res)
        })
    }

    function handleTextareaChange(e, targetType) {
      switch (targetType) {
          case 'firstName':
              setFirstName(e.target.value);
              break;
          case 'lastName':
              setLastName(e.target.value);
              break;
          case 'username':
              setUsername(e.target.value);
              break;
          case 'password':
              setPassword(e.target.value);
              break;
      }
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:4000/api/users', {
            username,
            password,
            firstName,
            lastName
        }, {
        // headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        // Handle success
    } catch (err) {
        console.error(err);
    }
    };

    return (
    <>
        <form onSubmit={handleSubmit}>
            <p>
                <label>First Name</label>
                <input id="first-name" value={firstName} onChange={(e) => handleTextareaChange(e, 'firstName')} />
            </p>
            <p>
                <label>Last Name</label>
                <input id="second-name" value={lastName} onChange={(e) => handleTextareaChange(e, 'lastName')}  />
            </p>
            <p>
                <label>Username</label>
                <input id="username" value={username} onChange={(e) => handleTextareaChange(e, 'username')}  />
            </p>
            <p>
                <label>Password</label>
                <input type="password" id="password" value={password} onChange={(e) => handleTextareaChange(e, 'password')}  />
            </p>

            <button type="submit" label="Submit">Submit</button>
        </form>
    </>
    )
} 

export default AddUser;