import { Box } from '@mui/material';
import React from 'react'
import {
    ListBase,
    Pagination,
    Title 
} from 'react-admin'
import ImageList from './GridList';
const mangaList = (props) => {
    return <ListBase perPage={24}>
        <Title defaultTitle="Mangas" />
        <Box display="flex">
            <Box width={'auto' ? 'auto' : 'calc(100% - 16em)'}>
                <ImageList />
                <Pagination rowsPerPageOptions={[24, 48, 72]} />
            </Box>
        </Box>
    </ListBase>
}

export default mangaList;