import { Ensure, equals, startsWith } from "@serenity-js/assertions";
import { Task } from "@serenity-js/core";
import { LastResponse, PostRequest, Send } from "@serenity-js/rest";

export const DeleteComputerById = (expression: string) =>
  Task.where(
    `#actor deletes a computers by Id ${expression}`,
    Send.a(PostRequest.to(`/computers/${expression}/delete`)),
    Ensure.that(LastResponse.status(), equals(200))
  );
