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
    TextInput,
    ImageInput,
    ImageField,
    ArrayInput,
    SimpleFormIterator,
    Pagination,
    CreateButton,
    useCreatePath,
    Button
} from 'react-admin';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Cover from './cover';

const MangaTitle = () => {
    const record = useRecordContext();
    return record ? <span>{record.title}</span> : null;
};

const ManageContent = () => {
    const record = useRecordContext();
    return (<TabbedForm>
        <TabbedForm.Tab
            label="Manga"
            sx={{ maxWidth: '100%' }}
        >
            <Stack direction="row" justifyContent="space-between">
                <div>
                    <Cover />
                    <ImageInput sx={{ maxWidth: '16em' }} source="file" multiple={false}>
                        <ImageField source="src" title="title" />
                    </ImageInput>
                </div>
                <div style={{ paddingLeft: 20 }}>
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
                </div>
            </Stack>
        </TabbedForm.Tab>
        <TabbedForm.Tab
            label="Chapter"
            sx={{ maxWidth: '100%' }}
        >
            {/* <CreateButton resource={`chapter?mangaId=`}/> */}

            <Button
                component={Link}
                to={`/manga/${record?.id}/chapter`}
            >
                Add chapter
            </Button>
            <ReferenceManyField
                reference="manga"
                target="chapter"
                pagination={<Pagination />}
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
                    <EditButton
                        resource='chapter'
                        redirect={false}
                    />
                    <DeleteButton resource='chapter' redirect={false} />
                </Datagrid>
            </ReferenceManyField>
        </TabbedForm.Tab>
        <TabbedForm.Tab
            label="Comment"
            sx={{ maxWidth: '100%' }}
        >
            <ReferenceManyField
                reference="manga"
                target="comment"
                pagination={<Pagination />}
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
                    <TextField source="user_id" />
                    <TextField source="user.username" label="User Name" />
                    <TextField source="content" />
                    <DeleteButton resource='comment' redirect={false} />
                </Datagrid>
            </ReferenceManyField>
        </TabbedForm.Tab>
    </TabbedForm>);
}

const MangaEdit = () => {

    return (
        <Edit title={<MangaTitle />}
            redirect={false}>
            <ManageContent />
        </Edit>
    );
};

const req = [required()];

export default MangaEdit;
