import React from 'react'
import axios from 'axios'
import TableContext from '../../utils/TableContext'
import TableDisplay from '../../components/TableDisplay'
import TableForm from '../../components/TableForm'

class Tables extends React.Component {
    state = {
        type: '',
        quantity: '',
        weight: '',
        sets: [],
        inputChange: e => {
            this.setState({[e.target.name]: e.target.value})
        },
        taskSubmit: e => {
            e.preventDefault()
            console.log(this.state)
            axios.post('/gyms', {
                type: this.state.type,
                quantity: this.state.quantity,
                weight: this.state.weight
            })
            .then( ({data}) => {
                console.log(data)
                let arr = JSON.parse(JSON.stringify(this.state.sets))
                arr.push(data)
                this.setState({sets: arr, type:'', quantity: '', weight: ''})
            })
        },
    }

    componentDidMount() {
        axios.get('/gyms')
        .then( ({data})=> this.setState({sets: data}))
    }
    render () {
        return (
            <TableContext.Provider value= {this.state}>
                <div className="container">
                <TableForm/>
                <TableDisplay/>
                </div>
            </TableContext.Provider>
        )
    }
}

export default Tables