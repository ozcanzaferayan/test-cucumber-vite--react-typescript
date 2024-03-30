import { Then, When } from "@cucumber/cucumber";
import assert from "assert";
import { sayHello } from "../../src/greeting.ts";

When("the greeter says hello", function () {
  this.whatIHeard = sayHello();
});

Then("I should have heard {string}", function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
