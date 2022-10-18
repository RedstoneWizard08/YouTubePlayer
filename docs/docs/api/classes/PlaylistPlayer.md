---
id: "PlaylistPlayer"
title: "Class: PlaylistPlayer"
sidebar_label: "PlaylistPlayer"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `EventTarget`

  ↳ **`PlaylistPlayer`**

## Constructors

### constructor

• **new PlaylistPlayer**(`videos`, `root?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `videos` | [`VideoData`](../interfaces/VideoData.md)[] |
| `root?` | `HTMLElement` |

#### Overrides

EventTarget.constructor

#### Defined in

[lib/playlist.ts:11](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L11)

## Properties

### container

• `Private` `Optional` **container**: `HTMLDivElement`

#### Defined in

[lib/playlist.ts:8](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L8)

___

### currentVideo

• `Private` **currentVideo**: `number`

#### Defined in

[lib/playlist.ts:6](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L6)

___

### player

• `Private` `Optional` **player**: [`YouTubeMediaPlayer`](YouTubeMediaPlayer.md)

#### Defined in

[lib/playlist.ts:7](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L7)

___

### root

• `Optional` **root**: `HTMLElement`

#### Defined in

[lib/playlist.ts:9](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L9)

___

### videos

• `Private` **videos**: [`VideoData`](../interfaces/VideoData.md)[]

#### Defined in

[lib/playlist.ts:5](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L5)

## Methods

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

docs/node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.dom.d.ts:5154

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

docs/node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.dom.d.ts:5156

___

### getItemIcon

▸ `Private` **getItemIcon**(`index`): ``null`` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[lib/playlist.ts:26](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L26)

___

### getNextVideo

▸ `Private` **getNextVideo**(): `number`

#### Returns

`number`

#### Defined in

[lib/playlist.ts:21](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L21)

___

### init

▸ `Private` **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/playlist.ts:84](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L84)

___

### next

▸ **next**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/playlist.ts:111](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L111)

___

### previous

▸ **previous**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/playlist.ts:120](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L120)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

docs/node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.dom.d.ts:5158

___

### renderPlaylist

▸ `Private` **renderPlaylist**(): `void`

#### Returns

`void`

#### Defined in

[lib/playlist.ts:38](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L38)

___

### skipTo

▸ **skipTo**(`index`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/playlist.ts:129](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/playlist.ts#L129)
