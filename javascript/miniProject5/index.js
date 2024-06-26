// 몬스터 잡기 게임

// 공격하기 데미지는 랜덤(10 ~ 30), 누를때마다 랜덤한 데미지 -> 공격 버튼 클릭시 랜덤 데미지 생성

// 공격하기 누르면 보스몬스터 체력 - 데미지

// 보스몹 체력은 처음에 나옴

// 초기 몬스터 체력 생성
let bossHp = Math.floor(Math.random() * 51) + 250;
const attackRecord = document.querySelector(".log");
const boss = document.querySelector("h2");
const attackBtn = document.querySelector(".attack");
const autoAttackBtn = document.querySelector(".auto");

// 공격 함수
function attack() {
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
  }
}

// 5회 공격 함수
function autoAttack() {
  let attacksLeft = 5;

  function performAttack() {
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
      return; // 5회 공격 중에 보스를 처치했을 경우 함수 종료
    }

    attacksLeft--;

    if (attacksLeft > 0) {
      setTimeout(performAttack, 500); // 0.5초 후 다음 공격 실행
    }
  }

  performAttack(); // 최초 공격 실행
}

function resetGame() {
  // Reset boss health
  bossHp = Math.floor(Math.random() * 51) + 250;
  document.querySelector("h2").textContent = `몬스터 체력: ${bossHp}`;

  // Clear attack records
  attackRecord.innerHTML = "";
}

autoAttackBtn.addEventListener("click", autoAttack);
attackBtn.addEventListener("click", attack);
boss.textContent = `몬스터 체력: ${bossHp}`;
