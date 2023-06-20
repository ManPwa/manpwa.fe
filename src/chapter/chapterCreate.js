import * as React from 'react';
import { useParams } from 'react-router-dom';

import {
    Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator
} from 'react-admin';
const ChapterCreate = () => {
    const { mangaId} = useParams();
    
    return (
        <Create resource={`manga/${mangaId}/chapter`}>
            <SimpleForm>
                <TextInput multiline fullWidth source="chapter" />
                <TextInput multiline fullWidth source="title" />
                <TextInput multiline fullWidth source="volumn" />
                <TextInput multiline fullWidth source="page" />
            </SimpleForm>
        </Create>
    );
};

export default ChapterCreate;