"use strict";

export default class TaskManager {
  constructor() {
    this.queue = [];
    this.time_delay = 1000;

    this.timer = setInterval(() => {
      const task = this.queue.shift();

      task && task();
    }, this.time_delay);
  }

  publish(task: Function) {
    this.queue.push(task);
  }
}
