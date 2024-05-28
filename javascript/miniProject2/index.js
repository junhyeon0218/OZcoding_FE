let name1 = document.querySelector("h1");
let animal = document.querySelector(".animal");
let fruit = document.querySelector(".fruit");

name1.textContent = `${prompt("이름을 적어주세요")}님 안녕하세요`;
animal.textContent = `${prompt(
  "좋아하는 동물을 적어주세요"
)}가(이) 좋으시군요!`;
fruit.textContent = `${prompt("어떤 과일을 좋아하시나요")}을(를) 좋아하시네요!`;
