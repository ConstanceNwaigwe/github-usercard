/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'

const results = axios.get("https://api.github.com/users/ConstanceNwaigwe");

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
console.log(results);
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function myfunction(singleobj){
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.src = singleobj.avatar_url;
  card.appendChild(img);

  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);

  let name1 = document.createElement("h3");
  name1.classList.add("name");
  name1.textContent = singleobj.name;
  cardInfo.appendChild(name1);

  let username1 = document.createElement("p");
  username1.classList.add("username");
  username1.textContent = singleobj.login;
  cardInfo.appendChild(username1);

  let locations = document.createElement("p");
  locations.textContent = singleobj.location;
  cardInfo.appendChild(locations);

  let profile = document.createElement("p");
  let a = document.createElement("a");
  a.href = singleobj.repos_url;
  a.textContent = singleobj.repos_url;
  profile.textContent = "Profile" + a;
  cardInfo.appendChild(profile);

  let follower = document.createElement("p");
  follower.textContent = singleobj.followers;
  cardInfo.appendChild(follower);

  let followings = document.createElement("p");
  followings.textContent = singleobj.following;
  cardInfo.appendChild(followings);

  let bios = document.createElement("p");
  bios.textContent = singleobj.bio;
  cardInfo.appendChild(bios);

  return card;

}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
