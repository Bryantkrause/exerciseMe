import React from 'react'
import TableContext from '../../utils/TableContext'
import {Button, Form, Label, Input} from 'reactstrap'

const TableForm = () => {
    return (
        <TableContext.Consumer>
            {
                ({type, quantity, weight, taskSubmit, inputChange}) => (
                    <Form>
                        <Label htmlFor="type"> What did you do?</Label>
                        <Input type="text" placeholder="Insert a type here" name="type" onChange={inputChange} value ={type} />
                        <Label htmlFor="quantity">how many:</Label>
                        <Input type="text" placeholder="How Many" name="quantity" onChange={inputChange} value={quantity}/>
                        <Label htmlFor="weight"> how heavy</Label>
                        <Input type="text" placeholder="over 9000?" name="weight" onChange={inputChange} value={weight}/>
                        <Button id="submit" className="btn" color="primary" onClick={taskSubmit}>Add type</Button>
                    </Form>
                )
            }

        </TableContext.Consumer>
    )
}

export default TableForm