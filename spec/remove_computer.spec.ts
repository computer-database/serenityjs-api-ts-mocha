import { Ensure, equals } from "@serenity-js/assertions";
import { Actor, actorCalled, engage } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { after, before, beforeEach, describe, it } from "mocha";
import { Admin, DeleteComputerById } from "./screenplay";

describe("Remove computer from the list", () => {
  before(async () => {
    engage(new Admin());
  });

  it("using its Id", () =>
    actorCalled("Juan").attemptsTo(DeleteComputerById("381")));
});
