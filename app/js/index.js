// const userData = [
//   {
//     id: 01,
//     Name: "Prasanna Indrajith",
//     userName: "prasannaindra",
//     verified: false,
//     image: {
//       src: "../../picture/dp.png",
//       dataStory: false,
//     },
//   },
// ];
let suggestedAccBlock = document.querySelectorAll(".suggested-acc-block");
// document.getElementById("suggested-acc-block").innerHTML;

class User {
  constructor(id, name, verified, src, story) {
    this.id = id;
    this.name = name;
    name = name.toLowerCase();
    this.userName = name.replaceAll(" ", "");
    this.verified = verified;
    this.src = src;
    this.story = story;
  }
}

var user1 = new User(01, "Gamer Girl", "none", "picture/dp.png", true);
var user2 = new User(02, "Noyam Jingo", "none", "picture/dp.png", true);
var user3 = new User(03, "Huwan Girl", "verified", "picture/dp.png", false);
var user4 = new User(04, "Rage NOma", "none", "picture/dp.png", true);

var users = [user1, user2, user3, user4];
let codeBlock = " ";

for (let i = 0; i < users.length; i++) {
  console.log(users[i].id);
  var user = users[i];
  let added = `
        <li>
            <a href="#">
            <div>
                <img
                src="${user.src}"
                class="profile-image"
                alt=""
                data-story="${user.story}"
                />
                <div>
                <h3 class="${user.verified}">${user.userName}</h3>
                <h5>${user.name}</h5>
                </div>
            </div>
            </a>
    </li>`;

  codeBlock += added;

  addCodeBlocktoSite(codeBlock, i);
}

function addCodeBlocktoSite(x, y) {
  if (x != "" && y == users.length - 1) {
    suggestedAccBlock[0].insertAdjacentHTML("beforeend", x);
    suggestedAccBlock[1].insertAdjacentHTML("beforeend", x);
  }
}

// if (suggestedAccBlock.children.length > 5) {

// }

function activeClassControll(e) {
  let currentLikeCount = parseInt(e.parentNode.children[1].innerText);

  e.classList.toggle("active");

  if (e.classList[2] == "active") {
    e.parentNode.children[1].innerText = currentLikeCount + 1;
  } else {
    e.parentNode.children[1].innerText = currentLikeCount - 1;
  }
}
