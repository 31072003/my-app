import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    );
};

export default ExampleComponent;
