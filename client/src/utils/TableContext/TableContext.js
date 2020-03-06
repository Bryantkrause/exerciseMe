import React from 'react'

const TableContext = React.createContext({
    type: '',
    quantity: '',
    weight: '',
    sets: [],
    taskSubmit: () => {},
    inputChange: () => {},
    getTasks: () => {}
})

export default TableContext
