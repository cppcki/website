import React, { SyntheticEvent, useCallback, useState } from "react";

import TextInput from "@app/components/TextLabel";
import Button from "@app/components/Button";

import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

function EventForm() {

  const { data } = useSession();

  console.log(data);

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    startTime: Date.now(),
    endTime: Date.now(),
    level: "",
    tenants: [],
    createdBy: data?.user.id
  });

  const payload = async () => {
    const response = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(form)
    });
    const payload = await response.json();
    return payload;
  };

  const mutation = useMutation({
    mutationFn: payload
  });

  const handleOnSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    mutation.mutate(form);
  }, [mutation, form]);

  const handleTextOnChange = (event: React.SyntheticEvent<HTMLInputElement, Event> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: target.value
    });
  };

  return (
    <section className="p-4">
      {JSON.stringify(mutation.data)}
      <h1 className="text-3xl mb-2 font-bold">Event Submission</h1>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-2">
        <TextInput label="Thumbnail" name="thumbnail" type="file"/>
        <TextInput label="Title" name="title" type="text" onChange={handleTextOnChange}/>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea name="description" className="border-2 border-gray rounded-md p-1" onChange={handleTextOnChange}></textarea>
        </div>
        <TextInput label="Location" name="location" type="text" onChange={handleTextOnChange}/>
        <div className="flex gap-x-2">
          <TextInput label="Start Time" name="startTime" type="datetime-local" onChange={handleTextOnChange}/>
          <TextInput label="End Time" name="endTime" type="datetime-local" onChange={handleTextOnChange}/>
        </div>
        <div className="flex flex-col">
          <label>Level</label>
          <select className="border-2 border-gray rounded-md p-1">
            <option value="club">Club</option>
            <option value="Divison">Divison</option>
            <option value="District">District</option>
            <option value="National">National</option>
          </select>
        </div>
        <div>
          <label>Tenants</label>
          <div className="flex gap-x-1">
            <input type="checkbox" id="fellowship" name="fellowship"/>
            <label htmlFor="fellowship">Fellowship</label>
          </div>
          <div className="flex gap-x-1">
            <input type="checkbox" id="leadership" name="leadership"/>
            <label htmlFor="leadership">Leadership</label>
          </div>
          <div className="flex gap-x-1">
            <input type="checkbox" id="service" name="service"/>
            <label htmlFor="service">Service</label>
          </div>
        </div>
        <Button>Save</Button>
      </form>
    </section>
  );
}

export default EventForm;