import React from 'react';
import { Card, CardContent } from "@mui/material";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Banner from '../Banner';

function Info({ info }) {
    return (
        <>
            <Banner />
            <div style={{ margin: '40px' }}>
                <Card variant="outlined" >
                    <CardContent>
                        <Typography variant="h5" sx={{ fontSize: 22 }} color="text.secondary">
                             {info.description}
                        </Typography>
                        <Divider style={{ margin: '10px 0 10px 0' }} />
                        <Typography> Version {info.version}</Typography>
                        <Typography> Title: {info.title}</Typography>
                        <Typography> Terms Of Service: {info.termsOfService}</Typography>
                        <Typography >
                            Contact: {info.contact.email}
                        </Typography>
                        <p> License: </p>
                        <Typography
                            variant="h5"
                            sx={{ fontSize: 14 }}
                            color="text.secondary">{info.license.name}  </Typography>
                        <Link href={info.license.url}>{info.license.url}</Link>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default Info;