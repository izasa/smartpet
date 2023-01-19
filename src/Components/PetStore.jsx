
import Divider from '@mui/material/Divider';
import axios from "axios";
import React, { useEffect } from 'react';
//import PathDetails from './PathDetails';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Info from './Info';

const baseURL = "https://petstore.swagger.io/v2/swagger.json";

function PetStore() {
    const [post, setPost] = React.useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    const getMethodDetails = (methods) =>
    Object.keys(methods).map((method, index) => {
        return (
            <div style={{ margin: '20px' }}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id={index}>
                        <Typography>Method: <strong>{method}</strong></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Parameters:</Typography>
                        <pre>
                            {JSON.stringify(methods[method]['parameters'], null, '\t')}
                        </pre>
                        <Typography>Responses:</Typography>
                        <pre>
                            {JSON.stringify(methods[method]['responses'], null, '\t')}
                        </pre>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    })


    return (
        <div>
            <Info info={post.info}/>
            <Divider />
            <h1 style={{ margin: '40px' }}>List of paths (please click on the panel to open path details): </h1>
            <div style={{ margin: '40px' }}>
                {Object.keys(post.paths).map((key, index) => {
                    return (
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id={index}>
                                <Typography  style={{ color: 'navy' }} >{key}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    Open path description on separate page: Button TODO
                                </div>
                                <div>
                                    Whole path description in JSON:
                                </div>
                                {getMethodDetails(post.paths[key])}
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>

        </div>
    );
}

export default PetStore;