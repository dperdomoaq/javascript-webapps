const hole = document.querySelector('#hole');
const nova = document.querySelector('#nova');
const supe = document.querySelector('#supe');

hole.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.add('redshift');
   // change text
   //divp.textContent = text2;
};
hole.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.remove('redshift');
   // change text back
   //divp.textContent = text1;
};

supe.style.display = 'none';

nova.onclick = () => {
    if(supe.style.display === 'none'){
        supe.style.display = 'block'; 
    } else {
        supe.style.display = 'none';
    }
}