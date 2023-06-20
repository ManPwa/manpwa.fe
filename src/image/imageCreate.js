import * as React from 'react';
import { useParams } from 'react-router-dom';

import {
    Create, SimpleForm, TextInput, ImageInput, ImageField
} from 'react-admin';
import ChapterImage from '../chapter/chapterImage';
const ImageCreate = () => {
    const { chapterId } = useParams();

    return (
        <Create resource={`chapter/${chapterId}/image`}>
            <SimpleForm>
                <ImageInput sx={{ maxWidth: '16em' }} source="file" multiple={false}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput multiline fullWidth source="page" />
            </SimpleForm>
        </Create>
    );
};

export default ImageCreate;