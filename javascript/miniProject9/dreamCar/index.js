/* -----------------------------------------------------------------------------*/
// <요구사항> - console.log()로 결과를 확인하면서 진행해주세요.
// 1. 본인의 드림카 정보를 담은 객체를 생성해야 합니다.
// 2. 정보는 brand, model, year 3가지로 작성합니다.
// 3. 객체리터럴 방식, 생성자 함수 방식을 모두 사용하여 생성해야 합니다.
// 4. 대괄호 연산자와 마침표 연산자를 사용하여 객체에 접근할 수 있어야 합니다.
// 5. myDreamCar 메소드는 콘솔창에 `제 드림카는 year년식 brand 회사의 model입니다.` 형식으로 출력되도록 작성해주세요.
// 6. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/

// 1. 객체리터럴 방식으로 dreamCar 객체를 생성해주세요ㅣ
const dreamCar = {
  brand: "제네시스",
  model: "GV80",
  year: "2024",
};

// 2. 마침표 연산자(dot notation)를 사용하여 dreamCar의 model 값을 출력하세요.
console.log(dreamCar.model);

// 3. 대괄호 연산자(bracket notation)를 사용하여 dreamCar의 brand 값을 출력하세요.
console.log(dreamCar.brand);

// 4. 1번에서 생성한 객체를 생성자 함수를 사용하여 생성하세요.
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  // 5.myDreamCar 메소드를 추가해주세요.
  this.myDreamCar = () => {
    console.log(
      `제 드림카는 ${this.year}년식 ${this.brand}회사의 ${this.model}입니다.`
    );
  };
}

// 6. 생성자 함수로 객체 생성

const dreamCar1 = new Car("제네시스", "GV80", "2024");

// 마침표 연산자로 메소드 호출하기
dreamCar1.myDreamCar();
