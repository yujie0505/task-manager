"use strict";

import TaskManager from "../src/index";

describe("Class member functions", () => {
  const tm = new TaskManager();

  test("finish", () => {
    expect(typeof tm.finish).toBe("function");
  });

  tm.finish();
});
