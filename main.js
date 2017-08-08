const containerList = document.querySelector("ul")

let request = new XMLHttpRequest();
request.addEventListener("load", cristian);
request.open('GET', 'https://api.github.com/users/cr1stian');
request.send();

function cristian(){

  let data = JSON.parse(this.responseText);
  let list = '';

  list = `<li>${data.name}</li>
          <li>${data.url}</li>
          <li>${data.bio}</li>
          <li>${data.company}</li>
          <li>${data.location}</li>
  `;

  containerList.innerHTML = list;
}
