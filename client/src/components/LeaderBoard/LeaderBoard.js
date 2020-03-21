import React from 'react'
import TableContext from '../../utils/TableContext'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Table} from 'reactstrap'

const LeaderBoard = () => {
    return (
        <TableContext.Consumer>
            {
                ({exercises}) => (
                    <>
                    <Table dark>
                        <thead>
                            <tr>
                                <th><h4>#</h4></th>
                                <th><h4>type</h4></th>
                                <th><h4>quantity</h4></th>
                                <th><h4>weight</h4></th>
                                <th><h4>update</h4></th>
                                <th><h4>delete</h4></th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                            exercises.map( ({_id, type, quantity, weight}, i) =>
                            <tr key={_id}>
                                <td>{i+1}</td>
                                <td>{type}</td>
                                <td>{quantity}</td>
                                <td>{weight}</td>
                                <td><EditIcon /></td>
                                <td><DeleteIcon /></td>

                            </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    </>
                )
            }
        </TableContext.Consumer>
    )
}

export default LeaderBoard