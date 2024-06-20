import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const GuessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="guess" source="guess" />
        <BooleanInput label="isCorrect" source="isCorrect" />
      </SimpleForm>
    </Create>
  );
};
