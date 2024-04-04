// 몬스터 잡기 게임
// 몬스터 체력 랜덤 생성 (100 ~ 200) -> 처음에만 랜덤값 생성

// 공격하기 데미지는 랜덤(10 ~ 30), 누를때마다 랜덤한 데미지 -> 공격 버튼 클릭시 랜덤 데미지 생성

// 공격하기 누르면 보스몬스터 체력 - 데미지

// 보스몹 체력은 처음에 나옴

// 초기 몬스터 체력 생성
// 몬스터 잡기 게임
// 몬스터 체력 랜덤 생성 (100 ~ 200) -> 처음에만 랜덤값 생성

// 공격하기 데미지는 랜덤(10 ~ 30), 누를때마다 랜덤한 데미지 -> 공격 버튼 클릭시 랜덤 데미지 생성

// 공격하기 누르면 보스몬스터 체력 - 데미지

// 보스몹 체력은 처음에 나옴

let bossHp = Math.floor(Math.random() * 51) + 250;
const attackRecord = document.querySelector(".log");
const boss = document.querySelector("h2");
const attackBtn = document.querySelector(".attack");

// 공격 함수
function attack() {
  // 5번 연속으로 공격
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const attackDmg = Math.floor(Math.random() * 21) + 10;
      bossHp -= attackDmg;

      const attackInfo = document.createElement("p");
      attackInfo.textContent = `${attackDmg}데미지로 공격했습니다! ---- 현재 몬스터 체력: ${bossHp}`;
      attackRecord.appendChild(attackInfo);

      // 몬스터 체력이 0 이하가 되면 게임 종료
      if (bossHp <= 0) {
        document.querySelector("p").textContent = "";
        alert("축하합니다! 보스몬스터를 처치했습니다!");
        resetGame();
        return;
      }
    }, i * 1000); // 1초마다 공격
  }
}

function resetGame() {
  // 보스 체력 초기화
  bossHp = Math.floor(Math.random() * 51) + 250;
  boss.textContent = `몬스터 체력: ${bossHp}`;

  // 공격 기록 초기화
  attackRecord.innerHTML = "";
}

attackBtn.addEventListener("click", attack);
boss.textContent = `몬스터 체력: ${bossHp}`;
