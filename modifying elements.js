const photos = document.querySelector('#image');
function change() {
    // photos.setAttribute('src', 'https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090=');
    const url = prompt("enter your image");
    photos.setAttribute('src', url);
}

const buuton = document.querySelector('#myButton');
buuton.textContent = "new image";

const image = document.querySelector('#myImage');
image.setAttribute('src', 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D');

image.width = 300;

const input = document.querySelector('#input');
input.setAttribute('placeholder', 'full-Name');

input.setAttribute('type', 'text');
// input.width = 500;