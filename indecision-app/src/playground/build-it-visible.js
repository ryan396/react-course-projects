console.log("ITS ALIVE");

const appRoot = document.getElementById('app');

let visibility = true;
const onVisibilityToggle = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onVisibilityToggle}>{visibility ? "Hide details" : "Show Details"}</button>
            {visibility ? <p>These are details you can see</p> : <p></p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();