import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import './loader.style.css';

const Loader = ({loading}) => (
    <HashLoader
        size={150}
        color={"#123abc"}
        loading={loading}
    />
)

export default Loader;
