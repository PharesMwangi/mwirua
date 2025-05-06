function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            let content = document.getElementById("content");
            content.innerHTML = ""; // Clear previous content

            // Create a back button
            let backButton = document.createElement("button");
            backButton.id = "backButton";
            backButton.innerHTML = "&#9776;"; // Hamburger menu (☰), change to "&#8942;" for ellipsis (⋮)
            backButton.classList.add("back-button");
            backButton.onclick = function () {
                location.reload(); // Reload to restore original view
            };

            // Append the back button and the loaded page content
            content.appendChild(backButton);
            
            let pageContent = document.createElement("div");
            pageContent.innerHTML = data;
            content.appendChild(pageContent);

            document.querySelector(".sidebar").style.display = "none"; // Hide sidebar
        })
        .catch(error => console.error("Error loading the page:", error));
}
