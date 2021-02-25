// Create the UI class
class UI {
    // get the profile section
    constructor() {
        this.profile = document.getElementById("profile");
    }

    // Display profile and UI
    showProfile(user) {
        // Add the HTML in the profile
        this.profile.innerHTML = `
            <div class = "card card-body mb-3">
                <div class = "row">
                    <div class = "col-md-3">
                        <img class = "img-fluid mb-2" src = "${user.avatar_url}">
                        <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class = "col-md-9">
                        <span class = "badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class = "badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class = "badge badge-success">Followers: ${user.followers}</span>
                        <span class = "badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class = "list-group">
                            <li class = "list-group-item">Company: ${user.company}</li>
                            <li class = "list-group-item">Website/Blog: ${user.blog}</li>
                            <li class = "list-group-item">Location: ${user.location}</li>
                            <li class = "list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class = "page-heading mb-3">Latest Repos</h3>
            <div id = "repos"></div>
        `;
    }

    // Create showRepos function
    showRepos(repos) {
        let output = "";

        repos.forEach(function (repo) {
            output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                </div>
              </div>
            </div>
          `;
        });

        // Output repos
        document.getElementById("repos").innerHTML = output;
    }

    // Create the showAlert function
    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert();

        const alertDiv = document.createElement("div");

        const nav = document.getElementById("nav");

        alertDiv.className = className;

        alertDiv.appendChild(document.createTextNode(message));

        nav.after(alertDiv);

        // Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Create the clearProfile function
    clearProfile() {
        this.profile.innerHTML = "";
    }
}
