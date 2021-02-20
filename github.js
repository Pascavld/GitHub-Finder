// Client secret - 8e158935a9a7b2b42231d2e252db236a251e05d6
// Create the Github class
class Github {
    constructor() {
        this.client_id = "161d84d603d27e401f88";
        this.client_secret = "8e158935a9a7b2b42231d2e252db236a251e05d6";

        // Add repos count and sort which I'll add to the repoResponse
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    // Create getUser function and use the fetch(that long url with the keys) to get the profile response and return the profile
    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        // Create the Repo Response variable
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos,
        };
    }
}
