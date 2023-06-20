import React from 'react'
import { List, Datagrid, TextField, BooleanField, EditButton, DeleteButton } from 'react-admin'

const userList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='username'></TextField>
            <BooleanField source="is_admin" />
            <TextField source='email'></TextField>
            <DeleteButton resource='user' redirect={false} />
        </Datagrid>
    </List>
}

export default userList