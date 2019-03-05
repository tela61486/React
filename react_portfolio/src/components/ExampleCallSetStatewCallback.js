import React, { PureComponent } from 'react';

const incrementUsedtoSendtoSetState = ({counter,count}) => {
    console.log("IncrementUsedtoSendtoSetState::::: the count is :" + count);
    
    return ({
        counter: counter+counter,
        count: count + 1
    });
}

//const incrementUsedtoSendtoSetState = ({count}) => {

//}

class ExampleCallSetStatewCallback extends PureComponent {
    history = {"count": [],
                "counter": [],
                "negater": []
            };
    state = {
        count: 0,
        counter:2,
        negater:-2
    };

    incrementUsedtoCallSetState = () => {
        const { count } = this.state;
        this.setState({count: count + 1});
    }



    handleClick = () => {
        this.incrementUsedtoCallSetState();
        this.incrementUsedtoCallSetState();
       // setTimeout(this.incrementUsedtoCallSetState, 3000);    
    }
    handleClick2 = () => {
        const {count} = this.state; 
        //const increment = incrementUsedtoSendtoSetState();
        console.log("In handleClick2-print1 the count is :::: "+this.state.count);
        this.setState(incrementUsedtoSendtoSetState);
        console.log("In handleClick2-print2 the count is :::: "+this.state.count);
        this.setState(incrementUsedtoSendtoSetState);
        console.log("In handleClick2-print3 the count is :::: "+this.state.count);
    }

    render() {
        
        const { counter, count, negater} = this.state;
        let historyNew = {"count": count, "counter": counter,"negater":negater};
        let counthistory = null;
        let counterhistory = null;
        let negaterhistory = null;
        
        if( this.history) {
                counthistory = this.history["count"].slice();
                counterhistory = this.history["counter"].slice();
                negaterhistory = this.history["negater"].slice();
        }
        
        this.history["count"].push(historyNew["count"]);
        this.history["counter"].push(historyNew["counter"]);
        this.history["negater"].push(historyNew["negater"]);
        console.log(this.history["count"]);

        let columnarDivStyle = { display: "inline-block"};
        let historyStyle  = {width: "200px", overflow:"scroll" , "maxHeight": "200px"};
        return (
            <div>
                <h1>setState Async Good</h1>
                <div>
                    <button onClick={this.handleClick}>CallSetState</button>
                    <button onClick={this.handleClick2}>SendSetStateAFunction</button>
                    <div>
                        <div className="CountData" style={columnarDivStyle}>
                            <div >Count: {count}</div>
                            <div style={ historyStyle }>
                                { counthistory ?
                                        <ul>{counthistory.reverse().map((counthistItem, index) => {
                                                return <li key={"count"+index} >{counthistItem}</li>
                                                })
                                            }
                                    </ul> : null
                                }
                            </div>
                        </div>
                        <div className="CounterData" style={columnarDivStyle}>
                            <div>Counter: {counter}</div>
                            <div style={ historyStyle }>
                                {counterhistory ? 
                                    <ul>
                                        {counterhistory.reverse().map((counterhistItem, index) => {
                                                return <li key={"counter"+index}>{counterhistItem}</li>
                                            })
                                        }
                                    </ul> : null
                                }
                            </div>
                        </div>
                        <div className="NegaterData" style={columnarDivStyle}>
                               <div>Negater: {negater}</div>
                               <div style={historyStyle}>
                                    {negaterhistory ? 
                                        <ul>
                                            {negaterhistory.reverse().map((negaterhistItem, index) => {
                                                return <li key={"negater"+index}>{negaterhistItem}</li>
                                            })}
                                        </ul> : null
                                    }
                                </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ExampleCallSetStatewCallback;