# rematch-logger
A simple logger for Rematch

```
21:18:16.265 projects/init
21:18:18.274 projects/_addProject
```

## Use
```js
import { init } from '@rematch/core';
import * as models from './models';
import logger from 'rematch-logger';

const store = init({
  models,
  // Options can be overrode by calling logger({ option: value })
  plugins: [logger()],
});

```

## Options
```
log: console.log, logging function
timestamp: true, show current timestamp when the action is triggered
payload: true, show the action payload (all but .type in action's object)
```

## Build
```
npm run build
```

## License
MIT
