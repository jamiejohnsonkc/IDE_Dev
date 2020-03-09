import React from 'react';
import Header from './Header';
import{withKnobs,text } from "@storybook/addon-knobs";

export default {
    title: 'Header',
    decorators: [withKnobs]
};

export const standard = () => <Header            
    siteTitle={text("siteTitle","")}    
/>;