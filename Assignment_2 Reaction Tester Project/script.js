let start;

function move() {
  const left = Math.random() *  300;
  const top = Math.random() * 300;
  const size = Math.random() * 400 + 100;

  const shape = document.getElementById("shape");
  shape.style.left = `${left}px`;
  shape.style.top = `${top}px`;
  shape.style.width = `${size}px`;
  shape.style.height = `${size}px`;
  shape.style.backgroundColor = getRandomColor();
  shape.style.display = "block";

  start = new Date().getTime();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("shape").onclick = function () {
  const shape = document.getElementById("shape");
  shape.style.display = "none";

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;
  alert(`Time taken: ${timeTaken}s`);

  setTimeout(move, Math.random() * 2000); 
};

move(); 