import React from "react"
import "./App.scss"

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
const operators = ["/", "*", "-", "+"]
const ids = {
    7: "seven", 
    8: "eight", 
    9: "nine", 
    4: "four", 
    5: "five", 
    6: "six", 
    1: "one", 
    2: "two", 
    3: "three", 
    0: "zero",
    "/": "divide", 
    "*": "multiply", 
    "-": "subtract", 
    "+": "add"
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastPressed: undefined,
            store: "0",
            operation: undefined
        }
    }

    handleClick = (e) => {
        const { store, lastPressed } = this.state
        const { innerText } = e.target

        switch(innerText) {
            case "AC": {
                this.setState({
                    store: "0"
                })
                break;
            }
            case "=": {
                const calculation = eval(store)
                this.setState({
                    store: calculation
                })
                break;
            }
            case ".": {
                const storeSplit = store.split(/[\+\-\*\/]/)
                const last = storeSplit.slice(-1)[0]

                if (!last.includes(".")) {
                    this.setState({
                        store: store + "."
                    })
                }

                break;
            }
            default: {
                let e = undefined
                if (operators.includes(innerText)) {
                    if (operators.includes(lastPressed) && innerText !== "-") {
                        const lastNumberIndex = store.split('').reverse()
                            .findIndex(char => char !== " " && numbers.includes(+char))
                        e = store.slice(0, store.length - lastNumberIndex) + ` ${innerText} `
                    } else {
                        e = `${store} ${innerText} `
                    }
                } else {
                    e = (store === "0") ? innerText : (store + innerText)
                }
                this.setState({
                    store: e
                })
            }
        }
        this.setState({
            lastPressed: innerText
        })
    }

    render() {

        const { store } = this.state

        return (
            <div className="container">
                <div id="display" className="display">
                    {store}
                </div>

                <div className="number-container">
                    <button 
                        id="clear" 
                        className="purple clear triple-length bold" 
                        onClick={this.handleClick}
                    >
                        AC
                    </button>

                    {numbers.map(number => (
                        <button 
                            id={ids[number]}
                            className={`light-grey ${number === 0 && 'double-length'}`} 
                            key={number} 
                            onClick={this.handleClick}
                        >
                            {number}
                        </button>
                    ))}

                    <button 
                        id="decimal" 
                        className="light-grey" 
                        onClick={this.handleClick}
                    >
                        .
                    </button>

                </div>

                <div className="operator-container">
                    {operators.map(operator => (
                        <button 
                            id={ids[operator]}
                            className='dark-grey' 
                            key={operator} 
                            onClick={this.handleClick}
                        >
                            {operator}
                        </button>
                    ))}

                    <button 
                        id="equals" 
                        className="purple bold" 
                        onClick={this.handleClick}
                    >
                        =
                    </button>
                </div>
            </div>
        )
    }
}

export default App 