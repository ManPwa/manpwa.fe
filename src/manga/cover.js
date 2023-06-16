import * as React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useRecordContext } from 'react-admin';
import { Manga } from '../types';

const Cover = () => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <Card sx={{ display: 'inline-block' }}>
            <CardMedia
                component="img"
                image={record.cover_art_url}
                alt=""
                sx={{ maxWidth: '42em', maxHeight: '15em' }}
            />
        </Card>
    );
};

export default Cover;
