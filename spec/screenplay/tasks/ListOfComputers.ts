import { Ensure, equals, startsWith } from "@serenity-js/assertions";
import { Task } from "@serenity-js/core";
import { LastResponse, GetRequest, Send } from "@serenity-js/rest";

export const ListOfComputers = () =>
  Task.where(
    `#actor lists the computers`,
    Send.a(GetRequest.to("/computers")),
    Ensure.that(LastResponse.status(), equals(200))
  );
