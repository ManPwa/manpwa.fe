import * as React from 'react';
import {
    Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator
} from 'react-admin';
const mangaCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput multiline fullWidth source="title" />
            <TextInput multiline fullWidth source="year" />
            <TextInput multiline fullWidth source="status" />
            <TextInput multiline fullWidth source="demographic" />
            <TextInput multiline fullWidth source="author" />
            <ArrayInput multiline fullWidth source="tags">
                <SimpleFormIterator inline>
                    <TextInput helperText={false} />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline fullWidth source="original_language" />
            <TextInput multiline fullWidth source="description" />
        </SimpleForm>
    </Create>
);

export default mangaCreate;