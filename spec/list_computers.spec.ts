import { Ensure, equals } from "@serenity-js/assertions";
import { Actor, actorCalled, engage } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { after, before, beforeEach, describe, it } from "mocha";
import { Admin, ListOfComputers } from "./screenplay";

describe("List of computers", () => {
  before(async () => {
    engage(new Admin());
  });

  it("return all computers", () =>
    actorCalled("Juan").attemptsTo(ListOfComputers()));
});
