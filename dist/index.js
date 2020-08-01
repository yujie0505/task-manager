"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskManager {
    constructor() {
        this.#queue = [];
        this.#time_delay = 1000;
        this.#timer = setInterval(() => {
            const task = this.#queue.shift();
            task && task();
        }, this.#time_delay);
    }
    #queue;
    #time_delay;
    #timer;
    finish() {
        clearInterval(this.#timer);
    }
    publish(task) {
        this.#queue.push(task);
    }
}
exports.default = TaskManager;
