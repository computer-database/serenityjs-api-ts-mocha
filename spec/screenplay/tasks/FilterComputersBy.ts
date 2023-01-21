import { Ensure, equals, startsWith } from "@serenity-js/assertions";
import { Task } from "@serenity-js/core";
import { LastResponse, GetRequest, Send } from "@serenity-js/rest";

export const FilterComputersBy = (expression: string) =>
  Task.where(
    `#actor filters computers by ${expression}`,
    Send.a(
      GetRequest.to("/computers").using({ params: { f: `${expression}` } })
    ),
    Ensure.that(LastResponse.status(), equals(200))
  );
