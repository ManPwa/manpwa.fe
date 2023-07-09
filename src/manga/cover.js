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
                image={`https://demo.nater.workers.dev/${record.cover_art_url}`}
                alt=""
                sx={{ maxWidth: '20em', maxHeight: '25em' }}
            />
        </Card>
    );
};

export default Cover;
