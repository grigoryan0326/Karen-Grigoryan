import { v4 as uuid } from "uuid"

import tworism from "../assets/worksSlide/2rismVBR.mp4"
import brownianMotion from "../assets/worksSlide/brownian-motionVBR.mp4"
import countdownTimer from "../assets/worksSlide/countdown-timerVBR.mp4"
import cutspace from "../assets/worksSlide/cut-spaceVBR.mp4"
import fileDownloader from "../assets/worksSlide/file-downloaderVBR.mp4"
import houseStaff from "../assets/worksSlide/house-staffVBR.mp4"
import pianoGame from "../assets/worksSlide/piano-gameVBR.mp4"
import rockPaperScissors from "../assets/worksSlide/rock-paper-scissorsVBR.mp4"
import snakeGame from "../assets/worksSlide/snake-gameVBR.mp4"
import toDo from "../assets/worksSlide/ToDoVBR.mp4"

const Works = [
  {
    name: "Snake Game",
    id: uuid(),
    src: snakeGame,
    link: "https://github.com/grigoryan0326/www/tree/main/Snake%20Game",
    description:
      "Web-based Snake game: control the snake, eat food, avoid crashes. High score system with reset option. \n\n Used skills: JavaScript, HTML, CSS",
  },
  {
    name: "ToDo",
    id: uuid(),
    src: toDo,
    link: "https://github.com/grigoryan0326/www/tree/main/ToDo",
    description:
      "Basic ToDo app: add, remove, mark tasks as completed. Manage daily activities efficiently. \n\n Used skills: JavaScript, HTML, CSS",
  },
  {
    name: "2rism",
    id: uuid(),
    src: tworism,
    link: "https://github.com/grigoryan0326/www/tree/main/2rism",
    description:
      "Simple one-page website design with basic animations, built early in my learning journey. \n\n Used skills: HTML, SCSS",
  },
  {
    name: "File Downloader",
    id: uuid(),
    src: fileDownloader,
    link: "https://github.com/grigoryan0326/www/tree/main/Downloader",
    description:
      "Above is a classic file downloader, where you input a file URL and download it. It was built using pure JavaScript. \n\n Used skills: JavaScript, HTML, CSS.",
  },
  {
    name: "Brownian Motion",
    id: uuid(),
    src: brownianMotion,
    link: "https://github.com/grigoryan0326/www/tree/main/Brownian%20motion",
    description:
      "JavaScript app creates circles with Brownian motion, plus a randomly changing background color. \n\n Used skills: JavaScript, HTML, CSS.",
  },
  {
    name: "CutSpace",
    id: uuid(),
    src: cutspace,
    link: "https://github.com/grigoryan0326/www/tree/main/CutSpace",
    description:
      "There is a simple one-page project based on a mockup with pixel-perfect precision. \n\n Used skills: HTML, SCSS.",
  },
  {
    name: "Countdown Timer",
    id: uuid(),
    src: countdownTimer,
    link: "https://github.com/grigoryan0326/www/tree/main/Countdown%20timer",
    description:
      "Countdown timer in pure JavaScript with custom durations, real-time updates, and end-time display.\n\n Used skills: JavaScript, HTML, CSS.",
  },
  {
    name: "House Staff",
    id: uuid(),
    src: houseStaff,
    link: "https://github.com/grigoryan0326/www/tree/main/house-staff-shop",
    description:
      "Simple single-page React app for a furniture store with category filter, shopping cart, and Redux state management.\n\n Used skills: React, Redux, JavaScript, HTML, SCSS.",
  },
  {
    name: "Playable Piano",
    id: uuid(),
    src: pianoGame,
    link: "https://github.com/grigoryan0326/www/tree/main/Piano%20Game",
    description:
      "Interactive playable piano built with JavaScript, allowing note play via keyboard or mouse, with volume control and key hint options. \n\n Used skills: JavaScript, HTML, CSS",
  },
  {
    name: "Rock Paper Scissors",
    id: uuid(),
    src: rockPaperScissors,
    link: "https://github.com/grigoryan0326/www/tree/main/Rock%20Paper%20Scissors",
    description:
      "Browser-based Rock Paper Scissors game that compares user choices with the computer and determines a winner. \n\n Used skills: JavaScript, HTML, CSS",
  },
]

export default Works
