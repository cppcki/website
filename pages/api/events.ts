import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@app/prisma";

async function createEvent(request: NextApiRequest, response: NextApiResponse) {
  const { title, description, startTime, endTime, createdBy } = JSON.parse(request.body);
  console.log("@title", title);

  const query = await prisma.event.create({
    data: {
      title: title,
      description: description,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      createdById: createdBy,
      level: "CLUB",
      tenants: ["FELLOWSHIP"]
    },
  });

  response.send({...query});
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  switch(request.method) {
    case "POST": {
      createEvent(request, response);
      break;  
    }
    default: {
      throw new Error("404");
    }
  }
}