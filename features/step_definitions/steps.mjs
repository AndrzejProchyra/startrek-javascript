import { Given, Then, When, world } from "@cucumber/cucumber";
import { Person } from "../../src/shouty.js";
import assert from "node:assert/strict";

Given("Lucy is located {int} metres from Sean", (distance) => {
  world.lucy = new Person();
  world.sean = new Person();
  world.lucy.moveTo(distance);
});

When("Sean shouts {string}", (message) => {
  world.sean.shout(message);
  world.message = message;
});

Then("Lucy hears Sean's message", () => {
  assert.deepStrictEqual(world.lucy.messagesHeard(), [world.message]);
});
