import { Box } from '@mui/material';
import React from 'react'
import {
    ListBase,
    Pagination,
    Title,
    FilterLiveSearch,
    CreateButton
} from 'react-admin'
import { Stack } from '@mui/material';
import ImageList from './GridList';
const mangaList = (props) => {
    return <ListBase perPage={48}>
        <Title defaultTitle="Mangas" />
        <Box display="flex">
            <Box width={'auto' ? 'auto' : 'calc(100% - 16em)'}>
                <Stack direction="row" justifyContent="space-between">
                    <FilterLiveSearch />
                    <CreateButton />
                </Stack>
                <ImageList />
                <Pagination rowsPerPageOptions={[48, 72]} />
            </Box>
        </Box>
    </ListBase>
}

export default mangaList;