fetch("components/footer.html")
.then(res => res.text())
.then(data => {

    const footer = document.createElement("div");
    footer.innerHTML = data;
    document.body.appendChild(footer);

})
.catch(err => console.log("Footer load error:", err));
