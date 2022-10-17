---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Importing the library

To import the library, use this code:

<Tabs groupId="language-formats">
  <TabItem value="cjs" label="CommonJS Modules" default>

```js
const YouTubePlayer = require("@redstonewizard08/youtube-player");
```
  </TabItem>
  <TabItem value="esm" label="ES Modules">

```ts
import YouTubePlayer from "@redstonewizard08/youtube-player";
```
  </TabItem>
  <TabItem value="ts" label="TypeScript">

```ts
// Importing the "type VideoData" is optional, but it
// allows you to type your variables more effectively.
import YouTubePlayer, { type VideoData } from "@redstonewizard08/youtube-player";
```
  </TabItem>
</Tabs>
