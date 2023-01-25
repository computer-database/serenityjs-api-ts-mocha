import { Ensure, equals } from "@serenity-js/assertions";
import { Actor, actorCalled, engage } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";
import { after, before, beforeEach, describe, it } from "mocha";
import { AddComputer, Admin } from "./screenplay";
import { Computer } from "./screenplay";
import { faker } from '@faker-js/faker';

describe("Add computer to the list", () => {
  before(async () => {
    engage(new Admin());
  });

  it("provide only required information", () => {

    const computer : Computer = {
      name: faker.internet.userName(),
      introduced: '',
      discontinued: '',
      company: '',
    }

    actorCalled("Juan")
      .attemptsTo(AddComputer(computer))
  });

    it("provide full information", () => {

      const computer : Computer = {
        name: faker.internet.userName(),
        introduced: '1990-06-19',
        discontinued: '2023-06-19',
        company: faker.company.name(),
      }

      actorCalled("Juan")
        .attemptsTo(AddComputer(computer))
    });
});
