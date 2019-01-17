class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    // Make a request for a user with a given ID
    return axios.get('http://localhost:8000/characters')
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });

  }

  getOneRegister (id) {
    return axios.get(`http://localhost:8000/characters/${id}`);
    // , {
    //   params: {
    //     ID: id
    //   }
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });

  }

  createOneRegister (character) {
    return axios.post('http://localhost:8000/characters',{
      name: character.name,
      occupation: character.occupation,
      weapon: character.weapon,
      cartoon: character.isCartoon
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  updateOneRegister () {

  //   axios.patch('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  // .then(function(response){
  //   console.log('saved successfully')
  // });  

  }

  deleteOneRegister (id) {
    return axios.delete(` http://localhost:8000/characters/${id}`)

  }
}
