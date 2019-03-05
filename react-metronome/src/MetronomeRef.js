import React, { Component } from 'react';
import click1 from './click1.wav';
import click2 from './click2.wav';
import './Metronome.css';

class MetronomeRef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputRange: {
                playing: false,
                bpm: 100,
            }    
        };
        // these return audio tag references
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
       
    }
    Clicked = () => {
        let {inputRange : {bpm, playing}} = this.state;
        this.setState(
            {inputRange:{bpm,playing: !playing}}
        );
        
    }
    bpmUpdate = () => {
        let {inputRange: {bpm, playing}} = this.state;


        console.log( "BPMUPDATE:::: The BPM is : " +bpm + " Is the Sound Playing: " + playing);          
    }
    render(){
        const { inputRange :{bpm, playing}} = this.state;
        console.log( "RENDER:::: The BPM is : " +bpm + " Is the Sound Playing: " + playing);
       return (
           <div>
               <div>
                   {bpm} BPM
               </div>
               <div>
                <input 
                    type="range" 
                    min="0" 
                    max="240" 
                    ref={ node => { this.input_ref = node;  }  }  
                    value={bpm} 
                    onChange={() => {
                                    this.bpmUpdate();
                                    console.log("the bpm was updated");
                                    this.setState({inputRange:{bpm:this.input_ref.value, playing}});
                                    }
                            }
                    />
               </div>


               <div>
                   <button onClick={this.Clicked}>{playing ? "Stop" : "Start"}</button>
               </div>
               {playing ? (<div>
                   <button onClick={this.Clicked}>Stop</button>
               </div>)
               : (<div>
                <button onClick={this.Clicked}>Start</button>
            </div>)}
               

           </div>
       ); 
    }
}

export default MetronomeRef;