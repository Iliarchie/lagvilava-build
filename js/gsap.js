const tm = gsap.timeline();

tm.fromTo(
  ".header__menu",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.8,
    delay: 1,
  }
)
  .fromTo(
    ".header__text__title",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.4,
    }
  )
  .fromTo(
    ".header__for",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.4,
    }
  )
  .fromTo(
    ".first",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.3,
    }
  )
  .fromTo(
    ".second",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.3,
    }
  );

let flagNON = false;

window.addEventListener("scroll", function () {
  const innerHeight = window.innerHeight;

  const calendar = document.querySelector(".calendar");
  const calendarTitle = document.querySelector(".calendar__title");
  const calendarTitleText = document.querySelector(".calendar__title__text");
  const calendarHeight = calendar.getBoundingClientRect().top;

  if (calendarHeight + 400 < innerHeight && !flagNON) {
    const timeLine = gsap.timeline();
    flagNON = true;

    timeLine
      .fromTo(
        ".item-01",
        {
          x: -100,
          opacity: 0,
          delay: 1,
        },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        ".item-02",
        {
          x: -100,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        ".item-03",
        {
          x: -100,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        ".item-04",
        {
          x: 100,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        ".item-05",
        {
          x: 100,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        ".item-06",
        {
          x: 100,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 0.5 }
      );
  }
});
