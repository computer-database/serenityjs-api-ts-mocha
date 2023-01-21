import { Ensure, equals } from "@serenity-js/assertions";
import { Actor, actorCalled, engage } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { after, before, beforeEach, describe, it } from "mocha";
import {
  AddComputer,
  Admin,
  FilterComputersBy,
  ListOfComputers,
} from "./screenplay";

describe("Filter computers", () => {
  before(async () => {
    engage(new Admin());
  });

  it("lists only computers that matches with filter criteria", () =>
    actorCalled("Juan").attemptsTo(FilterComputersBy("macbook")));
});
