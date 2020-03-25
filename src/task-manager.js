"use strict";

class TaskManager {
  constructor() {
    this.queue = [];
    this.timer = setInterval(() => {
      const task = this.queue.shift();

      task && task();
    }, 1000);
  }

  publish(task) {
    this.queue.push(task);
  }
}

module.exports = TaskManager;
