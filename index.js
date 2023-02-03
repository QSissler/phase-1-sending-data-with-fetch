
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
    })
})
.then(function(response){
    return response.json();
})
.then(function(object){
    let user = document.createElement("p")
    user.textContent = `${object.id}`;
    document.body.appendChild(user)
})
.catch(function(error){
    console.log(error.message)
    let errorMessage = document.createElement("p")
    errorMessage.textContent = `${error.message}`;
    document.body.appendChild(errorMessage)

    // function (error){
                // const errorMessage = document.createElement('p');
                // errorMessage.textContent = `${error.message}`
                // document.querySelector('body').appendChild(errorMessage)
})
}

// function submitData(userName, userEmail) {
//     return fetch('http://localhost:3000/users',{
//     method : 'POST',
//     headers: {
//         "Content-Type" : "application/json",
//         "Accept" : "application/json",
//     },
//     body: JSON.stringify({
//         'name' : userName,
//         'email' : userEmail,
//     }),
// })
//     .then(res => res.json())
//     .then(renderUser)
//     .catch(function (error){
//         const errorMessage = document.createElement('p');
//         errorMessage.textContent = `${error.message}`
//         document.querySelector('body').appendChild(errorMessage)
// })
// }

// function renderUser(userObj){
//     const user = document.createElement('p');
//     user.textContent = `${userObj.id}`;
//     document.querySelector('body').appendChild(user);
// }













// fetch('http://localhost:3000/users', submitData)
// .then(res => res.json())
// .then(function(obj){
//     console.log(obj)
// })
// .catch(function(error) {
//     alert("This is broken");
//     console.log(error.message)
// })






// const formData = {
//     dogName: "Lamby",
//     dogBreed: "Black Lab",
// 

// const configureationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({formData})
// }

// fetch('http://localhost:3000/dogs', configureationObject)
// .then(function (res){
//     return res.json();
// })
// .then(function (obj){
//     console.log(obj);
// })
// .catch(function (error){
//     alert("Bad things! Ragnarok!");
//     console.log(error.message);
// })
