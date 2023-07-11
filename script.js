<script>
// Q1. 1~100까지 랜덤한 숫자 (정수)를 반환하는 변수 randomNumber 를 선언하고 초기화하세요. hint : Math.random()
let randomNumber = Math.floor(Math.random() * 100) + 1;
​
// Q2. DOM 요소 5가지를 선택해서 변수로 선언해주세요.
// guesses, lastResult, lowOrHi, guessSubmit, guessField
​
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
​
// Q3. 변수 2가지를 선언(let)해주세요. guessCount 초기값 1, restButton 선언만.
let guessCount = 1;
let resetButton;
​
// 올바른 번호인지 확인하는 함수를 만들기 checkGuess
function checkGuess(event) {
  // 기본값 막기
  // event.preventDefault(event);
  // Q4. 사용자가 추측한 번호를 알아내는 변수 userGuess
  const userGuess = Number(guessField.value);
  // 제약사항 1. 숫자로만 받기 1~100
​
  // 올바른 경우:
  if (randomNumber === userGuess) {
    // 축하 메시지를 표시합니다.
    lastResult.textContent = '축하합니다! 맞추셨어요!';
    // 플레이어가 더 많은 추측을 입력할 수 없도록 합니다(이렇게 하면 게임이 엉망이 됩니다).
    // 게임이 끝나는 로직
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '게임 오버! 10회를 모두 사용하셨습니다.';
    setGameOver();
  } else {
    // 플레이어에게 자신이 틀렸으며 추측이 너무 높거나 낮은지 알려줍니다.
    // 유저가 추측한 것이 우리의 랜덤 숫자보다 낮을 때
    lastResult.textContent = '틀렸어요!';
    if (randomNumber > userGuess) {
      // p태그 lowOrHigh의 텍스트컨텐츠에 높고 낮음을 말해준다.
      lowOrHi.textContent = '추측한 숫자보다 높습니다.';
      // 유저가 추측한 것이 우리의 랜덤 숫자보다 높을 때
    } else if (randomNumber < userGuess) {
      lowOrHi.textContent = '추측한 숫자보다 낮습니다.';
    }
  }
  // guessCount를 1 증가해줍니다
  // guessCount = guessCount + 1;
  // guessCount += 1;
  guessCount++;
}
​
function setGameOver() {
  // 추측창을 사용할 수 없게
  guessField.disabled = true;
  guessSubmit.disabled = true;
​
  // q1. 버튼 태그인 리셋버튼을 DOM요소로 생성해주세요.
  resetButton = document.createElement('button');
  // q2. 생성한 DOM요소의 텍스트 컨텐츠를 을 "새 게임하기"로 변경합니다.
  resetButton.textContent = '새 게임하기';
  // q3. 만든 DOM 버튼을 body태그 안에 추가합니다.
  document.body.appendChild(resetButton);
  // q4. resetButton 을 'click'했을 때 새 게임이 되게하는 리스너를 추가해주세요. 새 게임함수의 이름은 resetGame
  resetButton.addEventListener('click', resetGame);
}
​
function resetGame() {
  // 초기화
  guessCount = 1;
  guessField.disabled = false;
  guessSubmit.disabled = false;
  resetButton.parentNode.removeChild(resetButton);
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessField.value = '';
  lowOrHi.textContent = '';
  lastResult.textContent = '';
}
​
// 이벤트 리스너 만들기 click 했을 때 checkGuess 함수를 실행하는 리스너 추가
guessSubmit.addEventListener('click', checkGuess);
</script>