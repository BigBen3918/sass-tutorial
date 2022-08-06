import logo from "./logo.svg";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Variable Example */}
            <h1>This is a variable example</h1>

            {/* Nested Rules */}
            <div id="nested">
                <h3>This is a nested rules example</h3>
            </div>

            {/* Interpolation Example */}
            <p className="interpolation">Interpolation Example.</p>

            {/* Function Example */}
            <div id="function">
                <h3>This is a function example</h3>
            </div>

            {/* Mixin Example */}
            <div id="mixin">
                <p>This is mixin Example</p>
            </div>
        </div>
    );
}

export default App;
