import React from 'react';
import Option from './Option';
const Options = (props) =>  (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__size">Your Options</h3>
            
            
            <button 
            onClick={props.deleteOptions}
            className="button button--link"
            >Remove All</button>
                </div>   
                {props.options.map((option, index) => (
                    <Option 
                    key={option} 
                    optionText={option} 
                    deleteOption={props.deleteOption}
                    count={index + 1}
                    ></Option>))}
  
                {props.options.length === 0 && <p className="widget__message">Please add an option!</p>}
               
        </div>
    );

export default Options;