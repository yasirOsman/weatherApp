import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };
    
    clearModal = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    deleteOptions = () => {
        this.setState(() => ({options: []}))
    };
    deleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    };
    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ({selectedOption: option}))
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid option.'
        } else if(this.state.options.indexOf(option) > -1){
            return 'This item already exists.'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option) }))
    };

    componentDidMount(){
        try {
             const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if(options){
           this.setState(() => ({options})); 
        } 
        } catch (e) {
            
        }
       
    }
    componentDidUpdate(prevProps, prevState ){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }
    componentWillUnmount(){
        console.log('working');
    }
    
    render(){
        
        const subtitle='Put your life in the hands of a computer.';
        return(
            <div>
                <Header  subtitle={subtitle}/>
                <div className="container">
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                    <Options 
                    options={this.state.options}
                    deleteOptions={this.deleteOptions}
                    deleteOption={this.deleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                    
                    </div>
                <OptionModal 
                selectedOption={this.state.selectedOption}
                clearModal={this.clearModal}
                />
            </div>
        );
    }
}