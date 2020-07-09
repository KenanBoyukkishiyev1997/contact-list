import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get('http://localhost:3003/users');
        setUsers(result.data.reverse())
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home</h1>

                {
                    users.map((user, index) => (
                        <div className="card mb-5">
                            <div className="card-body text-center" key={index.id}>
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.phone}</p>
                                <Link to={`/users/${user.id}`} className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>

                    ))
                }



            </div>
        </div>
    )
}

export default Home