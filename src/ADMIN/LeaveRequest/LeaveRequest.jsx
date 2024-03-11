import React from 'react'
import { Container } from 'react-bootstrap'

function LeaveRequest() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
                <h3>Leave Request</h3>
                <Container>
                    <table className='table border mt-4'>
                        <thead className='p-2'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Reason</th>
                                <th>From Date</th>
                                <th>To Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='p-2'>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <div className='d-flex'>
                                    <td><button className='btn btn-success'>Accept</button></td>
                                    <td><button className='btn btn-danger'>Reject</button></td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>
        </>
    )
}

export default LeaveRequest