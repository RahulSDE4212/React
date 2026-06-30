// const element = (<h1 id="first"> Hello coder army </h1>);

// const element2 = (
//     <div>
//         <h1>Hello</h1>
//         <h2>Hi</h2>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element2);



function Header({name}){
    return (
        <h1>Welcome {name}</h1>
    )
}

function Main({age}){
    return (
        <h2>Your age is {age}</h2>
    )
}

function Footer({salary}){
    return (
        <h3>Your salary is {salary}</h3>
    )
}


function App(){
    return (
    <>
        <Header name={"rahul"}/>
        <Main age={30}/>
        <Footer salary={20000}/>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)