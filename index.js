const API_KEY = "43132236-79366def8c3717e7f2673ddae";
let currentPage = 1;
const url = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo/posts?_limit=20&_page=${currentPage}`;
const btnEl = document.querySelector(".download__more");
const listEl = document.querySelector(".img-list");

function fetchUrl(url) {
    const data = fetch(url);
    return data;
};

function getPost() {
    fetchUrl(url)
        .then(data =>
            data.json()
        ).then(data =>
            // console.log(data),
            createEl(data)
        );
};
getPost();

function loadPost() {
    getPost();
};

function createEl(data) {
    data.hits.map((el) => {
        listEl.insertAdjacentHTML(
            "beforeend",
            `<li class="item-img">
                 <img src="${el.previewURL}" alt="img-flawer">
                 <p class="text-img">tags: ${el.tags}</p>
                 <p class="text-img">id: ${el.id}</p>
            </li>`
        );
    });
};

btnEl.addEventListener("click", () => {
    currentPage++;
    loadPost();
    // saveProgres(loadPost);
});

// function saveProgres(loadPost) {
//     localStorage.setItem("img-list", JSON.stringify(loadPost()));
//     console.log("yes");
// };

// const localStorageKey = "userImg";

// function getFromLocalStorage() {
//     const dataLocalStorage = localStorage.getItem(localStorageKey);
//     console.log(dataLocalStorage)
//     // listEl.innerHTML = JSON.parse(dataLocalStorage);

// };

// getFromLocalStorage();

