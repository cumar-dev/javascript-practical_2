function setDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
function setLightMode() {
    document.body.style.color  = 'black';
    document.body.style.backgroundColor = 'white';
}
const input = document.querySelector('#input');
function submit() {
    const data = document.createElement('input')
    data.setAttribute('type', 'Text');
    data.setAttribute('placeholder', 'Name');
    data.style.padding = ('20px');
    data.style.fontSize = ('20px');
    data.style.border = ('2px solid skyblue');
    data.style.borderRadius = ('20px');
    input.appendChild(data);
}

const text = document.querySelector('#text').onclick = function() {
    this.textContent = 'unfollow';
}

 let username;
document.getElementById("mySubmit").onclick = function(){
     username =  document.getElementById("username").value;
     document.querySelector('#h1').textContent = username;
    console.log(username);
}