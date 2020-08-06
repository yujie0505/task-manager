"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _queue, _time_delay, _timer;
Object.defineProperty(exports, "__esModule", { value: true });
class TaskManager {
    constructor(time_delay = 1000) {
        _queue.set(this, void 0);
        _time_delay.set(this, void 0);
        _timer.set(this, void 0);
        __classPrivateFieldSet(this, _queue, []);
        __classPrivateFieldSet(this, _time_delay, time_delay);
        __classPrivateFieldSet(this, _timer, setInterval(() => {
            const task = __classPrivateFieldGet(this, _queue).shift();
            task && task();
        }, __classPrivateFieldGet(this, _time_delay)));
    }
    get pendingCount() {
        return __classPrivateFieldGet(this, _queue).length;
    }
    finish() {
        clearInterval(__classPrivateFieldGet(this, _timer));
    }
    publish(task) {
        __classPrivateFieldGet(this, _queue).push(task);
    }
}
exports.default = TaskManager;
_queue = new WeakMap(), _time_delay = new WeakMap(), _timer = new WeakMap();
