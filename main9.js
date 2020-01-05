//1.

<
!DOCTYPE html >
    <
    html >

    <
    head >
    <
    title > Example2 FullStack 21.12 < /title> < /
    head >

    <
    body >
    <
    a id = 'a'
title = ''
href = "https://github.com/" > github < /a> <
a id = 'b'
title = ''
href = "https://www.olx.ua/" > olx < /a> <
a id = 'c'
title = ''
href = "https://www.iaai.com/ru-ru/AdvancedSearch" > iaai < /a>


<
script src = "main.js" > < /script> < /
    body >

    <
    /html>

let link1 = document.getElementById('a')
let link2 = document.getElementById('b')
let link3 = document.getElementById('c')
link1.onmousemove = (event) => {
    link1.title = '1'
}
link2.onmousemove = (event) => {
    link2.title = '2'
}
link3.onmousemove = (event) => {
    link3.title = '3'
}

//2.+5.

<
!DOCTYPE html >
    <
    html >

    <
    head >
    <
    title > Example2 FullStack 21.12 < /title> < /
    head >

    <
    body >
    <
    a id = 'a'
title = ''
href = "https://www.google.com" > github < /a> <
a id = 'b'
title = ''
href = "https://www.google.com" > olx < /a> <
a id = 'c'
title = ''
href = "https://www.google.com" > iaai < /a> <
a id = 'd'
title = ''
href = "https://www.google.com" > copart < /a> <
a id = 'e'
title = ''
href = "https://www.google.com" > carfax < /a>


<
script src = "main.js" > < /script> < /
    body >

    <
    /html>

let link1 = document.getElementById('a')
let link2 = document.getElementById('b')
let link3 = document.getElementById('c')
let link4 = document.getElementById('d')
let link5 = document.getElementById('e')

link1.onclick = (event) => {
    link1.insertAdjacentText('beforeend', `(${link1.href})`)
}
link2.onclick = (event) => {
    link2.insertAdjacentText('beforeend', `(${link2.href})`)
}
link3.onclick = (event) => {
    link3.insertAdjacentText('beforeend', `(${link3.href})`)
}
link4.onclick = (event) => {
    link4.insertAdjacentText('beforeend', `(${link4.href})`)
}
link5.onclick = (event) => {
    link5.insertAdjacentText('beforeend', `(${link5.href})`)
}


//3.

let link1 = document.getElementById('a')
let link2 = document.getElementById('b')
let link3 = document.getElementById('c')
let link4 = document.getElementById('d')
let link5 = document.getElementById('e')

link1.onclick = (event) => {
    link1.insertAdjacentText('beforeend', `(${link1.href})`)
    return false
}
link2.onclick = (event) => {
    link2.insertAdjacentText('beforeend', `(${link2.href})`)
    return false
}
link3.onclick = (event) => {
    link3.insertAdjacentText('beforeend', `(${link3.href})`)
    return false
}
link4.onclick = (event) => {
    link4.insertAdjacentText('beforeend', `(${link4.href})`)
    return false
}
link5.onclick = (event) => {
    link5.insertAdjacentText('beforeend', `(${link5.href})`)
    return false
}

link1.addEventListener('click', function(evt) {
    if (evt.detail === 3) {
        link1.textContent = 'github';
    }
});
link2.addEventListener('click', function(evt) {
    if (evt.detail === 3) {
        link2.textContent = 'olx';
    }
});
link3.addEventListener('click', function(evt) {
    if (evt.detail === 3) {
        link3.textContent = 'iaai';
    }
});
link4.addEventListener('click', function(evt) {
    if (evt.detail === 3) {
        link4.textContent = 'copart';
    }
});
link5.addEventListener('click', function(evt) {
    if (evt.detail === 3) {
        link5.textContent = 'carfax';
    }
});

//4.

<
!DOCTYPE html >
    <
    html >

    <
    head >
    <
    title > Example FullStack < /title> < /
    head >

    <
    body >
    <
    div > 1 < /div> <
div > 2 < /div> <
div > 3 < /div> <
div > 4 < /div> <
div > 5 < /div> <
div > 6 < /div> <
div > 7 < /div> <
div > 8 < /div> <
div > 9 < /div> <
div > 10 < /div> <
div > 11 < /div> <
div > 12 < /div> <
div > 13 < /div> <
div > 14 < /div> <
div > 15 < /div> <
div > 16 < /div> <
div > 17 < /div> <
div > 18 < /div> <
div > 19 < /div> <
div > 20 < /div>

<
script src = "main.js" > < /script> < /
    body >

    <
    /html>

let element1 = document.getElementsByTagName('div')[0]
let element2 = document.getElementsByTagName('div')[1]
let element3 = document.getElementsByTagName('div')[2]
let element4 = document.getElementsByTagName('div')[3]
let element5 = document.getElementsByTagName('div')[4]
let element6 = document.getElementsByTagName('div')[5]
let element7 = document.getElementsByTagName('div')[6]
let element8 = document.getElementsByTagName('div')[7]
let element9 = document.getElementsByTagName('div')[8]
let element10 = document.getElementsByTagName('div')[9]
let element11 = document.getElementsByTagName('div')[10]
let element12 = document.getElementsByTagName('div')[11]
let element13 = document.getElementsByTagName('div')[12]
let element14 = document.getElementsByTagName('div')[13]
let element15 = document.getElementsByTagName('div')[14]
let element16 = document.getElementsByTagName('div')[15]
let element17 = document.getElementsByTagName('div')[16]
let element18 = document.getElementsByTagName('div')[17]
let element19 = document.getElementsByTagName('div')[18]
let element20 = document.getElementsByTagName('div')[19]
element1.onclick = () => {
    element1.textContent = Math.pow(element1.textContent, 2)
}
element2.onclick = () => {
    element2.textContent = Math.pow(element2.textContent, 2)
}
element3.onclick = () => {
    element3.textContent = Math.pow(element3.textContent, 2)
}
element4.onclick = () => {
    element4.textContent = Math.pow(element4.textContent, 2)
}
element5.onclick = () => {
    element5.textContent = Math.pow(element5.textContent, 2)
}
element6.onclick = () => {
    element6.textContent = Math.pow(element6.textContent, 2)
}
element7.onclick = () => {
    element7.textContent = Math.pow(element7.textContent, 2)
}
element8.onclick = () => {
    element8.textContent = Math.pow(element8.textContent, 2)
}
element9.onclick = () => {
    element9.textContent = Math.pow(element9.textContent, 2)
}
element10.onclick = () => {
    element10.textContent = Math.pow(element10.textContent, 2)
}
element11.onclick = () => {
    element11.textContent = Math.pow(element11.textContent, 2)
}
element12.onclick = () => {
    element12.textContent = Math.pow(element12.textContent, 2)
}
element13.onclick = () => {
    element13.textContent = Math.pow(element13.textContent, 2)
}
element14.onclick = () => {
    element14.textContent = Math.pow(element14.textContent, 2)
}
element15.onclick = () => {
    element15.textContent = Math.pow(element15.textContent, 2)
}
element16.onclick = () => {
    element16.textContent = Math.pow(element16.textContent, 2)
}
element17.onclick = () => {
    element17.textContent = Math.pow(element17.textContent, 2)
}
element18.onclick = () => {
    element18.textContent = Math.pow(element18.textContent, 2)
}
element19.onclick = () => {
    element19.textContent = Math.pow(element19.textContent, 2)
}
element20.onclick = () => {
    element20.textContent = Math.pow(element20.textContent, 2)
}

//6.


let element = document.getElementById('btn')
element.onclick = () => {
    alert('Hey')
}

//7.

let element = document.getElementById('btn')
element.onclick = () => {
    element.style.color = 'red'
    element.textContent = 'Кирпич'
}

//8.

let myInput = document.getElementById('text')
myInput.oninput = () => {
    if (!isNaN(myInput.value)) {
        return myInput.style.color = 'green'
    }
    myInput.style.color = 'red'
}

//9.

let element = document.getElementById('myunique')
element.onclick = () => {
    element.classList.add("www.")
}

//10.

let element = document.getElementById('myunique')
element.onclick = () => {
    element.classList.remove("www.")
}

//11.

let id = document.getElementById('myunique')
id.onclick = () => {
    if (id.classList.contains('www')) {
        id.classList.remove('www')
    } else {
        id.classList.add('www')
    }
}

//12.

let element = document.getElementById('myunique')

element.onclick = () => {
    console.log(element.classList.length)
    element.innerText = `${element.classList.length}`
}

//13.

let element1 = document.getElementsByClassName('www1')[0]
let element2 = document.getElementsByClassName('www2')[0]
let element3 = document.getElementsByClassName('www3')[0]

element1.onclick = (event) => {
    element1.insertAdjacentText('beforeend', `${element1.className}`)
}
element2.onclick = (event) => {
    element2.insertAdjacentText('beforeend', `${element2.className}`)
}
element3.onclick = (event) => {
    element3.insertAdjacentText('beforeend', `${element3.className}`)
}

//14.

let element = document.getElementById('el')

let lastLi = element.lastElementChild
element.onclick = () => {
    lastLi.remove()
}

//15.

let element = document.getElementById('el')
let firstLi = element.firstElementChild
let secondLi = firstLi.nextElementSibling
let lastLi = element.lastElementChild
lastLi.onclick = () => {
    lastLi.remove()
}

firstLi.onclick = () => {
    lastLi.remove()
}

secondLi.onclick = () => {
    lastLi.remove()
}


//16. 

let myInput1 = document.getElementsByClassName('in')[0]
let btn = document.getElementById('btn')
let mainDiv = document.getElementById('main')

btn.onclick = () => {
    let myInput2 = myInput1.cloneNode(true)
    main.append(myInput2)
}

//17.

document.body.style.height = '2000px'

document.body.onclick = () => {
    window.scrollTo({
        top: 2000,
        behavior: "smooth"
    });
}

//18.
element = document.getElementById('myunique')
element.style.width = '100px';
element.style.height = '100px';
element.style.fontSize = '20px';

element.onclick = () => {
    element.style.width = '200px';
    element.style.height = '200px';
    element.style.fontSize = '40px';
    element.style.transition = '0.3s'
}