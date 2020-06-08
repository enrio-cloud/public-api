# public-js-api
This repo contains the public js/ts api for [Enrio](https://enrio.io/). You can integrate the Enrio widget using an npm package.

API docs: http://api-docs.enrio.help/

# Usage
Install using npm:
```
npm i enrio
```

## Import package
Import using:

```
import {Enrio} from 'enrio'; 
```

After importing create a new instance of enrio and provide your account id. Your account id can be found in the [installation page](https://app.enrio.io/widget/installation).

```
const enrio = new Enrio('account-id');
enrio.setup().then(() => {
});
```
The setup method returns a promise. When the promise is resolved the widget is ready for SDK calls like open, close etc.
Only create one instance of the SDK and then re-use it in your code.

## Samples
See the sample folder for examples on how to use the SDK.


### Running samples:
Step 1)

```
npm install
```

Step 2)

```
npm run sample
```

Step 3)

Open http://localhost:3000/default.html to see the first sample. Look in sample/pages/ to see all samples.

## TypeScript
The SDK is built using TypeScript and typings are included in the published package.
