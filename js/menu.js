let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.Menu3d li a');
let navLinksMobi = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('.Menu3d li a[href*=' + id + ']').classList.add('active');
            });
            navLinksMobi.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

let front = document.getElementById('front')
let full = document.getElementById('full')
let todos = document.getElementById('todos')
let projetosFront = document.querySelector('.front-end')
let projetosFull = document.querySelector('.full-stacks')

todos.addEventListener('click', ()=>{
    projetosFront.classList.add('ativo')
    projetosFull.classList.add('ativo')
    todos.style.color = '#1E90FF'
    todos.style.borderBottom = '1px solid #1E90FF'
    full.style.color = '#ffffff'
    full.style.borderBottom = 'none'
    front.style.color = '#ffffff'
    front.style.borderBottom = 'none'
    front.classList.remove('ativo')
})

front.addEventListener('click', ()=>{
    projetosFront.classList.add('ativo')
    projetosFull.classList.remove('ativo')
    front.style.color = '#1E90FF'
    front.style.borderBottom = '1px solid #1E90FF'
    full.style.color = '#ffffff'
    full.style.borderBottom = 'none'
    todos.style.color = '#ffffff'
    todos.style.borderBottom = 'none'
    front.classList.remove('ativo')
})

full.addEventListener('click', ()=>{
    projetosFront.classList.remove('ativo')
    projetosFull.classList.add('ativo')
    full.style.color = '#1E90FF'
    full.style.borderBottom = '1px solid #1E90FF'
    front.style.color = '#ffffff'
    front.style.borderBottom = 'none'
    todos.style.color = '#ffffff'
    todos.style.borderBottom = 'none'
    front.classList.remove('ativo')
})
