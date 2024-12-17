'use strict'

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

let things = ['treasure', 'metka', 'kapkan', 'kost', 'arb', 'empty', 'rope', 'gren', 'arsenal', 'map', 'saw', 'torch', 'lamp', 'ques', 'nature', 'yama', 'gun', 'dagger', 'hosp', 'bandage', 'cartridges', 'compass', 'trace', 'brick', 'exit'];

function setItem(str)
{
    let itm = document.getElementById(str);

    itm.addEventListener('click', function(){
        let elem = document.querySelector('.active');
        if (elem)
        {
            for (let itm of things)
            {
                if (elem.classList.contains(itm) && itm != str)
                {
                    elem.classList.remove(itm);
                    break;
                }
            }
            elem.classList.toggle(str);
        }
    })
}

for (let i of things)
{
    setItem(i);
}

let now = document.querySelector('#now');
let now2 = document.querySelector('#now2');
let now3 = document.querySelector('#now3');
let now4 = document.querySelector('#now4');
let now5 = document.querySelector('#now5');

let mas = ['now', 'now2', 'now3', 'now4', 'now5'];
let i = 0;

now.addEventListener('click', function(){
    let old = document.querySelector('.color1');
    let elem = document.querySelector('.active');
    let first = mas[i];
    if (elem)
    {
        now.classList.add('have');
        if (old && old != elem)
        {
            if (old.classList.contains('now'))
            {
                first = 'now';
                old.classList.remove('now');
            }
            else if (old.classList.contains('now2'))
            {
                first = 'now2';
                old.classList.remove('now2');
            }
            else
            {
                first = 'now3';
                old.classList.remove('now3');
            }
            old.classList.remove('color1');
        }
        elem.classList.add(first);
        elem.classList.add('color1');
        i++;
    }
})
now2.addEventListener('click', function(){
    let old = document.querySelector('.color2');
    let elem = document.querySelector('.active');
    let first = mas[i];
    if (elem)
    {
        now2.classList.add('have');
        if (old && old != elem)
        {
            if (old.classList.contains('now'))
            {
                first = 'now';
                old.classList.remove('now');
            }
            else if (old.classList.contains('now2'))
            {
                first = 'now2';
                old.classList.remove('now2');
            }
            else
            {
                first = 'now3';
                old.classList.remove('now3');
            }
            old.classList.remove('color2');
        }
        elem.classList.add(first);
        elem.classList.add('color2');
        i++;
    }
})
now3.addEventListener('click', function(){
    let old = document.querySelector('.color3');
    let elem = document.querySelector('.active');
    let first = mas[i];
    if (elem)
    {
        now3.classList.add('have');
        if (old && old != elem)
        {
            if (old.classList.contains('now'))
            {
                first = 'now';
                old.classList.remove('now');
            }
            else if (old.classList.contains('now2'))
            {
                first = 'now2';
                old.classList.remove('now2');
            }
            else
            {
                first = 'now3';
                old.classList.remove('now3');
            }
            old.classList.remove('color3');
        }
        elem.classList.add(first);
        elem.classList.add('color3');
        i++;
    }
})
now4.addEventListener('click', function(){
    let old = document.querySelector('.color4');
    let elem = document.querySelector('.active');
    let first = mas[i];
    if (elem)
    {
        now4.classList.add('have');
        if (old && old != elem)
        {
            if (old.classList.contains('now'))
            {
                first = 'now';
                old.classList.remove('now');
            }
            else if (old.classList.contains('now2'))
            {
                first = 'now2';
                old.classList.remove('now2');
            }
            else if (old.classList.contains('now3'))
            {
                first = 'now3';
                old.classList.remove('now3');
            }
            else
            {
                first = 'now4';
                old.classList.remove('now4');
            }
            old.classList.remove('color4');
        }
        elem.classList.add(first);
        elem.classList.add('color4');
        i++;
    }
})
now5.addEventListener('click', function(){
    let old = document.querySelector('.color5');
    let elem = document.querySelector('.active');
    let first = mas[i];
    if (elem)
    {
        now5.classList.add('have');
        if (old && old != elem)
        {
            if (old.classList.contains('now'))
            {
                first = 'now';
                old.classList.remove('now');
            }
            else if (old.classList.contains('now2'))
            {
                first = 'now2';
                old.classList.remove('now2');
            }
            else if (old.classList.contains('now3'))
            {
                first = 'now3';
                old.classList.remove('now3');
            }
            else if (old.classList.contains('now4'))
            {
                first = 'now4';
                old.classList.remove('now4');
            }
            else
            {
                first = 'now5';
                old.classList.remove('now5');
            }
            old.classList.remove('color5');
        }
        elem.classList.add(first);
        elem.classList.add('color5');
        i++;
    }
})