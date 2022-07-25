import ReactDOM from "react-dom";
import App from "../src/components/App";

ReactDOM.render(<HelloWorld />, document.querySelector("main"));

function HelloWorld() {
    return <App />;
}
