import * as React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useRecordContext } from 'react-admin';
import { Manga } from '../types';

const ChapterImage = () => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <Card sx={{ display: 'inline-block' }}>
            <CardMedia
                component="img"
                image={`https://demo.nater.workers.dev/${record.image_url}`}
                alt=""
                sx={{ maxWidth: '20em', maxHeight: '25em' }}
            />
        </Card>
    );
};

export default ChapterImage;
