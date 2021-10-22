const socialMedia = {
    github : "gabrieldasneves"
}

function getGithubProfileInfos() {

    const url = `https://api.github.com/users/${socialMedia.github}`;

    fetch(url)
    .then( response => response.json() )
    .then( data => {
        userName.textContent = data.name;
        bio.textContent = data.bio;
    });
}

getGithubProfileInfos();