import * as React from 'react';
import {
    Edit,
    required,
    useRecordContext,
    ReferenceManyField,
    TabbedForm,
    Datagrid,
    EditButton,
    DeleteButton,
    TextField,
    NumberField,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField
} from 'react-admin';
import Cover from './cover';

const MangaTitle = () => {
    const record = useRecordContext();
    return record ? <span>{record.title}</span> : null;
};

const mangaEdit = () => (
    <Edit title={<MangaTitle />}>
        <TabbedForm>
            <TabbedForm.Tab
                label="Manga"
                sx={{ maxWidth: '40em' }}
            >
                <Cover />
                <ImageInput source="file">
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput multiline fullWidth source="title" />
                <TextInput multiline fullWidth source="year" />
                <TextInput multiline fullWidth source="status" />
                <TextInput multiline fullWidth source="demographic" />
                <TextInput multiline fullWidth source="author" />
                <TextInput multiline fullWidth source="tags" />
                <TextInput multiline fullWidth source="original_language" />
                <TextInput multiline fullWidth source="description" />
            </TabbedForm.Tab>
            <TabbedForm.Tab
                label="Chapter"
                sx={{ maxWidth: '40em' }}
            >
                <ReferenceManyField
                    reference="manga"
                    target="chapter"
                >
                    <Datagrid
                        sx={{
                            width: '100%',
                            '& .column-comment': {
                                maxWidth: '20em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            },
                        }}
                    >
                        <TextField source="chapter" />
                        <TextField source="title" />
                        <TextField source="volumn" />
                        <TextField source="page" />
                        <EditButton resource='chapter' />
                        <DeleteButton resource='chapter' />
                    </Datagrid>
                </ReferenceManyField>
            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);

const req = [required()];

export default mangaEdit;
