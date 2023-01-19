import axios from "axios";
import React from "react";
import Banner from './Banner';
import JSONPretty from 'react-json-pretty';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const baseURL = "https://petstore.swagger.io/v2/swagger.json";

function PetStore() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <Banner />
                <h1 style={{
                    'margin': '20px;'
                }}>Info</h1>

                   
                <div style={{
                    'maxWidth': '800px;'
                }}>

                <JSONPretty id="json-pretty" data={post.info}></JSONPretty>
                </div>

                {Object.keys(post.paths).map((key, index) => {
                    const keyString = String(key);
                    const valueRes = post.paths[keyString];
                    return (
                        <div key={index}>
                            <h2>
                                {key}: {JSON.stringify(valueRes)}
                            </h2>

                            <hr />
                        </div>
                    );
                })}

        </div>
    );
}

export default PetStore;