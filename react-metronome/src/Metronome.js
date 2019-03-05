import React, { Component } from 'react';
import click1 from './click1.wav';
import click2 from './click2.wav';
import './Metronome.css';

class Metronome extends Component {

    Interval = 0;
    constructor(props){
        super(props);
        // we will create two Audio objects with those files
        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }
    startStop = (event) => {
        console.log(event.target);
        
        const {playing, bpm } = this.state;
        console.log(playing);
        if (playing) {
            // stop the timer
            clearInterval(this.Interval);
            this.setState({playing:false, count:0});
        }
        else {
            // start a timer with the current BPM
            this.Interval = setInterval(this.playClick, (60/bpm)*1000);
            this.setState({playing : true}, this.playClick);
        }
    }
    startStopClick1 = () => {
        this.click1.play()
    }
    startStopClick2 = () => {
        this.click2.play();
    }
    playClick = () => {
        const {count} = this.state;
        if( count === 0){
            this.startStopClick1();
            this.setState({count: 1});
        }
        else
            this.startStopClick2();
    }
   /* handleClick = event => {
        const { playing} = this.state;
        console.log(event.target);
        console.log(playing);
       
        
        if(playing){
            this.startStopClick1();
            this.playClick();
        }
        else {
            
            console.log(" starting");
            this.Interval = setInterval(()=> {
                this.startStopClick2();
                let { bpm } = this.state;
                bpm = parseInt(bpm);
                bpm = bpm + 1;
                this.setState({bpm})
            }, (60/ bpm1000);
            this.setState({playing: !playing}, this.startStopClick1());
        }
    }*/

    handleBpmChange = event => {
        const bpm = event.target.value;

        if( this.state.playing){
            // stop the old timer and start a new one
            clearInterval(this.Interval);
            
            this.Interval = setInterval(this.playClick,(60/bpm) * 1000);
            this.setState({bpm,count: 0}, this.playClick);
        }
        else{
            this.setState({bpm});
        }
        
    }
    render() {
       
        const {playing, bpm } = this.state;
        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm} BPM</div>
                    <input type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange} />
                </div>
                <button onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
            </div>
        );
    }
}

export default Metronome;