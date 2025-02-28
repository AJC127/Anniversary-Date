document.addEventListener("DOMContentLoaded", function () {
    // Function to navigate to the next page
    function nextPage(pageId) {
        document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
        document.getElementById(pageId).classList.remove("hidden");

        // Store selected dinner option if it's being clicked
        if (pageId === "agenda") {
            const selectedDinner = localStorage.getItem("dinnerChoice");
            if (selectedDinner) {
                document.getElementById("final-destination").innerText = selectedDinner;
            }
        }
    }

    // Function to make the puppy image shake when "No" is clicked
    function showSadPuppy() {
        const puppyImg = document.getElementById("puppy-img");
        puppyImg.classList.add("shake");
        setTimeout(() => {
            puppyImg.classList.remove("shake");
        }, 500);
    }

    // Store dinner selection
    document.querySelectorAll(".dinner-option").forEach(button => {
        button.addEventListener("click", function () {
            localStorage.setItem("dinnerChoice", this.dataset.choice);
            nextPage("agenda");
        });
    });

    // Attach event listeners to buttons
    document.querySelectorAll("[data-next]").forEach(button => {
        button.addEventListener("click", function () {
            nextPage(this.dataset.next);
        });
    });
});
