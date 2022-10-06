import './styles.css';
import { franc } from 'franc';
import langs from 'langs';

const textarea = document.querySelector('#textarea');
const btn = document.querySelector('button');
const result = document.querySelector('.result');
const err = document.querySelector('.err');

btn.addEventListener('click', () => {
  if(textarea.value !== '' && textarea.value.split(' ').length >= 5){
    err.style.display = 'none'
    let code = franc(textarea.value);
    if(code === 'arb'){code = 'ara'};
    const lang = langs.where("3", code);
    result.textContent = lang.name;
  }else{
    err.style.display = 'block';
    err.textContent = 'You must type at least 5 words';
  }
})