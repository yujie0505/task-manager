"use strict";

export default class TaskManager {
  #queue: Function[];
  #time_delay: number;
  #timer: number;

  constructor() {
    this.#queue = [];
    this.#time_delay = 1000;

    this.#timer = setInterval(() => {
      const task = this.#queue.shift();

      task && task();
    }, this.#time_delay);
  }

  finish() {
    clearInterval(this.#timer);
  }

  publish(task: Function) {
    this.#queue.push(task);
  }
}
