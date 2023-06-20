import React from 'react'
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
    ImageField,
    ArrayInput,
    SimpleFormIterator,
    Pagination,
    NumberInput,
    CreateButton
} from 'react-admin';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import ChapterImage from './chapterImage';
const ChapterTitle = () => {
    const record = useRecordContext();
    return record ? <span>Chapter {record.chapter}</span> : null;
};

const ManageContent = () => {
    const record = useRecordContext();
    return (<TabbedForm>
        <TabbedForm.Tab
            label="Chapter"
            sx={{ maxWidth: '100%' }}
        >
            <NumberInput multiline fullWidth source="chapter" />
            <TextInput multiline fullWidth source="title" />
            <TextInput multiline fullWidth source="volumn" />
            <NumberInput multiline fullWidth source="page" />
        </TabbedForm.Tab>
        <TabbedForm.Tab
            label="Image"
            sx={{ maxWidth: '100%' }}
        >
            <Button
                component={Link}
                to={`/chapter/${record?.id}/image`}
            >
                Add image
            </Button>
            <ReferenceManyField
                reference="chapter"
                target="image"
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
                    <TextField source="page" />
                    <ChapterImage />
                    <EditButton
                        resource='image'
                    />
                    <DeleteButton resource='image' redirect={false} />
                </Datagrid>
            </ReferenceManyField>
        </TabbedForm.Tab>
    </TabbedForm>);
}

const chapterEdit = (props) => {
    return <Edit
        title={<ChapterTitle />}
        redirect={false}
    >
        <ManageContent />
    </Edit>
}

export default chapterEdit