import { Ensure, equals } from "@serenity-js/assertions";
import { Actor, actorCalled, engage } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { after, before, beforeEach, describe, it } from "mocha";
import { Admin, ListOfComputers, ListOfComputersBy } from "./screenplay";
import { Field } from "./screenplay/models/field";
import { Pagination } from "./screenplay/models/pagination";
import { Sorting } from "./screenplay/models/sorting";

describe("List of computers", () => {
  before(async () => {
    engage(new Admin());
  });

  it("return all computers", () =>
    actorCalled("Juan").attemptsTo(ListOfComputers()));

  it("applying pagination criteria", () => {
    const pagination: Pagination = {
      p: 0,
      n: 10,
      s: Field.NAME,
      d: Sorting.ASC,
    };
    actorCalled("Juan").attemptsTo(ListOfComputersBy(pagination));
  });
});
