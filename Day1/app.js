// const React = {
//     createElement : function(type, props,children){
//         return {
//             type: type,
//             props: {
//                 ...props,
//                 children: children
//             }
//         }
//     }
// }

// const ReactDOM = {
//     render : function(reactElement, root){
//         root.innerHTML = '';

//         const element = document.createElement(reactElement.type);
        
//         const {props} = reactElement;

//         for(const key in props){
//             if(key === 'style'){
//                 Object.assign(element.style, props.style);
//             }
//             else if(key === 'children') element.textContent = props[key];
//             else element[key] = props[key];
//         }

//         root.append(element);
//     }
// }

const element1 = React.createElement(
    'h1', 
    {
        className : "element", 
        id : "first",
        style : {
            fontSize : "30px",
            backgroundColor: "orange",
            color: "white"
        },
    },
    "I am don"
);

const element2 = React.createElement(
    'h1', 
    {
        className : "element", 
        id : "secong",
        style : {
            fontSize : "30px",
            backgroundColor: "orange",
            color: "white"
        },
    },
    "I am cute"
);


// const root = document.getElementById('root');
// ReactDOM.render(element1, root);
// ReactDOM.render(element2, root);















const div = React.createElement('div', null, element1, element2)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);



// const element1 = document.createElement('h1');
// element1.textContent = "My name is rahul singh";
// element1.className = "element";
// element1.id = 'first';
// element1.style.fontSize ="30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";


// const element2 = document.createElement('h2');
// element2.textContent ="I am a very handsome boy";
// element2.style.backgroundColor = 'green';
// element2.style.className = "handsome";
// element2.style.id = "very handsome";
// element2.style.fontSize = "20px";
// element2.style.color = "white";

// const root = document.getElementById('root');
// root.append(element1);
// root.append(element2);
