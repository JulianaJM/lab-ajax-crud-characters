const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then((response)=>{console.log(response.data)});
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(id).then((response)=>{console.log(response.data)});
    
  }
  
  document.getElementById('delete-one').onclick = function() {
    const id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(id)
    .then((response)=>{
      console.log(response.data)
      document.getElementById("delete-one").style.background='green';
    })
    .catch(()=>{document.getElementById("delete-one").style.background='red';})     
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    const character={};
    const formTab = document.forms["new-character-form"].getElementsByTagName("input");
    character.name=formTab[0].value;
    character.occupation=formTab[1].value;
    character.weapon=formTab[2].value;
    character.isCartoon=formTab[3].checked;
    // console.log(character)
    charactersAPI.createOneRegister(character);
  }
})
