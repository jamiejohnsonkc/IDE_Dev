import React from 'react';
import { Button, T0, T1, T2, T3, T4, T5 } from './';

export default {
  title: 'Text',
};

export const standard = props => (
  <div>
    <Button>This is the button</Button>
    <T0 color="namedColors.testy">This is the new text</T0>
    <T1 color="namedColors.testy">This is the new text</T1>
    <T2 color="namedColors.testy">This is the new text</T2>
    <T3 color="namedColors.testy">This is the new text</T3>
    <T4 color="namedColors.testy">This is the new text</T4>
    <T5 color="namedColors.testy">This is the new text </T5>
  </div>
);
