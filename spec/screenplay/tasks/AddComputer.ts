import { Ensure, equals, startsWith } from "@serenity-js/assertions";
import { Task } from "@serenity-js/core";
import { LastResponse, PostRequest, Send } from "@serenity-js/rest";

export const AddComputer = (expression: string) =>
  Task.where(
    `#actor adds a computers with name ${expression}`,
    Send.a(
      PostRequest.to("/computers").with(`name=${expression}&introduced=&discontinued=&company=`)
      //.using({ params: { name: `${expression}`, introduced:'', discontinued: '', company:'' } })
      //.with("name=garuda&introduced=&discontinued=&company=").using({headers: { Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'}})
    ),
    Ensure.that(LastResponse.status(), equals(200))
  );
//{name:'testABC',introduced:'',discontinued:'',company:''}
