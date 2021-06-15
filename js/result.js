
const typeSet = [
  {
    text: "센치한 도도형 고양이",
    description: "친절한 편이지만 만만한 성격은 아닌 유형입니다. 평소에는 밝고 친절하나, 와인을 마시면 복잡한 내면을 드러내는 편이에요. 조용히 홀짝홀짝 마시는 스타일이죠. 시끄러운 분위기보다는 차분하고 밀도 높은 대화를 선호하기 때문에 여러 명보다는 한두 명 모이는 자리를 선호할 것 같아요.",
    textWine: "소비뇽 블랑",
    textType: "고독한 배려쟁이형",
    img: "img/type_cat.png",
    imgWine: "img/wine_white.png",
    imgType: "img/match_sloth.png"
  },
  {
    text: "고독한 배려쟁이형 나무늘보",
    description: "남들의 이야기에 귀를 기울여주는 배려심이 높은 유형입니다. 무난하게 주변 사람들과 잘 어울리며 친구들이 고민이 생겼을 때 찾는 1순위 친구인 것 같아요. 포커페이스에 약하고 공감 능력이 뛰어나 상대방으로부터 위로감을 느낄 수 있게 도와주네요.",
    textWine: "로제",
    textType: "센치한 도도형",
    img: "img/type_sloth.png",
    imgWine: "img/wine_red.png",
    imgType: "img/match_cat.png"
  },
  {
    text: "멀뚱멀뚱 무적형 토끼",
    description: "화기애애한 성격과 긍정적인 마인드를 갖고 있는 유형입니다. 남들이 취할 때도 멀쩡히 자신만의 노하우로 안 취해본 경험이 있지 않나요? 대체로는 분위기에 무난하게 적응하는 타입이에요. 사람들과 어울리는 것을 싫어하지는 않지만 가끔씩은 나만의 시간을 갖는 것도 중요하게 생각하는군요.",
    textWine: "샴페인",
    textType: "도전적 다다익선형",
    img: "img/type_rabbit.png",
    imgWine: "img/wine_sparkling.png",
    imgType: "img/match_hamster.png"
  },
  {
    text: "도전적 다다익선형 햄스터",
    description: "도전적이며 다양성을 추구하는 유형입니다. 쉽게 포기하지 않고 이것저것 시도해보는 도전정신은 와인의 세계에서도 발휘될 수 있겠네요. 남들보다 풍부한 경험을 갖고 있어, 지혜로운 조언이나 대화를 이끌어내기도 하겠어요. 여러 가지 매력을 갖고 있는 다다익선일 확률이 높아요.",
    textWine: "리즐링",
    textType: "멀뚱멀뚱 무적형",
    img: "img/type_hamster.png",
    imgWine: "img/wine_white.png",
    imgType: "img/match_rabbit.png"
  },
  {
    text: "모여모여 친목형 펭귄",
    description: "혼자 마시는 것보다 여러 명이 함께 마실 때 더 맛있다고 느끼는 당신은 화끈하지만 진득한 유형입니다. 눈치가 빠르고 스마트해서 사람들과 커뮤니케이션할 때도 큰 어려움이 없을 것 같네요. 분위기에 적응하기보다는, 대화를 이끌고 좋은 분위기를 만들어낼 것 같아요.",
    textWine: "까베르네 소비뇽",
    textType: "수다쟁이 댕댕이형",
    img: "img/type_penguin.png",
    imgWine: "img/wine_red.png",
    imgType: "img/match_dog.png"
  },
  {
    text: "수다쟁이 댕댕이형 강아지",
    description: "밝고 명랑한 성격을 가지고 있어 여러 사람들에게 사랑과 관심을 받는 유형입니다. 유쾌하고 재미있는 아이디어로 대화를 즐겁게 만들어주는 능력을 갖고 있네요. 파티를 좋아하는 당신은 와인 또한 특별하고 화려한 와인을 좋아할 확률이 높아요.",
    textWine: "샤르도네",
    textType: "모여모여 친목형",
    img: "img/type_dog.png",
    imgWine: "img/wine_white.png",
    imgType: "img/match_penguin.png"
  }
]

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const typeIdx = getParameterByName('type')? getParameterByName('type') : localStorage.wineType;
console.log(typeIdx);
const type = typeSet[typeIdx];

const loadResult = () => {
  document.querySelector(".container").dataset.id = type;

  document.querySelector(".img-type").src = 'https://anyl92.github.io/' + type.img;
  document.querySelector(".type-text").innerHTML = type.text;
  document.querySelector(".type-description").innerHTML = type.description;

  document.querySelector(".img-match.wine").src = 'https://anyl92.github.io/' + type.imgWine;
  document.querySelector(".match-sub-text.wine").innerHTML = type.textWine;
  document.querySelector(".img-match.type").src = 'https://anyl92.github.io/' + type.imgType;
  document.querySelector(".match-sub-text.type").innerHTML = type.textType;
}

window.addEventListener("load", () => {
  loadResult();
})

const modal = document.querySelector(".modal");
let modalState = false;

window.addEventListener("click", function (event) {
  clickElement = event.target.className;

  if (modalState) {
    event.preventDefault();

    if (clickElement == "modal-yes-button") {
      window.location.href = "/survey.html";
      localStorage.removeItem("wineType");
    }
    if (event.target.dataset.name != "modal") {
      modal.style.display = "none";
      modalState = false;
    }
  } else if (clickElement == "restart-button") {
    modal.style.display = "block";
    modalState = true;

    modal.style.top = `${window.innerHeight/2 - modal.offsetHeight/2 + window.scrollY}px`;
    modal.style.left = `${window.innerWidth/2 - modal.offsetWidth/2 + window.scrollX}px`;
  }
})


Kakao.init("bf71aedbd5bd7b2270a9fdb42e3d4468");
function sendLink() {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: type.text,
      description: type.description,
      imageUrl:
        'https://anyl92.github.io/' + type.img,
      link: {
        mobileWebUrl: 'https://anyl92.github.io/result.html?type=' + typeIdx,
        webUrl: 'https://anyl92.github.io/result.html?type=' + typeIdx,
      },
    },
    buttons: [
      {
        title: '결과 보기',
        link: {
          mobileWebUrl: 'https://anyl92.github.io/result.html?type=' + typeIdx,
          webUrl: 'https://anyl92.github.io/result.html?type=' + typeIdx,
        }
      }
    ],
  })
}