
const questionSet = [
  {
    question: "와인 매장에 오니, 궁금한 와인을\n찾았어요. 이때 내 행동은?",
    answerA: "점원한테 직접 물어볼거예요.",
    answerB: "어플을 켜서 와인명을 검색해 볼 거예요."
  },
  {
    question: "마음에 드는 와인을 샀어요.\n다음 목적지는 어디일까요?",
    answerA: "화려한 파티로 이동해요.",
    answerB: "가까운 친구 집에 놀러 가요."
  },
  {
    question: "파티에 도착했더니 모르는 사람들이\n많아요. 이때 내 반응은?",
    answerA: "먼저 가서 인사하고 이야기해요.",
    answerB: "아는 사람들이 있는 곳을 찾아요."
  },
  {
    question: "둘러보니 안주랑 와인이 많이\n준비되어 있네요. 이때 내 행동은?",
    answerA: "모르는 와인, 안주에 도전해 볼 거예요.",
    answerB: "더 이상 안 마시고 이야기만 할 거예요."
  },
  {
    question: "벌써 와인 한 병을 다 마셨네요!\n이때 내 상태는?",
    answerA: "헤롱헤롱 기분이 좋은 상태로 집에 가요.",
    answerB: "멀쩡한 상태로 한 병을 더 마실까 고민해요."
  },
  {
    question: "친구 집에 도착했어요.\n이때 가장 먼저 하는 행동은?",
    answerA: "가볍게 와인부터 마셔요.",
    answerB: "같이 먹을 음식부터 준비해요."
  },
  {
    question: "벌써 와인 한 병을 다 마셨네요!\n이때 내 상태는?",
    answerA: "헤롱헤롱 기분이 좋은 상태로 집에 가요.",
    answerB: "멀쩡한 상태로 한 병을 더 마실까 고민해요."
  },
  {
    question: "취한 친구가 아까부터 똑같은 이야기를\n반복하고 있어요. 이때 내 반응은?",
    answerA: "'술 좀 깨게 찬물 좀 마셔'라고 말해요.",
    answerB: "'그랬구나.. 응응' 하고 공감해 줘요."
  }
]

let $containerTag = document.querySelector(".survey");
const loadQuestion = () => {
  for (var i=0; i < 6; i++) {
    $containerTag.children[i].style.width = $containerTag.offsetWidth + "px";
    $containerTag.children[i].style.display = "inline-block";
  }

  $containerTag.style.width = ($containerTag.offsetWidth * 6) + "px";
  $containerTag.style.left = "0px";
  $containerTag.style.fontSize = 0;
}

window.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
})

const slideQuestion = () => {
  $containerTag.style.transition = "0.5s ease-out";
  $containerTag.style.left = (parseInt($containerTag.style.left) 
            - ($containerTag.offsetWidth / 6)) + "px";
}

const paintButton = (button) => {
  button.style.backgroundColor = "#000000";
  button.style.color = "#FFFFFF";
}

let typeNum = 0;
const answers = [];
const buttons = document.querySelectorAll(".survey-answer");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (modalState) {return}

    paintButton(button);
    answers.push(button.classList[1]);

    if (answers.length === 3) {
      if (answers[2] === "B") {
        typeNum = 3;
      }
    }

    if (answers.length === 6) {
      console.log(answers)
      if (typeNum) {  // 친구 집
        if (answers[5] === "A") {
          localStorage.wineType = 0
        } else if (answers[4] === "A") {
          localStorage.wineType = 1
        } else if (answers[4] === "B") {
          localStorage.wineType = 2
        }
      } else {  // 파티
        if (answers[3] === "A" && answers[5] === "A") {
          localStorage.wineType = 5
        } else if (answers[3] === "A" && answers[5] === "B") {
          localStorage.wineType = 4
        } else if (answers[3] === "B" && answers[4] === "A") {
          localStorage.wineType = 3
        } else {
          localStorage.wineType = 2
        }
      }
      window.location.href = "/result.html?type=" + localStorage.wineType

      return
    }
    
    nextEl = button.parentElement.nextElementSibling;
    nextNum = nextEl.dataset.id - 2 + typeNum;
    nextText = questionSet[nextNum];
    
    nextEl.children[1].innerText = nextText.question;
    nextEl.children[2].innerText = nextText.answerA;
    nextEl.children[3].innerText = nextText.answerB;

    setTimeout(function () {
      slideQuestion();
    }, 120);
  })
})


const modal = document.querySelector(".modal");
let modalState = false;

window.addEventListener("click", function (event) {
  clickElement = event.target.className;

  if (modalState) {
    if (clickElement == "modal_yes_button") {
      window.location.href = "/index.html";
    }
    if (event.target.dataset.name != "modal") {
      modal.style.display = "none";
      modalState = false;
    }
  } else if (clickElement == "img-back-arrow") {
    modal.style.display = "block";
    modalState = true;

    modal.style.top = `${window.innerHeight/2 - modal.offsetHeight/2 + window.scrollY}px`;
    modal.style.left = `${window.innerWidth/2 - modal.offsetWidth/2 + window.scrollX}px`;
  }
})
