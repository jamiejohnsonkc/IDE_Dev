import React from 'react';
import NavMenu from './NavMenu';
import{withKnobs,text } from "@storybook/addon-knobs";

export default {
    title: 'NavMenu',
    decorators: [withKnobs]
};

export const standard = () => <NavMenu            
    siteTitle={text("siteTitle","")}    
/>;