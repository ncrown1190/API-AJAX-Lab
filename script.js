// console.log("hi");

// document.querySelector("button").addEventListener("click", () => {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((response) => response.json())
//     .then((data) => {
//       //console.log(data.value);
//       console.log(data);
//       let p = document.createElement("p");
//       p.innerText = data.value;
//       document.body.appendChild(p);
//     });
// });

// document.querySelector("button").addEventListener("click", () => {
//   fetch("https://www.reddit.com/r/aww/.json")
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data.value);
//       let p = document.createElement("p");
//       p.innerText = data.value;
//       document.body.append(p);
//     });
// });
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://example.com", {
//   mode: "cors",
//   credentials: "include",
// });

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = document.querySelector("#subredditSubmit").value;
  fetch("https://www.reddit.com/r/" + userInput + "/.json")
    .then((response) => response.json())
    .then((data) => {
      let array = data.data.children;
      for (let i = 1; i < 10; i++) {
        let eachPost = document.createElement("div");
        let eachTitle = document.createElement("h2");
        let eachImage = document.createElement("img");
        let eachLink = document.createElement("a");
        eachPost.classList.add("center");
        eachTitle.innerText = array[i].data.title;
        eachPost.append(eachTitle);
        eachImage.setAttribute("src", array[i].data.thumbnail);
        eachPost.append(eachImage);
        eachLink.setAttribute("href", array[i].data.url);
        eachLink.innerText = "click here to see post!";
        eachPost.append(eachLink);
        document.body.append(eachPost);
      }
    });
});

//*************************************************** */

// fetch("https://www.reddit.com/r/aww/.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     let posts = data.data.children; //array of posts(26)
//     console.log({ posts });

//     posts.map((post) => {
//       // console.log(post);
//       // console.log(post.data.title);
//       let eachPost = document.createElement("div");
//       eachPost.classList.add("center");
//       eachPost.innerText = post.data.title;
//       document.body.append(eachPost);
//       //put image on page
//       let eachImage = document.createElement("img");
//       //console.log(post.data.thumbnail);
//       eachImage.src = post.data.thumbnail;
//       eachPost.append(eachImage);
//     });

//     // for (let i = 0; i < posts.length; i++) {
//     //   console.log(posts[i].data.title);
//     // }
//   })
//   .catch((err) => {
//     console.log("this is error.", err);
//   });

//************************************************* */
