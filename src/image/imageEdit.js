import * as React from 'react';
import { useParams } from 'react-router-dom';

import {
    Edit, SimpleForm, TextInput, ImageInput, ImageField
} from 'react-admin';
import ChapterImage from '../chapter/chapterImage';


const imageEdit = () => {
    return (
        <Edit redirect={false}>
            <SimpleForm>
                <ChapterImage/>
                <ImageInput sx={{ maxWidth: '16em' }} source="file" multiple={false}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput multiline fullWidth source="page" />
            </SimpleForm>
        </Edit>
    );
};

export default imageEdit;