import React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PathDetails from './PathDetails';

function PathDescription({ paths }) {
    return (
        <div>
            {Object.keys(paths).map((key, index) => {
                return (
                    <Accordion key={key + index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={index}>
                            <Typography color='navy' >{key}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                Check the method details:
                            </div>
                            <PathDetails methods={paths[key]} />
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );

}

export default PathDescription;