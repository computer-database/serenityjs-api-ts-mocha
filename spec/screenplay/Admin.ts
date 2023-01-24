import { Actor, Cast, TakeNotes } from "@serenity-js/core";
import { CallAnApi } from "@serenity-js/rest";

export class Admin implements Cast {
  prepare(actor: Actor): Actor {
    //return actor.whoCan(CallAnApi.at("http://127.0.0.1:8080"));
    return actor.whoCan(CallAnApi.at("http://computer-database.gatling.io"));
  }
}
