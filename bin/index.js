'use strict';

const Timer = require('../lib/timer');

const timer = new Timer();
const standardInput = process.stdin;
standardInput.setEncoding('utf-8');

const formatReport = ({ date, startTime, endTime, breakTime }) => ({
  date,
  'start-time': startTime,
  'end-time': endTime,
  'break-time': breakTime,
});

const handleTimerStop = () => {
  sendReport();
  process.exit(0);
};

const sendReport = () => {
  const report = formatReport(timer.getReport());
  console.log(`[${ time() }]: Your time report would be sent to the server!`);
  console.log({ report });

  return;
};

const realTimeReport = () => {
  const INTERVAL = 1 * 60 * 1000;
  setInterval(sendReport, INTERVAL);
  
  return;
};

const time = () => new Date(Date.now()).toLocaleString();

const banner = `
          WELCOME TO 'DEINE BEWERBUNG' WORK TIME LOGGER
      Use these commands anytime to control the timer.
      Reports would be periodically sent every 5 miniutes.
          Use:
            start   - to the timer
            break   - to pause the timer when taking a break
            resume  - to resume after taking a break
            stop    - to stop the time AFTER YOU HAVE CLOSED FOR THE DAY.

`;

console.log(banner);

process.on('exit', code => {
  if(code === 0) return;

  const exitMessage = 
  `You forcibly exited the timer,
  Your report so far would be sent to the server.
  `;

  console.log(`[${ time() }]: ${ exitMessage }`);
  
  return handleTimerStop();
});

standardInput.on('data', data => {
  const input = data.replace(/\n/,'');
  switch (input) {
    case 'start':
      if(timer.isStarted) {
        console.log(`[${ time() }]: You have already start working...`);
        break;
      }
      timer.emit('start');
      console.log(`[${ time() }]: You have started working...`);
      realTimeReport();
      break;
    case 'break':
      if(!timer.isStarted) {
        console.log(`[${ time() }]: You need to start before you can ${input}`);
        break;
      }
      if(!timer.isRunning) {
        console.log(`[${ time() }]: You are already on break...`);
        break;
      }
      console.log(`[${ time() }]: You are going on break...`);
      timer.emit('pause');
      break;
    case 'resume':
      if(!timer.isStarted) {
        console.log(`[${ time() }]: You need to start before you can ${input}`);
        break;
      }
      if(timer.isRunning) {
        console.log(`[${ time() }]: You are not on break!`);
      break;
      }
      console.log(`[${ time() }]: Welcome back from your break; you are now working...`);
      timer.emit('resume');
      break;
    case 'stop':
      if(!timer.isStarted) {
        console.log(`[${ time() }]: You can't stop before you start!`);
      break;
      }
      timer.emit('stop');
      handleTimerStop();
      break;
    default:
      console.log(`[${ time() }]: Invalid input: "${input}". Please refer to the menu above `);
      break;
  }
});
