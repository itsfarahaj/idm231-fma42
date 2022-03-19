function sign(name, image, sound, description, date) {
  this.name = name;
  this.image = image;
  this.sound = new Audio(sound);
  this.description = description;
  this.date = date;
}




const audioPlayer = document.querySelector("#speakers");
const aries = new sign(
  "aries",
  "images/aries.jpeg",
  "audio/aries.mp3",
  "Aries is the first sign of the zodiac, and that’s pretty much how those born under this sign see themselves: first. Aries are the leaders of the pack, first in line to get things going. Whether or not everything gets done is another question altogether, for an Aries prefers to initiate rather than to complete.",
  "March 21 - April 19"
);

const taurus = new sign(
  "taurus",
  "images/taurus.jpeg",
  "audio/taurus.mp3",
  "Taurus, the second sign of the zodiac and the ruler of the second house, is all about reward. Unlike the Aries love of the game, the typical Taurus personality loves the rewards of the game. Think physical pleasures and material goods, for those born under this sign revel in delicious excess. This zodiac sign is also tactile, enjoying a tender, even sensual, touch.",
  "April 20 - May 20"
);

const gemini = new sign(
  "gemini",
  "images/gemini.jpeg",
  "audio/gemini.mp3",
  "Gemini is the third sign of the zodiac, and those born under this sign will be quick to tell you all about it. That’s because they love to talk! It’s not just idle chatter with these folks, either. The driving force behind a Gemini zodiac sign’s conversation is their mind. Ruling the third house, the Gemini-born are intellectually inclined, forever probing people and places in search of information.",
  "May 21 - June 20"
);
const cancer = new sign(
  "cancer",
  "images/cancer.jpeg",
  "audio/cancer.mp3",
  "Traditions are upheld with great zest in a Cancer’s household, since, as the rulers of the fourth house of home and memory, this zodiac sign prizes family history and loves communal activities. They also tend to be patriotic, waving the flag whenever possible. A Cancer’s good memory is the basis for stories told around the dinner table, and don’t be surprised if these folks get emotional about things. Those born under this sign wear their heart on their sleeve, which is just fine by them.",
  "June 21 - July 22"
);
const leo = new sign(
  "leo",
  "images/leo.jpeg",
  "audio/leo.mp3",
  "Leo is the fifth sign of the zodiac. These folks are impossible to miss since they love being center stage. Making an impression is Job #1 for Leos, and when you consider their personal magnetism, you see the job is quite easy. Leos are an ambitious lot, and their strength of purpose allows them to accomplish a great deal. The fact that this horoscope sign is also creative makes their endeavors fun for them and everyone else.",
  "July 23 - August 22"
);
const virgo = new sign(
  "virgo",
  "images/virgo.jpeg",
  "audio/virgo.mp3",
  "Virgo is the sixth sign of the zodiac, to be exact, and that’s the way Virgos like it: exacting. Those born under this horoscope sign are forever the butt of jokes for being so picky and critical (and they can be), but their ‘attention to detail’ is for a reason: to help others. Virgos, more than any other zodiac sign, were born to serve, and it gives them great joy. They are also tailor-made for the job, since common Virgo traits are being industrious, methodical, and efficient. The sense of duty borne by these folks is considerable, and it ensures that they will always work for the greater good.",
  "August 23 - September 22"
);
const libra = new sign(
  "libra",
  "images/libra.jpeg",
  "audio/libra.mp3",
  "Libra is the seventh sign of the zodiac, and it’s at this point in the zodiac that we start to see a shift. While the first six signs of the zodiac focus on the individual, the last six focus on the individual’s contact with others and with the world. The Libra zodiac sign is first and foremost focused on others and how they relate to them. We can call this the sign of Partnership with a capital ‘P’ because these folks do not want to be alone!",
  "September 23 - October 23"
);
const scorpio = new sign(
  "scorpio",
  "images/scorpio.jpeg",
  "audio/scorpio.mp3",
  "Scorpio is the eighth sign of the zodiac, and that shouldn’t be taken lightly—nor should Scorpios! Those born under this sign are dead serious in their mission to learn about others. There’s no fluff or chatter for Scorpios, either; these folks will zero-in on the essential questions, gleaning the secrets that lie within.",
  "October 24 - November 21"
);
const sagittarius = new sign(
  "sagittarius",
  "images/sagittarius.jpeg",
  "audio/sagittarius.mp3",
  "Knowledge is key to these folks since it fuels their broad-minded approach to life. Those born with a Sagittarius zodiac sign are keenly interested in philosophy and religion, and they find that these disciplines aid their internal quest. At the end of the day, what Sagittarius wants most is to know the meaning of life, and to accomplish this while feeling free and easy.",
  "November 22 - December 21"
);
const capricon = new sign(
  "capricon",
  "images/capricon.jpeg",
  "audio/capricon.mp3",
  "Capricorn, the tenth sign and mountain goat of the zodiac, is all about hard work. Those born under this sign are more than happy to put in a full day at the office, realizing that it will likely take a lot of those days to get to the top. That’s no problem, since Capricorns are both ambitious and determined: they will get there. Life is one big project for these folks, and they adapt to this by adopting a businesslike approach to most everything they do.",
  "December 22 - January 19"
);
const aquarius = new sign(
  "aquarius",
  "images/aquarius.jpeg",
  "audio/aquarius.mp3",
  "Aquarius is the eleventh sign of the zodiac, and Aquarians are the perfect representatives for the Age of Aquarius. Those born under this horoscope sign have the social conscience needed to carry us into the new millennium. Those of the Aquarius zodiac sign are humanitarian, philanthropic, and keenly interested in making the world a better place. Along those lines, they’d like to make the world work better, which is why they focus much of their energy on our social institutions and how they work.",
  "January 20 - February 18"
);
const pisces = new sign(
  "pisces",
  "images/pisces.jpeg",
  "audio/pisces.mp3",
  "Pisces is the twelfth sign of the zodiac, and it is also the final sign in the zodiacal cycle. Hence, this sign brings together many of the characteristics of the eleven signs that have come before it. Pisces, however, are happiest keeping many of these qualities under wraps. These folks are selfless, spiritual, and very focused on their inner journey.",
  "February 19 - March 20"
);

const signList = [
  aries,
  taurus,
  gemini,
  cancer,
  leo,
  virgo,
  libra,
  scorpio,
  sagittarius,
  capricon,
  aquarius,
  pisces
];

const container = document.getElementById("signContainer");







const createSign = sign => {
  const button = document.createElement("button");

  button.id = `${sign.name}`;
  button.classList.add("sign");

  const image = document.createElement("img");
  const paragraph = document.createElement("p");

  image.src = sign.image;
  image.alt = `${sign.name} icon`;
  paragraph.innerHTML = sign.name;

  button.appendChild(image);
  button.appendChild(paragraph);

  return button;
};


const buildSigns = () => {
  signList.forEach(signName => {
    const signButton = createSign(signName);
    container.appendChild(signButton);
  });
};

const body = document.getElementById("body");
const overlayContainer = document.getElementById("overlay");


const createInfo = sign => {
  const signOverlay = document.createElement("section");
  signOverlay.id = `${sign.name}Info`;
  signOverlay.classList.add("signInfo");
  signOverlay.classList.add("hidden");

  const image = document.createElement("img");
  image.src = sign.image;
  image.alt = `${sign.name} icon`;
  image.classList.add("elementIcon");

  const signName = document.createElement("h2");
  signName.classList.add("signName");
  signName.innerHTML = sign.name;

  const dateRange = document.createElement("h3");
  dateRange.classList.add("dateRange");
  dateRange.innerHTML = sign.date;

  const description = document.createElement("p");
  description.classList.add("overlayDesc");
  description.innerHTML = sign.description;

  const closeBtn = document.createElement("button");
  closeBtn.setAttribute("id", "closeBtn");
  closeBtn.classList.add("overlayClose");
  closeBtn.innerHTML = "CLOSE";

  signOverlay.appendChild(image);
  signOverlay.appendChild(signName);
  signOverlay.appendChild(dateRange);
  signOverlay.appendChild(description);
  signOverlay.appendChild(closeBtn);

  return signOverlay;
};

const buildInfo = () => {
  signList.forEach(signName => {
    const infoOverlay = createInfo(signName);
    overlayContainer.appendChild(infoOverlay);
  });
};

const closeBtn = document.getElementById("closeBtn");









// Play sound
const playSound = whichSound => {
  whichSound.play();
};

// Stop sound
const stopSound = whichSound => {
  whichSound.pause();
  whichSound.currentTime = 0.0;
};

// sign + info
let myPromise = new Promise((resolve, reject) => {
  window.onload = () => {
    buildSigns();
    buildInfo();
    resolve("Success!");
  };
});

myPromise.then(successMessage => {
  const closeBtn = document.getElementsByClassName("overlayClose");

  const findSigns = document.querySelectorAll(".sign");

  const idArray = [];

  
  for (let i = 0; i < findSigns.length; i++) {
    idArray.push(findSigns[i].id);
  }

  for (let i = 0; i < idArray.length; i++) {
    const zodiacSigns = document.getElementById(`${idArray[i]}`);
    const colorFill = document.getElementById("colorFill");

    zodiacSigns.addEventListener("mouseenter", function () {
      colorFill.classList.add(`${idArray[i]}`);
      colorFill.classList.add("expand");
    });

    zodiacSigns.addEventListener("mouseleave", function () {
      colorFill.classList.remove("expand");
      colorFill.classList.add("remove");

      window.setTimeout(() => {
        colorFill.classList.remove("remove");
        colorFill.classList.remove(`${idArray[i]}`);
      }, 500);
    });

    zodiacSigns.addEventListener("click", function () {
      overlayContainer.classList.remove("hidden");
      overlayContainer.classList.add("fadeIn");

      const signOverlay = document.getElementById(`${idArray[i]}Info`);
      signOverlay.classList.remove("hidden");

      body.appendChild(overlay);
      body.classList.add("noScroll");


      if (signOverlay.id === "ariesInfo") {
        playSound(aries.sound);
      } else if (signOverlay.id === "taurusInfo") {
        playSound(taurus.sound);
      } else if (signOverlay.id === "geminiInfo") {
        playSound(gemini.sound);
      } else if (signOverlay.id === "cancerInfo") {
        playSound(cancer.sound);
      } else if (signOverlay.id === "leoInfo") { 
        playSound(leo.sound);
      } else if (signOverlay.id === "virgoInfo") {
        playSound(virgo.sound);
      } else if (signOverlay.id === "libraInfo") {
        playSound(libra.sound);
      } else if (signOverlay.id === "scorpioInfo") {
        playSound(scorpio.sound);
      } else if (signOverlay.id === "sagittariusInfo") {
        playSound(sagittarius.sound);
      } else if (signOverlay.id === "capriconInfo") {
        playSound(capricon.sound);
      } else if (signOverlay.id === "aquariusInfo") {
        playSound(aquarius.sound);
      } else if (signOverlay.id === "piscesInfo") {
        playSound(pisces.sound);
      }
    });
  }

  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", function () {
      overlayContainer.classList.remove("fadeIn");
      overlayContainer.classList.add("fadeOut");
      body.classList.remove("noScroll");

      window.setTimeout(() => {
        overlayContainer.classList.add("hidden");
        console.log(overlayContainer);
        overlayContainer.classList.remove("fadeOut");
        overlayContainer.setAttribute("hidden", "");
        overlayContainer.setAttribute("aria-hidden", true);

        const instructions = document.getElementById("details");
        instructions.classList.add("hidden");
        const overlays = document.querySelectorAll(".signInfo");

        for (let i = 0; i < overlays.length; i++) {
          overlays[i].classList.add("hidden");
        }

        stopSound(aries.sound);
        stopSound(taurus.sound);
        stopSound(gemini.sound);
        stopSound(cancer.sound);
        stopSound(leo.sound);
        stopSound(virgo.sound);
        stopSound(libra.sound);
        stopSound(scorpio.sound);
        stopSound(sagittarius.sound);
        stopSound(capricon.sound);
        stopSound(aquarius.sound);
        stopSound(pisces.sound);
      }, 500);
    });
  }


 //Birthday Fields

var day = document.getElementById('day').value ;
var month = document.getElementById('month').value ;
var year = document.getElementById('year').value ;





const submitBirthday = event => {
    event.preventDefault();
    const birthdayInput = document.getElementById("birthInput");
    const birthdayValue = birthdayInput.value;

    let whichMonth, whichDayOfMonth;

      if (birthdayValue.includes("/")) {
      const dateArray = birthdayValue.split("/");
      whichMonth = dateArray[0];
      whichDayOfMonth = dateArray[1];
    } else {
      const birthday = new Date(`${birthdayValue}T00:00`);
      whichMonth = birthday.getMonth() + 1;
      whichDayOfMonth = birthday.getDate();
    }

      if (
        (whichMonth == 12 && whichDayOfMonth >= 22) ||
        (whichMonth == 1 && whichDayOfMonth <= 19)
      ) {
        AstroSign = "capricon";
      } else if (
        (whichMonth == 11 && whichDayOfMonth >= 22) ||
        (whichMonth == 12 && whichDayOfMonth <= 21)
      ) {
        AstroSign = "sagittarius";
      } else if (
        (whichMonth == 10 && whichDayOfMonth >= 24) ||
        (whichMonth == 11 && whichDayOfMonth <= 21)
      ) {
        AstroSign = "scorpio";
      } else if (
        (whichMonth == 9 && whichDayOfMonth >= 23) ||
        (whichMonth == 10 && whichDayOfMonth <= 23)
      ) {
        AstroSign = "libra";
      } else if (
        (whichMonth == 8 && whichDayOfMonth >= 23) ||
        (whichMonth == 9 && whichDayOfMonth <= 22)
      ) {
        AstroSign = "virgo";
      } else if (
        (whichMonth == 7 && whichDayOfMonth >= 23) ||
        (whichMonth == 8 && whichDayOfMonth <= 22)
      ) {
        AstroSign = "leo";
      } else if (
        (whichMonth == 6 && whichDayOfMonth >= 22) ||
        (whichMonth == 7 && whichDayOfMonth <= 22)
      ) {
        AstroSign = "cancer";
      } else if (
        (whichMonth == 5 && whichDayOfMonth >= 21) ||
        (whichMonth == 6 && whichDayOfMonth <= 21)
      ) {
        AstroSign = "gemini";
      } else if (
        (whichMonth == 4 && whichDayOfMonth >= 20) ||
        (whichMonth == 5 && whichDayOfMonth <= 20)
      ) {
        AstroSign = "taurus";
      } else if (
        (whichMonth == 3 && whichDayOfMonth >= 21) ||
        (whichMonth == 4 && whichDayOfMonth <= 19)
      ) {
        AstroSign = "aries";
      } else if (
        (whichMonth == 2 && whichDayOfMonth >= 19) ||
        (whichMonth == 3 && whichDayOfMonth <= 20)
      ) {
        AstroSign = "pisces";
      } else if (
        (whichMonth == 1 && whichDayOfMonth >= 20) ||
        (whichMonth == 2 && whichDayOfMonth <= 18)
      ) {
        AstroSign = "sagittarius";
      } else {
        AstroSign = "error"
      }

      if (AstroSign === "error") {
        birthdayInput.classList.add("invalid", "invalidShake");

        birthdayInput.addEventListener("animationend", function () {
          birthdayInput.classList.remove("invalidShake");
        });
      } else {
        birthdayInput.classList.remove("invalid");

        overlayContainer.classList.remove("hidden");
        overlayContainer.classList.add("fadeIn");

        const signOverlay = document.getElementById(`${AstroSign}Info`);
        signOverlay.classList.remove("hidden");

        body.appendChild(overlay);
        body.classList.add("noScroll");

        // find audio HTML element based on zodiac
        // find audiotrack associated with astrosign 
        //update audio source with new audio mp3
        //play audios

        if (signOverlay.id === "ariesInfo") {
          playSound(aries.sound);
        } else if (signOverlay.id === "taurusInfo") {
          playSound(taurus.sound);
        } else if (signOverlay.id === "geminiInfo") {
          playSound(gemini.sound);
        } else if (signOverlay.id === "cancerInfo") {
          playSound(cancer.sound);
        } else if (signOverlay.id === "leoInfo") {
          playSound(leo.sound);
        } else if (signOverlay.id === "virgoInfo") {
          playSound(virgo.sound);
        } else if (signOverlay.id === "libraInfo") {
          playSound(libra.sound);
        } else if (signOverlay.id === "scorpioInfo") {
          playSound(scorpio.sound);
        } else if (signOverlay.id === "sagittariusInfo") {
          playSound(sagittarius.sound);
        } else if (signOverlay.id === "capriconInfo") {
          playSound(capricon.sound);
        } else if (signOverlay.id === "aquariusInfo") {
          playSound(aquarius.sound);
        } else if (signOverlay.id === "piscesInfo") {
          playSound(pisces.sound);
        }
      }
    };

    birthdayForm.addEventListener("submit", submitBirthday);
   
  }); 
  

  const clickMeButton = document.querySelector(".js-click-me");

clickMeButton.addEventListener("click", function () {
  const clickMeButtonContent = document.querySelector(".js-hidden-content");
  clickMeButtonContent.classList.toggle("hidden");
});

const clickMeButton2 = document.querySelector(".js-click-me-2");
clickMeButton2.addEventListener("click", function () {
  const clickMeButtonContent2 = document.querySelector(".js-hidden-content-2");
  if (clickMeButtonContent2.style.display == "none") {
    clickMeButtonContent2.style.display = "block";
  } else {
    clickMeButtonContent2.style.display = "none";
  }
});

const multipleButtons = document.querySelectorAll(".js-button");
multipleButtons.forEach((element) => {
  // console.log("start of the loop");
  // console.log(element);
  // console.log("end of the loop");
  element.addEventListener("click", function () {
    // Default remove all existing open divs.
    // TODO: THIS PARTTTTTT

    const allButtons = document.querySelector("[data-content]");
    allButtons.classList.remove("hidden");

    // [data-button-for="content1"] or [data-button-for="content2"] or [data-button-for="content3"]
    const currentButtonValue = element.getAttribute("data-button-for");
    // [data-content="content1"] or [data-content="content2"] or [data-content="content3"]
    const matchingContentElement = document.querySelector(
      '[data-content="' + currentButtonValue + '"]'
    );
    matchingContentElement.classList.toggle("hidden");
  });
});

