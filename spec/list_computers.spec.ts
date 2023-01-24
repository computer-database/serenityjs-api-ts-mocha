import { Ensure, equals } from "@serenity-js/assertions";
import { Actor, actorCalled, engage } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { after, before, beforeEach, describe, it } from "mocha";
import { Admin, ListOfComputers, ListOfComputersInPage } from "./screenplay";

describe("List of computers", () => {
  before(async () => {
    engage(new Admin());
  });

  it("return all computers", () =>
    actorCalled("Juan").attemptsTo(ListOfComputers()));

  it("return computers listed on page", () =>
    actorCalled("Juan").attemptsTo(ListOfComputersInPage(2)));
});
