import { Ensure, equals } from "@serenity-js/assertions";
import { Task } from "@serenity-js/core";
import { LastResponse, PostRequest, Send } from "@serenity-js/rest";
import { Computer } from "../models/computer";

export const AddComputer = (computer: Computer) =>
  Task.where(
    `#actor adds a computers with name ${computer}`,
    Send.a(
      PostRequest.to("/computers").with(
        `name=${computer.name}&introduced=${computer.introduced}&discontinued=${computer.discontinued}&company=${computer.company}`
      )
    ),
    Ensure.that(LastResponse.status(), equals(200))
  );
