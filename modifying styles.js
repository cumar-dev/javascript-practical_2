function change() {
    const photos = document.querySelector('#image');
    photos.setAttribute('src', 'https://images.unsplash.com/photo-1720884413532-59289875c3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D');
    photos.width = 300;
    photos.style.border = '2px solid red';
    photos.style.borderRadius = '8px';
    photos.style.cursor = 'pointer';
    photos.style.padding = '10px';
}

function update() {
    const header = document.querySelector('#header');
    const text = document.querySelector('.text');

    header.style.backgroundColor = 'skyblue';
    header.style.padding = '20px';
    header.style.textAlign = 'center';

    text.style.padding = '10px';
    text.style.border = '2px solid red';
    text.style.padding = '20px';
    text.style.fontSize = '20px';
    text.style.borderRadius = '10px';

}