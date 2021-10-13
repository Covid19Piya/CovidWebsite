import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Personal} from "./stepForm/Personal";
import { Sick } from "./stepForm/Sick";
import { Contact } from "./stepForm/Contact";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";

const defaultData = {
  name: "",
  age: "",
  gender: "",
  telephone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  time: "",
  other: "",
};

const steps = [
  { id: "personal" },
  { id: "sick" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

export const Request = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "personal":
      return <Personal {...props} />;
    case "sick":
      return <Sick {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};
