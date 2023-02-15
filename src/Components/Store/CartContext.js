import React  from 'react'

const Cartcontext = React.createContext({
    items: [],
    totalAmount: 0 ,
    additems : (item) => {

    },
    removeitems : (id) => {

    },

    setitems:(item)=>{

    },
    emptycartitems:()=>{

    }
})

export default Cartcontext