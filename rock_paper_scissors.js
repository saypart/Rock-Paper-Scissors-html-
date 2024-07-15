// 1.사용자가 가위바위보를 클릭하면 게임이 시작된다.
// 2.사용자가 선택한 가위바위보 이미지를 보여준다.
// 3.컴퓨터가 가위바위보를 랜덤으로 선택한다.
// 4.컴퓨터가 선택한 가위바위보 이미지를 보여준다.
// 5.승패 여부를 구분하여 보여준다.

var user;
var com;

let userScore = 0;
let computerScore = 0;
let textcolor;

//#scissors
document.querySelector("#scissors").onclick = function () {
  user = "scissors";
  com = com_choice();
  playGame(user, com);
  result_Game(user, com);
};

//#rock
document.querySelector("#rock").onclick = function () {
  user = "rock";
  com = com_choice();
  playGame(user, com);
  result_Game(user, com);
};

document.querySelector("#paper").onclick = function () {
  user = "paper";
  com = com_choice();
  playGame(user, com);
  result_Game(user, com);
};

function com_choice() {
  const 가위바위보 = ["scissors", "rock", "paper"];
  com = 가위바위보[Math.floor(Math.random() * 가위바위보.length)];
  return com;
}

function result_Game(user, com) {
  let user_win1 = user === "scissors" && com === "paper";
  let user_win2 = user === "rock" && com === "scissors";
  let user_win3 = user === "paper" && com === "rock";

  //비겼을 경우
  if (user == com) {
    result_message = "비겼습니다.";
    textcolor = black;
    //이겼을 경우
  } else if (user_win1 || user_win2 || user_win3) {
    result_message = "이겼습니다.";
    userScore = userScore + 1;
    textcolor = "blue";
    //졌을 경우
  } else {
    result_message = "졌습니다.";
    computerScore = computerScore + 1;
    textcolor = "red";
  }
  //스코어 점수 변환
  document.querySelector(".score>:nth-child(1)").textContent = userScore;
  document.querySelector(".score>:nth-child(3)").textContent = computerScore;
  // 결과 메세지 변환
  document.querySelector(".result-message").textContent = result_message;
  document.querySelector(".result-message").style.color = textcolor;
}

function playGame(user, com) {
  let user_image = `<img src ='images/${user}.png' width=70 height=70>`;
  let com_imege = `<img src ='images/${com}.png' width=70 height=70>`;

  document.querySelector(".you>div:nth-child(2)").innerHTML = user_image;
  document.querySelector(".computer>div:nth-child(2)").innerHTML = com_imege;
}
