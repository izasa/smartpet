
import React  from 'react';
import { Card, CardContent } from "@mui/material";
import Banner from './Banner';

function Info({info}) {
    return (
        <>
            <Banner />
            <div style={{ margin: '40px' }}>
                <h1 style={{ margin: '40px' }}>Info: </h1>
                <Card variant="outlined" >
                    <CardContent>
                        <div style={{ overflow: 'auto' }}>
                            <pre>
                                {JSON.stringify(info, null, '\t')}
                            </pre>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default Info;