import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="word" source="word" />
      </SimpleForm>
    </Edit>
  );
};
