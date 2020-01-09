"use strict";

console.log("ITS ALIVE");

var appRoot = document.getElementById('app');

var visibility = true;
var onVisibilityToggle = function onVisibilityToggle() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onVisibilityToggle },
            visibility ? "Hide details" : "Show Details"
        ),
        visibility ? React.createElement(
            "p",
            null,
            "These are details you can see"
        ) : React.createElement("p", null)
    );
    ReactDOM.render(template, appRoot);
};

render();
