const AnalogClock = ($container) => {
  const renderTimeDOM = () => {
    for (let i = 1; i <= 12; i += 1) {
      const timeDOM = document.createElement('div');
      timeDOM.className = `time time${i}`;
      timeDOM.innerHTML = '|';

      $container.appendChild(timeDOM);
    }
  };

  const renderHandDOM = () => {
    const handList = ['hour', 'minute', 'second'];

    handList.forEach((hand) => {
      const handDOM = document.createElement('div');
      handDOM.className = `hand ${hand}`;

      $container.appendChild(handDOM);
    });
  };

  const getTime = () => {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    return { hour, minute, second };
  };

  const getHandDegree = () => {
    const { hour, minute, second } = getTime();
    const hourDeg = hour * 15;
    const minuteDeg = minute * 6;
    const secondDeg = second * 6;

    return { hourDeg, minuteDeg, secondDeg };
  };

  const setHandDegree = () => {
    const DEGREE = '--deg';
    const hourDOM = document.querySelector('.hour');
    const minuteDOM = document.querySelector('.minute');
    const secondDOM = document.querySelector('.second');
    const { hourDeg, minuteDeg, secondDeg } = getHandDegree();

    hourDOM.style.setProperty(DEGREE, hourDeg);
    minuteDOM.style.setProperty(DEGREE, minuteDeg);
    secondDOM.style.setProperty(DEGREE, secondDeg);
  };

  const runClock = () => {
    setInterval(setHandDegree, 1000);
  };

  const init = () => {
    renderHandDOM();
    setHandDegree();
    renderTimeDOM();

    runClock();
  };

  init();
};

export default AnalogClock;
