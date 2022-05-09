import React from "react"
import "./App.scss"

export default function App() {
    return (
        <div className="container">
            <div className="grid">
                <div id="display"></div>
                <div className="button double-length" id="clear">AC</div>
                <div className="button operators" id="divide">/</div>
                <div className="button operators" id="multiply">*</div>
                <div className="button" id="seven">7</div>
                <div className="button" id="eight">8</div>
                <div className="button" id="nine">9</div>
                <div className="button operators" id="subtract">-</div>
                <div className="button" id="four">4</div>
                <div className="button" id="five">5</div>
                <div className="button" id="six">6</div>
                <div className="button operators" id="add">+</div>
                <div className="button" id="one">1</div>
                <div className="button" id="two">2</div>
                <div className="button" id="three">3</div>
                <div className="button double-height" id="equals">=</div>
                <div className="button double-length" id="zero">0</div>
                <div className="button" id="decimal">.</div>
            </div>
        </div>
    )
}