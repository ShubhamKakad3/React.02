//  this is a component's function's inner html element that , how the react converts it into tree/js or how react sees to it by creating an object
// TREE
const reactElement = {
  // THIS IS A CONVERTED HTML WHICH WE RETURNS IN COMPONET'S FUNCTION AND JS CONERTS IT LIKE THIS OBJECT TREE
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google | shubham k ",
};

// ELEMENT CREATED
// function customRender(reactElement, container) {                 // THIS IS A CUSTOM RENDER AND  THIS FUNCTION IS CREATING A NEW ELEMENT AND APPENDING IT TO PAGE
//   const domElement = document.createElement(reactElement.type);  // THIS reactElement.type  is equal to 'a' which is a anchor tag as a new element to be created
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("target", reactElement.props.target);
//   container.appendChild(domElement);}

// THIS FUNCTION IS SAME AS ABOVE ONLY USED WITH LOOP - JUST SYNTAX DIFFERENCE
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    // for in loop used
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
