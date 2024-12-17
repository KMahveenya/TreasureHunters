'use strict'


let letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П'];
let div = document.querySelector('#tables');
let sel = document.querySelector('select');
let kost = true;

sel.addEventListener('change', function(){
    div.innerHTML = '';
    let table1 = document.createElement('table');
    let table2 = document.createElement('table');
    for (let i = 0; i < Number(sel.value) + 1; i++)
    {
        let tr = document.createElement('tr');
        for (let k = 0; k < Number(sel.value) + 1; k++)
        {
            let td = document.createElement('td');
            if (k == 0)
            {
                td.classList.add('nl_left');
            }
            if (i == 0)
            {
                td.classList.add('nl_top');
                if (k != 0)
                {
                    td.textContent = letters[k - 1];
                }
            }
            else if (k != 0)
            {
                td.classList.add('cell');
            }
            if (i == 1 && k != 0)
            {
                td.classList.add('top');
            }
            if (i != 0 && k == 0)
            {
                td.textContent = i;
            }
            else if (i != 0 && k == 1)
            {
                td.classList.add('left');
            }
            else if (i != 0 && k == Number(sel.value))
            {
                td.classList.add('right');
            }
            if (i == Number(sel.value) && k != 0)
            {
                td.classList.add('bottom');
            }
            tr.appendChild(td);
        }
        table1.appendChild(tr);
    }

    for (let i = 0; i < Number(sel.value) + 1; i++)
    {
        let tr = document.createElement('tr');
        for (let k = 0; k < Number(sel.value) + 1; k++)
        {
            let td = document.createElement('td');
            if (k == 0)
            {
                td.classList.add('nl_left');
            }
            if (i == 0)
            {
                td.classList.add('nl_top');
                if (k != 0)
                {
                    td.textContent = letters[k - 1];
                }
            }
            else if (k != 0)
            {
                td.classList.add('cell');
            }
            if (i != 0 && k == 0)
            {
                td.textContent = i;
            }
            tr.appendChild(td);
        }
        table2.appendChild(tr);
    }
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    div1.classList.add('fon');
    div2.classList.add('fon');
    div1.appendChild(table1);
    div2.appendChild(table2);
    div.appendChild(div1);
    div.appendChild(div2);
   
    let table3 = document.querySelector('#extra');
    for (let i = 0; i < 20; i++)
    {
        let tr = document.createElement('tr');
        for (let k = 0; k < 30; k++)
        {
            let td = document.createElement('td');
            td.classList.add('cell');
            tr.appendChild(td);
        }
        table3.appendChild(tr);
    }
    let tds = document.querySelectorAll('.cell');
    for (let td of tds)
    {
        td.addEventListener('click', function(){
            let elem = document.querySelector('.active');
            if (elem && elem != td)
            {
                elem.classList.remove('active');
            }
            td.classList.toggle('active');
        })
    }


    function yama(i, str)
    {
        let elem = document.querySelector('.active');
        if (elem.textContent == '')
            elem.textContent = i;
        else if (elem.textContent == i)
            elem.textContent = str;
        else
            elem.textContent = '';
    }
    
    function border(str)
    {
        let elem = document.querySelector('.active');
        if (elem)
        {
            if (!elem.classList.contains(str) && !elem.classList.contains(str + '2'))
            {
                elem.classList.add(str);
            }
            else if (elem.classList.contains(str))
            {
                elem.classList.remove(str);
                elem.classList.add(str + '2');
            }
            else
            {
                elem.classList.remove(str + '2');
            }
        }
    }
    
    function right(str)
    {
        let elem = document.querySelector('.' + str);
        if (elem)
        {
            let i = 0;
            let index;
            for (let td of tds)
            {
                if (elem === td)
                {
                    index = i;
                    break;
                }
                i++;
            }
            elem.classList.remove(str);
            let color;
            if (str == 'now')
            {
                for (let cls of elem.classList)
                {
                    if (cls[0] == 'c' && cls[1] == 'o' && cls[2] == 'l')
                    {
                        color = cls;
                    }
                }
                elem.classList.remove(String(color));
            }
            if (index < (Number(sel.value) ** 2) * 2)
            {
                if (index % Number(sel.value) != Number(sel.value) - 1)
                {
                    let newElem = elem.nextElementSibling;
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
                else
                {
                    let newElem = tds[index - Number(sel.value) + 1];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
            }
            else
            {
                index -= (Number(sel.value) ** 2) * 2;
                if (index % 30 != 29)
                {
                    let newElem = elem.nextElementSibling;
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
                else
                {
                    let newElem = tds[index - 29 + (Number(sel.value) ** 2) * 2];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
            }
        }
    }
    
    function left(str)
    {
        let elem = document.querySelector('.' + str);
        if (elem)
        {
            let i = 0;
            let index;
            for (let td of tds)
            {
                if (elem === td)
                {
                    index = i;
                    break;
                }
                i++;
            }
            elem.classList.remove(str);
            let color;
            if (str == 'now')
            {
                for (let cls of elem.classList)
                {
                    if (cls[0] == 'c' && cls[1] == 'o' && cls[2] == 'l')
                    {
                        color = cls;
                    }
                }
                elem.classList.remove(String(color));
            }
            if (index < (Number(sel.value) ** 2) * 2)
            {
                if (index % Number(sel.value) != 0)
                {
                    let newElem = elem.previousElementSibling;
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
                else
                {
                    let newElem = tds[index + Number(sel.value) - 1];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
            }
            else
            {
                index -= (Number(sel.value) ** 2) * 2;
                if (index % 30 != 0)
                {
                    let newElem = elem.previousElementSibling;
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
                else
                {
                    let newElem = tds[index + 29 + ((Number(sel.value) ** 2) * 2)];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
            }
        }
    }
    
    function up(str)
    {
        let elem = document.querySelector('.' + str);
        if (elem)
        {
            let i = 0;
            let index;
            for (let td of tds)
            {
                if (elem === td)
                {
                    index = i;
                    break;
                }
                i++;
            }
            elem.classList.remove(str);
            let color;
            if (str == 'now')
            {
                for (let cls of elem.classList)
                {
                    if (cls[0] == 'c' && cls[1] == 'o' && cls[2] == 'l')
                    {
                        color = cls;
                    }
                }
                elem.classList.remove(String(color));
            }
            if (index < (Number(sel.value) ** 2) * 2)
            {
                let num = String(index);
                if ((index >= Number(sel.value) && index < (Number(sel.value) ** 2)) || (index >= (Number(sel.value) ** 2) + Number(sel.value)))
                {
                    let newElem = tds[index - Number(sel.value)];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
                else
                {
                    let newElem = tds[index + (Number(sel.value) ** 2) - Number(sel.value)];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
            }
            else
            {
                if (index >= (Number(sel.value) ** 2) * 2 && index < ((Number(sel.value) ** 2) * 2) + 30)
                {
                    let newElem = tds[index + 570];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
                else
                {
                    let newElem = tds[index - 30];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
            }
        }
    }
    
    function bottom(str)
    {
        let elem = document.querySelector('.' + str);
        if (elem)
        {
            let i = 0;
            let index;
            for (let td of tds)
            {
                if (elem === td)
                {
                    index = i;
                    break;
                }
                i++;
            }
            elem.classList.remove(str);
            let color;
            if (str == 'now')
            {
                for (let cls of elem.classList)
                {
                    if (cls[0] == 'c' && cls[1] == 'o' && cls[2] == 'l')
                    {
                        color = cls;
                    }
                }
                elem.classList.remove(String(color));
            }
            if (index < (Number(sel.value) ** 2) * 2)
            {
                let num = String(index);
                if ((index >= 0 && index < (Number(sel.value) ** 2) - Number(sel.value)) || (index > (Number(sel.value) ** 2) - 1 && index < ((Number(sel.value) ** 2) - Number(sel.value)) + (Number(sel.value) ** 2)))
                {
                    let newElem = tds[index + Number(sel.value)];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
                else
                {
                    let newElem = tds[index - (Number(sel.value) ** 2) + Number(sel.value)];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
            }
            else
            {
                if (index > 569 + ((Number(sel.value) ** 2) * 2))
                {
                    let newElem = tds[index - 570];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
                else
                {
                    let newElem = tds[index + 30];
                    newElem.classList.add(str);
                    if (str == 'now')
                    {
                        newElem.classList.add(color);
                    }
                }
            }
        }
    }
    

    function call(event)
    {
        if (event.key == 'd')
        {
            right('active');
        }
        else if (event.key == 'a')
        {
            left('active');
        }
        else if (event.key == 's')
        {
            bottom('active');
        }
        else if (event.key == 'w')
        {
            up('active');
        }
        else if (event.key == 'D')
        {
            right('now');
            if (kost)
            {
                let now = document.getElementById('now');
                if (!now.classList.contains('have'))
                {
                    now.remove();
                }
                let now2 = document.getElementById('now2');
                if (!now2.classList.contains('have'))
                {
                    now2.remove();
                }
                let now3 = document.getElementById('now3');
                if (!now3.classList.contains('have'))
                {
                    now3.remove();
                }
                let now4 = document.getElementById('now4');
                if (!now4.classList.contains('have'))
                {
                    now4.remove();
                }
                let now5 = document.getElementById('now5');
                if (!now5.classList.contains('have'))
                {
                    now5.remove();
                }
                kost = false;
            }
        }
        else if (event.key == 'A')
        {
            left('now');
            if (kost)
            {
                let now = document.getElementById('now');
                if (!now.classList.contains('have'))
                {
                    now.remove();
                }
                let now2 = document.getElementById('now2');
                if (!now2.classList.contains('have'))
                {
                    now2.remove();
                }
                let now3 = document.getElementById('now3');
                if (!now3.classList.contains('have'))
                {
                    now3.remove();
                }
                let now4 = document.getElementById('now4');
                if (!now4.classList.contains('have'))
                {
                    now4.remove();
                }
                let now5 = document.getElementById('now5');
                if (!now5.classList.contains('have'))
                {
                    now5.remove();
                }
                kost = false;
            }
        }
        else if (event.key == 'S')
        {
            bottom('now');
            if (kost)
            {
                let now = document.getElementById('now');
                if (!now.classList.contains('have'))
                {
                    now.remove();
                }
                let now2 = document.getElementById('now2');
                if (!now2.classList.contains('have'))
                {
                    now2.remove();
                }
                let now3 = document.getElementById('now3');
                if (!now3.classList.contains('have'))
                {
                    now3.remove();
                }
                let now4 = document.getElementById('now4');
                if (!now4.classList.contains('have'))
                {
                    now4.remove();
                }
                let now5 = document.getElementById('now5');
                if (!now5.classList.contains('have'))
                {
                    now5.remove();
                }
                kost = false;
            }
        }
        else if (event.key == 'W')
        {
            up('now');
            if (kost)
            {
                let now = document.getElementById('now');
                if (!now.classList.contains('have'))
                {
                    now.remove();
                }
                let now2 = document.getElementById('now2');
                if (!now2.classList.contains('have'))
                {
                    now2.remove();
                }
                let now3 = document.getElementById('now3');
                if (!now3.classList.contains('have'))
                {
                    now3.remove();
                }
                let now4 = document.getElementById('now4');
                if (!now4.classList.contains('have'))
                {
                    now4.remove();
                }
                let now5 = document.getElementById('now5');
                if (!now5.classList.contains('have'))
                {
                    now5.remove();
                }
                kost = false;
            }
        }
        else if (event.key == 'ArrowUp')
        {
            border('top');
        }
        else if (event.key == 'ArrowDown')
        {
            border('bottom');
        }
        else if (event.key == 'ArrowRight')
        {
            border('right');
        }
        else if (event.key == 'ArrowLeft')
        {
            border('left');
        }
        else if (event.key == 1)
        {
            yama('1', 'I')
        }
        else if (event.key == 2)
        {
            yama('2', 'II')
        }
        else if (event.key == 3)
        {
            yama('3', 'III')
        }
        else if (event.key == 4)
        {
            yama('4', 'IV')
        }
        else if (event.key == 5)
        {
            yama('5', 'V')
        }
        else if (event.key == 6)
        {
            yama('6', 'VI')
        }
        else if (event.key == 7)
        {
            yama('7', 'VII')
        }
        else if (event.key == 8)
        {
            yama('8', 'VIII')
        }
        else if (event.key == 9)
        {
            yama('9', 'IX')
        }
        else if (event.key == 'Tab')
        {
            let now = document.querySelector('.now');
            let now2 = document.querySelector('.now2');
            let now3 = document.querySelector('.now3');
            let now4 = document.querySelector('.now4');
            let now5 = document.querySelector('.now5');
            if (now && now2 && now3 && now4 && now5)
            {
                now.classList.remove('now');
                now2.classList.remove('now2');
                now3.classList.remove('now3');
                now4.classList.remove('now4');
                now5.classList.remove('now5');
                now.classList.add('now5');
                now2.classList.add('now');
                now3.classList.add('now2');
                now4.classList.add('now3');
                now5.classList.add('now4');
            }
            else if (now && now2 && now3 && now4)
            {
                now.classList.remove('now');
                now2.classList.remove('now2');
                now3.classList.remove('now3');
                now4.classList.remove('now4');
                now.classList.add('now4');
                now2.classList.add('now');
                now3.classList.add('now2');
                now4.classList.add('now3');
            }
            else if (now && now2 && now3)
            {
                now.classList.remove('now');
                now2.classList.remove('now2');
                now3.classList.remove('now3');
                now.classList.add('now3');
                now2.classList.add('now');
                now3.classList.add('now2');
            } else if (now && now2)
            {
                now.classList.remove('now');
                now2.classList.remove('now2');
                now.classList.add('now2');
                now2.classList.add('now');
            }
        }
    };

    addEventListener('keydown', call);
    let selToRem = document.querySelector('main div.box');
    selToRem.remove();

    let buttons = document.querySelectorAll('.vis');
    for (let elem of buttons)
    {
        elem.classList.remove('vis');
    }
})


let clear = document.getElementById('clear');

clear.addEventListener('click', function(){
    let table = document.getElementById('extra');
    let trs = table.querySelectorAll('tr');
    for (let tr of trs)
    {
        let tds = tr.querySelectorAll('td');
        for (let td of tds)
        {
            td.removeAttribute('class');
        }
    }
})