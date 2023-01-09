import 'styled-components';

import { MPTheme } from '@mp-frontend-react/web-mp-theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MPTheme {}
}
