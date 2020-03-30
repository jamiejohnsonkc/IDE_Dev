import React from 'react';
import Layout from './Layout';
import{withKnobs,text } from "@storybook/addon-knobs";

export default {
    title: 'Layout',
    decorators: [withKnobs]
};

export const standard = () => <Layout            
    children={text("children","")}    
/>;