// FEATURES TO ADD

// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
    // Get input text

    setTimeout(() => {
        const userText = e.target.value;

        // Check if the input is not empty and get the users data using a promise
        if (userText !== "") {
            // Make http call
            github.getUser(userText).then((data) => {
                // Check for the message
                if (data.profile.message === "Not Found") {
                    // Show alert
                    ui.showAlert("User not found", "alert alert-danger");
                } else {
                    // Show profile with the argument of profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
        } else {
            // Clear profile
            ui.clearProfile();
        }
    }, 3000);
});

//haklsfhdaskflalgfa
//Pascavld
