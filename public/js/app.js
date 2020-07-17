console.log("hello")

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })



const weatherFrom = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message_1');
const messageTwo = document.querySelector('#message_2');

weatherFrom.addEventListener('submit',(e)=>{
    e.preventDefault();
    const locaton = search.value

    messageOne.textContent = "Loading......";
    messageTwo.textContent = ""
    
    fetch('http://localhost:3000/weather?address=' + locaton).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }else{

            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
        
    })
})
})