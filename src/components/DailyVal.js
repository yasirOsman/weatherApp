import React from 'react';
import {getMaxTemp, getAverageHumidity} from '../functions/functions';

const Dailyval = (props) => {
    console.log(props.theList)
    const values = props.theList.map(element => 
            
            <tr key={element}>         
                <td>{element}</td>
                <td>{getMaxTemp(props.list,element)}°</td>
                <td>{getAverageHumidity(props.list,element)}%</td>
             </tr>
            
        
        )
        // console.log(props.list)
        return values
    
}

export default Dailyval;