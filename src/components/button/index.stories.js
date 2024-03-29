import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Button' };

export const withTexgt = () => <Button>Hello Button</Button>;

export const withEmoji = () => (<Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>);
