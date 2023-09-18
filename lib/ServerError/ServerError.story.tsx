import { storiesOf } from '@storybook/react';
import attributes from './attributes.json';
import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { ServerError } from './ServerError';

storiesOf('ServerError', module).add('ServerError', () => (
  <StoryWrapper attributes={attributes} component={ServerError} />
));