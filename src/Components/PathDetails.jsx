import React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function PathDetails({ methods }) {
    return (
        <div>
            {Object.keys(methods).map((method, index) => {
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
            })}

        </div>
    );
}

export default PathDetails;