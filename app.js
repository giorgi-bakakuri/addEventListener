


const form = document.querySelector('#form');
const input = document.querySelector('input[name="username"]');
const ul = document.querySelector('ul');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim()){
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        checkbox.addEventListener('change', (i) => {
            if(i.target.checked) { 
                span.classList.add('line');
            }else{
                span.classList.remove('line');
            }
        })
        const li = document.createElement('li');
        span.innerHTML = input.value;
        li.appendChild(checkbox);
        li.appendChild(span);
        ul.appendChild(li);
        input.value = '';
        li.focus();
    }
})