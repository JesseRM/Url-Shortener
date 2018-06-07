const button = document.querySelector("#submiturl");
const urlInput = document.querySelector("#urlinput");
const shortUrlContainer = document.querySelector("#output");

button.addEventListener("click", (e) => {
    fetch(window.location.href + urlInput.value, {
        method: 'POST'
    }).then((response) => {
        console.log(response);
        shortUrlContainer.textContent = response;
        });
});