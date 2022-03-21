let grid = document.getElementById('grid');

for (let i = 1; i <= 100; i++) {
  // document.getElementById('grid').innerHTML += <div id="box${i}" class="box"></div>;
  let box = document.createElement('div');
  box.innerHTML += box.innerHTML += `<div>${i}</div>`;
  box.classList.add('box');
  grid.appendChild(box);


  box.addEventListener('click', function () {
    console.log(this);
    // this.classList.add('clicked');
    console.log(this.innerHTML);
    let numero = this.innerHTML;

    if (numero % 2 === 0) {
      box.classList.add('boxLightBlue');
    } else {
      box.classList.add('boxLightBlue');
    }

  });

}

