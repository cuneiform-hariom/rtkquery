import React, { useState } from 'react'
import { useAddStudentMutation, useDeleteStudentMutation, useGetStudentsQuery } from '../redux/features/studentApi'
import { Link } from 'react-router-dom'

export default function StudentsList() {
    const { isLoading, data } = useGetStudentsQuery()
    const [deletePost] = useDeleteStudentMutation()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const newPost = useAddStudentMutation()[0]

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = { name, email }
        newPost(post)
        setEmail("")
        setName("")
    }
    return (
        <div>
            <h1>RTK Query Practice </h1>
            <h3>Add Students</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Student Name' />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Student Email' />
                <button type="submit">Submit</button>
            </form>
            <h3>All Students </h3>
            <div className="grid">
                {isLoading ? "loading..." : data?.map((posts) =>
                    <div className='card' key={posts.id}>
                        <p className='s-id'>{posts.id}</p>
                        <h2>{posts.name}</h2>
                        <p>{posts.email}</p>
                        <button className='del' onClick={() => deletePost(posts.id)}>x</button>
                        <Link to={`/${posts.id}`} >View Detail</Link>
                    </div>
                )}
            </div>

        </div>
    )
}
