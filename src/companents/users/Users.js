import React, { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const User = () => {

    useEffect(() => {
        loadUser()
    },[])

    const [user, setUser] = useState({
        name: "",
        phone: "",
        homePhone: "",
        workPhone: ""
    })
    const { id } = useParams()

    const loadUser = async () => {
        const res = await axios.get(
            `http://localhost:3003/users/${id}`
        )
        setUser(res.data)
    }

    const deleteUser = async id => {
       
        if(window.confirm('Are you sure ?')){
            await axios.delete(`http://localhost:3003/users/${id}`)
            loadUser()
        }else{
            window.location.href=`http://localhost:3000/users/${id}`
        }
        
    }
    return (
        <div className='container mt-5' >
            <ul className="list-group text-center">
                <li className="list-group-item">name: {user.name}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">Home Phone: {user.homePhone}</li>
                <li className="list-group-item">Work Phone: {user.workPhone}</li>
            </ul>
            <div className='buttons d-flex justify-content-around mt-5 align-items-center'>
                <Link to='/' type="button" className="btn btn-primary mr-5 w-50">Go Back</Link>
                <Link to={`/users/edit/${user.id}`} type="button" className="btn btn-primary mr-5 w-50">Edit</Link>
                <Link to='' type="button" className="btn btn-danger mr-5 w-50" onClick={() => deleteUser(user.id)}>Delet</Link>
            </div>
        </div>
    )
}
export default User