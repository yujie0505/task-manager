"use strict";

export default class TaskManager {
  #queue: Function[];
  #time_delay: number;
  #timer: NodeJS.Timeout;

  constructor(time_delay: number = 1000) {
    this.#queue = [];
    this.#time_delay = time_delay;

    this.#timer = setInterval(() => {
      const task = this.#queue.shift();

      task && task();
    }, this.#time_delay);
  }

  get pendingCount() {
    return this.#queue.length;
  }

  finish() {
    clearInterval(this.#timer);
  }

  publish(task: Function) {
    this.#queue.push(task);
  }
}
