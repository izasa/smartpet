import React, { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import axios from "axios";
import Info from './Info';
import PathDescription from './PathDescription';

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
            <Info info={post.info} />
            <Divider />
            <h1 style={{ margin: '40px' }}>List of paths (please click on the panel to open path details): </h1>
            <div style={{ margin: '40px' }}>
                <PathDescription paths={post.paths} />
            </div>
        </div>
    );
}

export default PetStore;