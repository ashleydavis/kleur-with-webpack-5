import * as React from "react";
import * as ReactDOM from "react-dom";
import kleur from 'kleur';

function App() {
    return (
        <div>
            {kleur.red("Just a test!")}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
