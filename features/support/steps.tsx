import { Then, When } from "@cucumber/cucumber";
import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import { sayHello } from "../../src/greeting";
import MyComponent from "./MyComponent";

When("the greeter says hello", function () {
  this.whatIHeard = sayHello();
  render(<MyComponent />);
});

Then("I should have heard {string}", function (expectedResponse) {
  const hello = screen.getByText(expectedResponse);
  expect(hello).to.exist;
});
