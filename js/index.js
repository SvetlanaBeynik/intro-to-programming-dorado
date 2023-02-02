const today = new Date()
const thisYear = today.getFullYear()

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Svetlana Beinik ${thisYear}`
footer.appendChild(copyright);

const skills = ["Windows", "HTML", "CSS", "JS", "Git Hub", "VS Code"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.classList.add('tag')
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
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector('ul')

    if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block'
    }

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span> </a>`;
    messageList.appendChild(newMessage);
    removeButton = document.createElement('button');
    removeButton.innerText = `Remove`;
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("id", "remove");
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode;
        const list = entry.parentNode

        if (list.children.length <= 1) {
            messageSection.style.display = 'none'
        }

        entry.remove();
    })
    newMessage.appendChild(removeButton);
    event.target.reset();
})

fetch('https://api.github.com/users/SvetlanaBeynik/repos')
    .then(res => res.json())
    .then(function (data) {
        let repositories = data;
        console.log(repositories);

        projectSection = document.querySelector("#projects");
        projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            // project.innerText = repositories[i]['name'];
            project.innerHTML = `<a class="link link--no-decor" href="${repositories[i].html_url}">${repositories[i].name}</a>`
            projectList.appendChild(project);
        }
    })