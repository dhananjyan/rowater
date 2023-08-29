
import { Button, Table } from 'react-bootstrap';
import Row from './Row/Row';

export default function Category({ data }) {

    return (
        <div>
            <Table responsive="sm" bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Meta Title</th>
                        <th>Meta Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(item => {
                        return <Row item={item} />
                    })}
                </tbody>
            </Table>
        </div>
    )
}
