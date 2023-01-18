const today = new Date()
const thisYear = today.getFullYear()

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.textContent = 'Svetlana ' + thisYear;
footer.appendChild(copyright);

const skills = ["Windows", "HTML", "CSS", "JS", "Git Hub", "VS Code"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('[name="leave_message"]');


messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(name);
    console.log(email);
    console.log(message);

    messageSection = document.querySelector("#messages");
    messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span> </a>`;
    messageList.appendChild(newMessage);
    removeButton = document.createElement('button')
    removeButton.innerText = `Remove`;
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener('click', (event) => {
        entry = removeButton.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
})


var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/SvetlanaBeynik/repos", true);
githubRequest.send();
githubRequest.onload = function () {
    let repositories = JSON.parse(githubRequest.response);
    console.log(repositories);

    projectSection = document.querySelector("#projects");
    projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement('li');
        project.innerText = repositories[i]['name'];
        projectList.appendChild(project);
    }
};

