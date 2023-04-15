import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { HiArrowLeft } from "react-icons/hi";

import { useNeighbor, Neighbor } from "@/utils/hooks/useNeighbor";

import Head from "@/components/Head";
import TextInput from "@/components/TextLabel";
import OptionInput from "@/components/OptionInput";
import Button from "@/components/Button";

import getMajors from "@/utils/getMajors";

type Form = {
  firstName: string;
  lastName: string;
  major: string;
  email: string;
  edu: string;
  phone: string;
  discord: string;
  dob: string;
  address?: string;
  apt?: string;
  city?: string;
  zipcode?: number;
}

type FormContext = {
  payload: Form;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormContext = createContext<FormContext | null>(null);

function useFormContext() {
  const context = useContext(FormContext);
  if (context === null) {
    throw new Error("useFormContext has to be used within FormContext.Provider");
  }

  return context;
}

type ScreenProps = {
  header: string;
  description: string;
  back?: boolean;
  children?: React.ReactNode;
}

function Screen(props: ScreenProps) {
  const { header, description, back, children } = props;
  const neighbor = useNeighbor();

  const handleOnBack = useCallback(() => {
    neighbor.previous();
  }, [neighbor]);

  const handleOnNext = useCallback(() => {
    if (neighbor.isLastIndex()) {
      alert("done");
    } else {
      neighbor.next();
    }
  }, [neighbor]);

  return (
    <div className="flex flex-col">
      {back &&
        <Button onClick={handleOnBack}>
          <HiArrowLeft/>
        </Button>
      }
      <div className="flex flex-col my-3">
        <h1 className="text-4xl font-semibold">{header}</h1>
        <p>{description}</p>
      </div>
      {children}
      <Button className="mt-6" variant="fill" onClick={handleOnNext}>
        {neighbor.isLastIndex() ? "Submit" : "Continue"}
      </Button>
    </div>
  );
}

function BasicInformationForm() {
  const { payload, handleOnChange } = useFormContext();

  return (
    <Screen
      header="A wild Dango appears! 👀"
      description="Please tell us little about yourself.">
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
        <TextInput
          required
          type="date"
          name="dob"
          value={payload.dob}
          onChange={handleOnChange}
          label="Day of birth"
        />
        <TextInput
          required
          disabled
          type="text"
          readOnly
          value={payload.email}
          label="Email"
          placeholder="ljohnson@cpp.edu"
          name="email"
          onChange={handleOnChange}
        />
      </div>
    </Screen>
  );
}

function AddressForm() {
  const { payload } = useFormContext();

  return (
    <Screen 
      back
      header="Where does this wild Dango reside? 🤭"
      description="Although it is not required, filling out your current address will allow us better plan carpooling whenever needed.">
      <div className="flex flex-col gap-y-3">
        <TextInput
          type="text"
          value={payload.address}
          label="Address"
          name="address"
          placeholder="42069 Ligma St."
        />
        <TextInput
          type="text"
          value={payload.apt}
          label="Apt, suite, etc."
          name="apt"
          placeholder="RM 69"
        />
        <TextInput
          type="text"
          value={payload.city}
          label="City"
          name="city"
          placeholder="Johnson"
        />
        <TextInput
          type="number"
          value={payload.zipcode}
          label="Zip code"
          name="zipcode"
          placeholder="Johnson"
        />
      </div>
    </Screen>
  );
}

type MoreInformationFormProps = {
  majors: string[]
}

function MoreInformationForm(props: MoreInformationFormProps) {
  const { majors } = props;

  const { payload, handleOnChange } = useFormContext();

  return (
    <Screen 
      header="Please enlighten us.. 🤓"
      description="Provide additional information allows to have a better understand of your background."
      back>
      <div className="flex flex-col gap-y-3">
        <TextInput
          required
          name="edu"
          value={payload.edu}
          type="email"
          placeholder="ljohnson@cpp.edu"
          label="School Email"
          onChange={handleOnChange}
        />
        <TextInput
          name="phone"
          value={payload.phone}
          type="text"
          placeholder="626-420-6969"
          label="Phone"
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
          placeholder="dani#6969"
          label="Discord"
        />
      </div>
    </Screen>
  );
}

function CompleteForm() {
  return (
    <Screen back
      header="Welcome to the circle! 🥳"
      description="yus">
      <h1>oh hi there</h1>
    </Screen>
  );
}

type OnboardingProps = {
  majors: string[]
}

function Onboarding(props: OnboardingProps) {
  const { majors } = props;

  const [form, setForm] = useState<Form>({
    firstName: "",
    lastName: "",
    major: "",
    email: "",
    edu: "",
    discord: "",
    phone: "",
    dob: ""
  });

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value
    });
  }, [form]);

  const value = useMemo(() => {
    return {
      payload: form,
      handleOnChange,
    }
  }, [form, handleOnChange]);

  return (
    <>
      <Head title="Onboarding"/>
      <main>
        <FormContext.Provider value={value}>
          <main className="max-w-7xl m-auto mt-5 px-8 h-screen">
            <div className="m-auto justify-center h-full">
              <div className="max-w-md gap-3 flex flex-col m-auto p-4 rounded-md">
                <Neighbor components={[
                  <BasicInformationForm key="basic" />,
                  <MoreInformationForm key="more" majors={majors}/>,
                  <AddressForm key="address"/>,
                  <CompleteForm key="complete"/>
                ]}/>
              </div>
            </div>
          </main>
        </FormContext.Provider>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const majors = await getMajors();

  return {
    props: {
      majors
    }
  }
}

export default Onboarding;