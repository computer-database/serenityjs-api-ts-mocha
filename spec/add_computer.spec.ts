import { Ensure, equals } from "@serenity-js/assertions";
import { Actor, actorCalled, engage } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { after, before, beforeEach, describe, it } from "mocha";
import { AddComputer, Admin } from "./screenplay";

describe("Add computer to the list", () => {
  before(async () => {
    engage(new Admin());
  });

  it("only with name", () =>
    actorCalled("Juan").attemptsTo(AddComputer("opttest5")));
});
