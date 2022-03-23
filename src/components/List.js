import { React } from 'react'
import {getUsers} from './getUsers';
const data=getUsers(100);




function List(props) {

    const filteredData = data.filter((el) => {
        
        if (props.input === '') {
            return el;
        }
        else {
            return el.name.toLowerCase().includes(props.input) 
         }
    })

    

    
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

export default List