'use strict';

const { EventEmitter } = require('events')

class Timer extends EventEmitter {
  constructor() {
    super();
    
    this.isRunning = false;
    this.isStarted = false;
    this.breakTime = 0;
    this.report = {
      date: new Date(),
      breakTime: 0,
    };

    this.init();
  }
  
  init() {
    this.on('start', this.handleStart);
    this.on('pause', this.handlePause);
    this.on('resume', this.handleResume);
    this.on('stop', this.handleStop);
  }

  handleStart() {
    this.startTime = new Date();
    this.isRunning = true;
    this.isStarted = true;
  }

  handlePause() {
    this.pauseTime = Date.now();
    this.isRunning = false;
  }

  handleResume() {
    this.report.breakTime += this.differenceInMinitues(this.pauseTime, Date.now());
    this.isRunning = true;
  }

  handleStop() {
    this.isStarted = false;
    this.isRunning = false;
    this.stopTime = new Date();
  }

  dayMinutes(dateTime) {
    return (dateTime.getHours() * 60) + dateTime.getMinutes();
  }

  differenceInMinitues(start, end) {
    return (end - start) / (1000 * 60);
  }

  getStartTime() {
    return this.startTime
  }

  getReport() {
    return {
      date: this.formatDate(this.report.date),
      startTime: this.dayMinutes(this.startTime),
      endTime: this.dayMinutes(this.stopTime || new Date()),
      breakTime: this.breakTime,
    }
  }

  formatDate(date) {
    const day = this.asDoubleDigit(date.getDate());
    const month = this.asDoubleDigit(date.getMonth());
    const year = date.getFullYear();

    return `${ day }-${ month }-${ year }`;
  }

  asDoubleDigit(number) {
    return number < 10 ? '0' + number : number;
  }
}

module.exports = Timer;
