const jokeEl=document.getElementById("joke");
const jokebtn=document.getElementById("jokebtn");
generateJoke();
jokebtn.addEventListener('click',()=>generateJoke())
// This made easy by using async ans await 
async function generateJoke(){
    const config={
                headers:{
                Accept:"application/json",
            }  
}
const res=await  fetch("https://icanhazdadjoke.com",config);
const data=await res.json();
jokeEl.innerHTML=data.joke;
}
// This way is complicated as to use then again and again
// function generateJoke(){
//     const config={
//         headers:{
//             Accept:"application/json",
//     }
// }
//     fetch("https://icanhazdadjoke.com",config)
//     .then((res)=>res.json())
//     .then((data)=>jokeEl.innerHTML=data.joke);
// }
