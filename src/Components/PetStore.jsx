import React, { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import axios from "axios";
import Info from './Details/Info';
import PathDescription from './PathDescription';
import './PetStore.css'

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
        <div className="PetStore" >
            <Info info={post.info} />
            <Divider />
            <h1 className="PathContainer" >List of paths (please click on the panel to open path details): </h1>
            <div className="PathContainer" >
                <PathDescription paths={post.paths} />
            </div>
        </div>
    );
}

export default PetStore;