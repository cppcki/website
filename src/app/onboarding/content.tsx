"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

import TextInput from "@/components/TextLabel";
import OptionInput from "@/components/OptionInput";
import Button from "@/components/Button";

type Form = {
  firstName: string;
  lastName: string;
  major: string;
  discord: string;
  dob: string;
}

type FormContext = {
  payload: Form;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  setSection: React.Dispatch<React.SetStateAction<Section>>;
}

const FormContext = createContext<FormContext | null>(null);

function useFormContext() {
  const context = useContext(FormContext);
  if (context === null) {
    throw new Error("useFormContext has to be used within FormContext.Provider");
  }

  return context;
}

function BasicInformationForm(props: { majors: string[] }) {
  const { majors } = props;

  const { payload, handleOnChange, setSection } = useFormContext();

  const handleOnSubmit = useCallback((event: React.SyntheticEvent<HTMLButtonElement>) => {
    setSection("address");
  }, []);

  return (
    <>
      <div className="flex flex-col mt-3">
        <h1 className="text-2xl font-semibold">A wild Dango appears! 👀</h1>
        <p>Before we direct you to the dashboard. Please tell us little about yourself.</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <TextInput
          required
          type="text"
          value={payload.firstName}
          label="First name"
          name="firstName"
          placeholder="Ligma"
          onChange={handleOnChange}
        />
        <TextInput
          required
          type="text"
          value={payload.lastName}
          label="Last name"
          placeholder="Johnson"
          name="lastName"
          onChange={handleOnChange}
        />
        <OptionInput
          required
          label="Major"
          data={majors}
          value={payload.major}
          name="major"
          onChange={handleOnChange}
        />
        <TextInput
          disabled
          readOnly
          name="discord"
          value={payload.discord}
          type="text"
          placeholder="rin#8189"
          label="Discord"
        />
        <TextInput
          required
          type="date"
          name="dob"
          value={payload.dob}
          onChange={handleOnChange}
          label="Day of birth"
        />
        <Button className="mt-3" variant="fill" onClick={handleOnSubmit}>Continue</Button>
      </div>
    </>
  );
}

function AddressForm() {

  const { payload, setSection } = useFormContext();

  const handleOnSubmit = useCallback((event: React.SyntheticEvent<HTMLButtonElement>) => {
    setSection("done");
  }, []);

  return (
    <>
      <div className="flex flex-col mt-3">
        <h1 className="text-2xl font-semibold">A wild Dango appears! 👀</h1>
        <p>Although it is not required, filling out your current address will allow us better plan carpooling whenever needed.</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <TextInput
          required
          type="text"
          value={payload.firstName}
          label="First name"
          name="firstName"
          placeholder="Ligma"
        />
        <Button className="mt-3" variant="fill" onClick={handleOnSubmit}>Continue</Button>
      </div>
    </>
  );
}

function CompleteForm() {
  return (
    <>
      <h1>oh hi there</h1>
    </>
  )
}

type Section = "basic" | "address" | "done";

type ContentProps = {
  majors: string[]
}

function OnboardingScreen(props: ContentProps) {
  const { majors } = props;

  const [section, setSection] = useState<Section>("basic");
  const [form, setForm] = useState<Form>({
    firstName: "",
    lastName: "",
    major: "",
    discord: "",
    dob: ""
  });

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value
    })
  }, [form]);

  const value = useMemo(() => {
    return {
      payload: form,
      handleOnChange,
      setSection
    }
  }, [form, handleOnChange]);

  const sections = useMemo(() => {
    switch(section) {
    case "basic":
      return <BasicInformationForm majors={majors}/>
    case "address":
      return <AddressForm/>
    case "done":
      return <CompleteForm/>
    default:
      throw new Error("Failed to find section component");
    }
  }, [section, majors]);

  return (
    <FormContext.Provider value={value}>
      <main className="max-w-7xl m-auto px-8 h-screen">
        <div className="flex justify-center h-full">
          <div className="max-w-md gap-3 flex flex-col m-auto p-4 bg-gray-50 rounded-md">
            {sections}
          </div>
        </div>
      </main>
    </FormContext.Provider>
  );
}

export default OnboardingScreen;