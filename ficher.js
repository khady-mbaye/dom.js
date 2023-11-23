//document.getElementById()
const a = document.getElementById('dem1')
/*Après avoir sélectionné un élément, vous pouvez ajouter des styles à l'élément , manipuler ses attributs et parcourir les éléments parents et enfants .*/

//getElementsByName()
const b = document.getElementsByName("animal");
console.log('le nombre d\'element portant le meme name ' + b.length)

//getElementsByTagName
const c = document.getElementsByTagName('h4')
console.log('notre page compte ' + c.length + " titre de niveau 4")

//querySelector()
document.querySelector('h6').style.color = 'green'
document.querySelector('.demo33').style.color = 'yellow'
document.querySelector('#demo3').style.color = 'red'

//si on utiliser querySelector uniquement fama ne sera pas selectionner
const d = document.querySelectorAll(".demo4");
for (let i = 0; i < d.length; i++) {
  d[i].style.backgroundColor = "blue";
}

//Récupère l'élément parent parentNode
let note = document.querySelector('.note')
console.log('l\'element parent est ' + " " + note.parentNode);

//nextElementSibling 
//en changant next par previous on aura l'element avant 
let current = document.querySelector('.bana');
let prevSiblings = current.nextElementSibling
prevSiblings.style.color = 'blue'

//obtenir l'element enfant
//on remplace first par last si on veut acceder au dernier element et on met children uniquement si on veut acceder a tout les elements
let content = document.querySelector('.menu')
content.firstElementChild.style.color = 'blue'

//createElement
let newli = document.createElement('li');
newli.textContent = 'CSS';
newli.style.color = 'blue'
const menu22 = document.querySelector('.menu2');
menu22.appendChild(newli);

//paragraphe cree avec creatElement
let div = document.querySelector('.test');
let p = document.createElement('p');
p.textContent = 'paragraphe cree avec creatElement';
p.style.color = 'blue'
div.appendChild(p);
//paragraphe cree avec innerHTML
let div0 = document.querySelector('.test');
div0.innerHTML += '<p>paragraphe cree avec innerHTML</p>';
div0.style.color = 'blue'

//inserer un element avant ou apres un element precit
let avant = document.createElement('li')
avant.innerText = 'HTML'
avant.style.color = 'blue'
let center1 = document.querySelector('.milieu')
center1.before(avant)

let apres = document.createElement('li')
apres.innerText = 'BOOTSTRAP'
apres.style.color = 'blue'
let center2 = document.querySelector('.milieu')
center2.after(apres)
