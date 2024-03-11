import { Container, Table } from 'react-bootstrap'

function Bookings() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
    <h3>Bookings</h3>
    <Container>
        <Table responsive>
            <thead className='p-2'>
                <tr>
                    
                    <th>Name</th>
                    <th>Catagory</th>
                    <th>Maternity Care Provider</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='p-2'>
                <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <div className='d-flex'>
                        <td><button className='btn btn-success'>Accept</button></td>
                        <td><button className='btn btn-danger'>Reject</button></td>
                    </div>
                </tr>
            </tbody>
        </Table>
    </Container>
</div>

  )
}

export default Bookings