import { Card, CardContent } from "@mui/material";
import Divider from '@mui/material/Divider';
import axios from "axios";
import React, { useEffect } from 'react';
import Banner from './Banner';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const baseURL = "https://petstore.swagger.io/v2/swagger.json";

function PetStore() {
    const [post, setPost] = React.useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <Banner />
            <div style={{ margin: '20px' }}>
                <h1 style={{ margin: '20px' }}>Info: </h1>
                <Card variant="outlined" >
                    <CardContent>
                        <div style={{ overflow: 'auto' }}>
                            <pre>
                                {JSON.stringify(post.info, null, '\t')}
                            </pre>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Divider />
            <h1 style={{ margin: '20px' }}>List of paths (please click on the panel to open path details): </h1>
            <div style={{ margin: '20px' }}>
                {Object.keys(post.paths).map((key, index) => {
                    const keyString = String(key);
                    const valueRes = post.paths[keyString];
                    return (
                        <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id={index}
                        >
                            <Typography>{key}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <pre>
                                    {JSON.stringify(valueRes, null, '\t')}
                                </pre>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    );
                })}
            </div>

        </div>
    );
}

export default PetStore;