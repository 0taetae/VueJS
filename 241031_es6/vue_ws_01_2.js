// 1 소개해보기

// 각 변수에 맞는 키워드를 작성하고 Template Literal을 이용하여 작성해보시오.

// 1. ES6 Template Literal
var name = "Kim";
var birthday = "2000.01.01";
var job = "Student";

var info = `내 이름은 ${name}이고, ${birthday}에 태어났습니다. 제 직업은 ${job}입니다.`;
console.log(info)

// 2. 객체가 주어졌을 때 Object Destructuring Assignment를 활용
const myCar = {
  title:"기생충",
  director:"봉준호",
  genre:"드라마",
  runningTime: 132,
};

{
  const { title, director, genre, runningTime } = myCar;
  console.log(title);
  console.log(director);
  console.log(genre);
  console.log(runningTime);
}


// 3. 반복문을 통해 영화 배열을 출력
const Movies = ["기생충", "이터널스", "킹스맨", "스파이더맨", "해리포터"];
for (let movie of Movies) {
  console.log(movie);
}

// 4. 인자로 숫자 1개를 받아 세제곱을 반환하는 함수를 작성하고 이를 화살표 함수로 바꾸어 작성
function cube1(x) {
  return x ** 3;
}
console.log(cube1(3))
// 화살표 함수
const cube2 = (x) => x ** 3;
console.log(cube2(3))

// Array Helper Methods 중 map 메서드를 이용하여 임의의 정수를 가진 요소를 2배씩 하여 새로운 배열 생성
const num = [1, 2, 3, 4, 5];
const double = num.map(num => num * 2);
console.log(double);

