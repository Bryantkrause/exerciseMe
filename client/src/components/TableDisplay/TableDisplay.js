import React from 'react'
import TableContext from '../../utils/TableContext'
import {Table} from 'reactstrap'

const TableDisplay = () => {
    return (
        <TableContext.Consumer>
            {
                ({sets}) => (
                    <>
                    <Table dark>
                        <thead>
                            <tr>
                                <th><h4>#</h4></th>
                                <th><h4>type</h4></th>
                                <th><h4>quantity</h4></th>
                                <th><h4>weight</h4></th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                            sets.map( ({_id, type, quantity, weight}, i) =>
                            <tr key={_id}>
                                <td>{i+1}</td>
                                <td>{type}</td>
                                <td>{quantity}</td>
                                <td>{weight}</td>

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

export default TableDisplay