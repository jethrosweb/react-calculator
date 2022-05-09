import React from "react"
import "./App.scss"

export default function App() {

    const [input, setInput] = React.useState("")
    const [output, setOutput] = React.useState(0)

    const display = (text) => {
        let lastText = input[input.length-1]

        setInput(prevState => prevState + text)

        if (lastText == "=") {
            if (/[0-9.]/.test(text)) {
                setInput(text)
            } else {
                setInput(output + text)
            }
        }
    }

    const getAnswer = () => {
        setOutput(eval(input))
        setInput((prevInput) => prevInput + "=")
    }

    const clear = () => {
        setInput("")
        setOutput(0)
    }

    return (
        <div className="container">
            <div className="grid">
                <div className="display">
                    <input 
                        className="input-display" 
                        placeholder="0" 
                        value={input} 
                        disabled 
                    />
                    <input 
                        id="display" 
                        className="output-display" 
                        value={output}
                        disabled
                    />
                </div>
                <div onClick={clear} className="button double-length" id="clear">AC</div>
                <div onClick={() => display("/")} className="button operators" id="divide">/</div>
                <div onClick={() => display("*")} className="button operators" id="multiply">*</div>
                <div onClick={() => display("7")} className="button" id="seven">7</div>
                <div onClick={() => display("8")} className="button" id="eight">8</div>
                <div onClick={() => display("9")} className="button" id="nine">9</div>
                <div onClick={() => display("-")} className="button operators" id="subtract">-</div>
                <div onClick={() => display("4")} className="button" id="four">4</div>
                <div onClick={() => display("5")} className="button" id="five">5</div>
                <div onClick={() => display("6")} className="button" id="six">6</div>
                <div onClick={() => display("+")} className="button operators" id="add">+</div>
                <div onClick={() => display("1")} className="button" id="one">1</div>
                <div onClick={() => display("2")} className="button" id="two">2</div>
                <div onClick={() => display("3")} className="button" id="three">3</div>
                <div onClick={getAnswer} className="button double-height" id="equals">=</div>
                <div onClick={() => display("0")} className="button double-length" id="zero">0</div>
                <div onClick={() => display(".")} className="button" id="decimal">.</div>
            </div>
        </div>
    )
}