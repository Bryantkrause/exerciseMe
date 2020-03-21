import React from 'react'

const TableContext = React.createContext({
    type: '',
    quantity: '',
    weight: '',
    sets: [],
    exercises: [],
    taskSubmit: () => {},
    inputChange: () => {},
    getTasks: () => {}
})

export default TableContext
