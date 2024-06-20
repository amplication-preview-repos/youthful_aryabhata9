import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const GuessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="guess" source="guess" />
        <BooleanInput label="isCorrect" source="isCorrect" />
      </SimpleForm>
    </Edit>
  );
};
