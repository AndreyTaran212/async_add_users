'use strict';


/*function loadUser(resolve, reject) {
    const request = new XMLHttpRequest();


    request.onload = function () {
       const user = JSON.parse(request.responseText);
        resolve(user)
    };

    request.onerror = function () {
        reject(new Error(`${this.status}: ${this.statusText}`))
    };

    request.open('GET', "./user.json");
    request.send();

}



new Promise(loadUser)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });*/


fetch('./user.json')
    .then(response => response.json())
    .then(appendUsersToList)
    .catch(console.error);


function appendUsersToList(users) {
    const usersList = document.getElementById('usersList');
    users.forEach((user) => {
        const usersListItem = document.createElement('li');
        usersListItem.classList.add('userListItem');
        usersListItem.setAttribute('id', `${user.id}`);
        usersListItem.appendChild(createUserCardContainer(user));
        usersListItem.appendChild(addUserName(user));
        usersList.append(usersListItem);
    });

}

function createUserCardContainer(user) {
    const userCardWrapper = document.createElement('div');
    userCardWrapper.classList.add('profilePictureContainer');
    userCardWrapper.appendChild(createUserImage(user));
    return userCardWrapper;
}

function createUserImage(user) {
    const addUserPicture = document.createElement('img');
    addUserPicture.setAttribute('src', user.profilePictureSrc);
    addUserPicture.setAttribute('alt', 'user picture');
    return addUserPicture;
}

function addUserName(user) {
    const userName = document.createElement('h3');
    userName.innerText = `${user.name} ${user.surname}`;
    return userName;
}


























