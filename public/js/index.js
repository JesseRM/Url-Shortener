const button = document.querySelector("#submiturl");
const urlInput = document.querySelector("#urlinput");
const shortUrlContainer = document.querySelector("#")

button.addEventListener("click", (e) => {
    fetch(window.location.href + '/' + urlInput.value, {
        method: 'POST'
    }).then((response) => {
            shortUrlContainer.textContent = response;
        });
});