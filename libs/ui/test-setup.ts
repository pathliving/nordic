import '@testing-library/jest-dom/vitest';
// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

import { setProjectAnnotations } from '@storybook/react';

setProjectAnnotations(globalStorybookConfig);
