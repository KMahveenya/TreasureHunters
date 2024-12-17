let elements = document.querySelectorAll('.elementTypeInt');

for (let element of elements)
{
    let plus = element.querySelector('button.plus');
    let minus = element.querySelector('button.minus');
    let p = minus.nextElementSibling;

    minus.addEventListener('click', function(){
        let num = parseInt(p.textContent);
        if (num != 0)
        {
            num--;
        }
        p.textContent = num;
    })
    plus.addEventListener('click', function(){
        let num = parseInt(p.textContent);
        num++;
        p.textContent = num;
    })
}