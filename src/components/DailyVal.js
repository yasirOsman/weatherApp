import React from 'react';
import {getMaxTemp, getAverageHumidity} from '../functions/functions';

const Dailyval = (props) => {
    const values = props.theList.map(element => 
            
            <tr key={element}>         
                <td>{element}</td>
                <td>{getMaxTemp(props.list,element)}°</td>
                <td>{getAverageHumidity(props.list,element)}%</td>
             </tr>
            
        
        )
        return values
    
}

export default Dailyval;
