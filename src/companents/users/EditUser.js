import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import MaskedInput from 'react-text-mask'

const EditUser = () => {
    let history = useHistory()
    const { id } = useParams()

    const [user, setUser] = useState({
        name: "",
        phone: "",
        homePhone: "",
        workPhone: ""
    })
    const { name, phone, homePhone, workPhone } = user

    const onInput = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`, user)
        history.push('/')
    }

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>Edit User</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="row">
                    <div className="col-12 mb-5">
                        <input type="text" name='name' onChange={e => onInput(e)} className="form-control" value={name} placeholder="Full Name" />
                    </div>
                    <div className="col-12 mb-5">
                        <MaskedInput
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} name='phone'
                            onChange={e => onInput(e)}
                            value={phone}
                            className="form-control "
                            placeholder="Your Mobile Phone" />
                    </div>
                    <div className="col-12 mb-5">
                        <MaskedInput
                            mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} name='homePhone'
                            onChange={e => onInput(e)}
                            value={homePhone}
                            className="form-control "
                            placeholder="Your Home Phone" />
                    </div>
                    <div className="col-12 mb-5">
                        <MaskedInput
                            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} name='workPhone'
                            onChange={e => onInput(e)}
                            value={workPhone}
                            className="form-control "
                            placeholder="Your Work Phone" />
                    </div>
                </div>
                <button type="submit" className="btn btn-warning w-100">Update</button>
            </form>
        </div>

    )
}

export default EditUser