import React from 'react'
import { List, Datagrid, TextField, DataField, EditButton, DeleteButton } from 'react-admin'

const PostList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='_id'></TextField>
            <TextField source='title'></TextField>
            <TextField source='description'></TextField>
            <EditButton basePath='/posts'/>
            <DeleteButton basePath='/posts' />
        </Datagrid>
    </List>
}

export default PostList