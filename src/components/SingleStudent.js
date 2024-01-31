import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleStudent() {
    const { id } = useParams()
    const [data, setdata] = useState()
    console.log('data: ', data);
    useEffect(() => {
        axios.get(`https://65ba036eb4d53c066551d26a.mockapi.io/students/${id}`)
            .then((res) => setdata(res.data))
            .catch((error) => console.log("error:", error))
    }, [])


    return (
        <div>
            <h1>Single Student Page</h1>
            <p>This is a single student page. You can see more information about this specific student here.</p>
            {data ?
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{data?.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{data?.email}</td>
                        </tr>
                    </tbody>
                </table> : "Data Not Found"}
        </div>
    )
}
