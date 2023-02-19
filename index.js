const API = "https://api.github.com";
const form = document.querySelector(".form")
const cardPublish = document.querySelector(".publish-container")
const message = "404 (Not Found)"
const controller = action => fetch(action)
    .then(data => data.json())
    //.catch(error => document.write(error.message))

form.addEventListener("submit", e => {
    e.preventDefault()

    function getUser() {
        const inputValue = document.getElementById("username").value;
        console.log(inputValue)
        controller(`${API}/users/${inputValue}`)
            .then(data => showUser(data))
            .catch(error => alert(error.message))
    }

    getUser()
})

// функция первая буква заглавная
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function showUser(user) {
    // создаем елементы
    const userName = document.createElement("h3");
    const userAvatar = document.createElement("img");
    const userPublic = document.createElement("p");
    const userFollowers = document.createElement("p")
    const userFollowing = document.createElement("p")

    userName.classList.add("userName");
    userAvatar.classList.add("userAvatar")
    userPublic.classList.add("userPublic")
    userFollowers.classList.add("userFollowers")
    userFollowing.classList.add("userFollowing")

    userName.innerText =`Username - ${user.login}`
    userAvatar.src =`${user.avatar_url}`
    userPublic.innerText = `Number of publications - ${user.public_repos}`
    userFollowers.innerText = `Followers - ${user.followers}`
    userFollowing.innerText = `Following - ${user.following}`

    cardPublish.append(userName)
    cardPublish.append(userAvatar)
    cardPublish.append(userPublic)
    cardPublish.append(userFollowers)
    cardPublish.append(userFollowing)
}



