let counter = 0;

const para = document.createElement('p');
para.textContent = `Counter : ${counter}`;

const button = document.createElement('button');
button.textContent = 'increment';

const parent = document.getElementById('root');
parent.append(para, button);

button.addEventListener('click', () => {
    counter++;
    para.textContent = `Counter : ${counter}`;
    console.log(counter);
})