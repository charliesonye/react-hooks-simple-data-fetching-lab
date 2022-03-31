import {useState, useEffect} from "react";


function App(){
    const[dogPic, setDogPic] = useState(null)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=> res.json())
        .then(data=> {
            setDogPic(data.message)
        })

    },
    [])

    return(
        !dogPic ? <p> Loading ...</p>: <img src={dogPic} alt="A Random Dog"/>
    )
}


export default App;
