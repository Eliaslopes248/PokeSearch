

let search_history = []
//let ability_list = []

const input = document.getElementById("pokemon-name-input")
const search_button = document.getElementById('Search')

async function get_obj(name){

    const Pokemon_name = name

    try {

        const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon_name}`)

        if(!reponse.ok){
            console.log('Cannot find pokemon :(')
        } const data = await reponse.json()
        //confirmation
        console.log('pokemon found!')

        // declare attributes
        const data_name = data.name 
        search_history.push(data_name) // addiding name for history list


        const data_weight = data.weight
        const data_abilities = data.abilities
        const data_type = data.types
        const data_height = data.height

        console.log(data)

        let name_div = document.getElementById('name') // text div
           name_div.textContent = `Name: ${data_name}` // assign value from data
        
           let type_div = document.getElementById('type')
            
            for(let i = 0; i < data_type.length ; i++){
                let type = data_type[i].type.name
                type_div.textContent = `Type: ${type}`
            }

        let weight_div = document.getElementById('weight')
            weight_div.textContent = `Weight: ${data_weight}lbs`
        
            let height_div = document.getElementById('height')
            height_div.textContent = `Height: ${data_height}"ft`
        
        // declare image angles
  
        let angles_list = []

        let Front_dault_angles = document.createElement("img")  // front default angle
        Front_dault_angles.classList.add("img-angles")
        Front_dault_angles.src = data.sprites.front_default // getting url src
        angles_list.push(Front_dault_angles) // add to list

        let img_con = document.getElementById('img-con')


        if(angles_list.length > 0){

            if(!img_con.hasChildNodes){
                img_con.appendChild(angles_list[0])
            } 

            img_con.appendChild(angles_list[0])
        }

        let angle_2 = document.createElement('img')
        angle_2.classList.add("img-angles")
        angle_2.src = data.sprites.back_default

        let angle2_con = document.getElementById("angle2")
        angle2_con.appendChild(angle_2)
        // declare abilities and storage for abilities
    
        let ability_list = []

        for(let i = 0; i < data_abilities.length; i++){
            //console.log(data_abilities[i].ability.name)
            ability_list.push(data_abilities[i].ability.name)
            console.log(ability_list)
        }
        console.log(ability_list)

/*
        for(let i = 0 ;i < ability_list.length ;i++){

            //test
            console.log(ability_list[i])

            //access container
            let ability_con = document.getElementById('mini-con')

            //create ability div
            let ability_div = document.createElement('div')
                ability_div.classList.add('ability-div')
                ability_div.textContent = ability_list[i]

                ability_con.appendChild(ability_div)
                
       } */

        //access container
        let ability_con = document.getElementById('mini-con')
        ability_con.innerHTML = ''

    ability_list.forEach(ability =>{
        //test
        console.log(ability)

        //create ability div
        let ability_div = document.createElement('div')
            ability_div.classList.add('ability-div')
            ability_div.textContent = ability

            ability_con.appendChild(ability_div)

       })

        
    } catch (error) {
        console.log(error)
    }

}

search_button.addEventListener('click', ()=>{
   

    let img_con = document.getElementById('img-con')

    if(img_con.hasChildNodes){
        img_con.innerHTML = ''
    }

    let angle2_con = document.getElementById("angle2")
    if(angle2_con.hasChildNodes){
        angle2_con.innerHTML = ''
    }

    get_obj(input.value)

   


})



let clear_button = document.getElementById('clear')

clear_button.addEventListener('click',()=>{
    input.value = ''
})