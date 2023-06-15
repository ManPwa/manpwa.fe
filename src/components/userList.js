import React from 'react'
import { List, Datagrid, TextField, DataField, EditButton, DeleteButton } from 'react-admin'

const userList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='_id'></TextField>
            <TextField source='username'></TextField>
            <EditButton basePath='/posts'/>
            <DeleteButton basePath='/posts' />
        </Datagrid>
    </List>
}

export default userList