
const button=document.querySelectorAll(`.button`)


const secondFunc= (event)=>{
    console.log(`second func for ${event.target.innerHTML}`)
    event.target.removeEventListener(`click`,secondFunc)
    event.target.addEventListener(`click`,lastFunc)
}

const lastFunc= (event)=>{
    console.log(`last func for ${event.target.innerHTML}`)

}
const firstFunc= (event)=> {
    console.log(`first func for ${event.target.innerHTML}`)
    event.target.removeEventListener(`click`,firstFunc)
    event.target.addEventListener(`click`,secondFunc)

}

button.forEach((el)=>{ return el. addEventListener(`click`, firstFunc)});





