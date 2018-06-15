const submitButton = document.querySelector("button[type=submit]");
const userUrlInput = document.querySelector("#urlinput");
const shortUrlContainer = document.querySelector("#output");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    fetch(window.location.href + userUrlInput.value, {
        method: 'POST'
    }).then((response) => {
        return response.text();
    }).then((shortUrl) => {
        shortUrlContainer.textContent = shortUrl;
    }); 
});