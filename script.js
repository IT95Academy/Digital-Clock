setInterval(() => {
  const clock = document.querySelector('#clock');
  const day = document.querySelector('#day');
  const month = document.querySelector('#month');
  const year = document.querySelector('#year');
  const amPm = document.querySelector('#am_pm');

  // получаем время
  const date = new Date();
  const hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }

  if (seconds <= 9) {
    seconds = `0${seconds}`;
  }

  // месяц год
  const cDate = date.getDate();
  const cMonth = date.getMonth() + 1;
  const cYear = date.getFullYear();
  // дни
  const cDay = date.getDay();

  const daysName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // отображаем AM или PM
  if (hours < 12) {
    amPm.innerHTML = 'AM';
  } else {
    amPm.innerHTML = 'PM';
  }

  // отображение часов
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;

  // отобрадения дня
  day.innerHTML = `${daysName[cDay]} | ${cDate}-`;

  // отображения месяца
  month.innerHTML = cMonth;

  // отображения года
  year.innerHTML = `-${cYear}`;
}, 1000);
