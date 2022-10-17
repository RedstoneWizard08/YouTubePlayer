---
id: "YouTubeMediaPlayer"
title: "Class: YouTubeMediaPlayer"
sidebar_label: "YouTubeMediaPlayer"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `EventTarget`

  ↳ **`YouTubeMediaPlayer`**

## Constructors

### constructor

• **new YouTubeMediaPlayer**(`source`, `metadata`, `playlist?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VideoData`](../interfaces/VideoData.md) |
| `metadata` | [`PlayerMetadata`](../interfaces/PlayerMetadata.md) |
| `playlist?` | [`PlaylistPlayer`](PlaylistPlayer.md) |

#### Overrides

EventTarget.constructor

#### Defined in

[lib/player.ts:28](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L28)

## Properties

### autoPlay

• `Private` `Optional` **autoPlay**: `boolean`

#### Defined in

[lib/player.ts:7](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L7)

___

### buttons

• `Private` `Optional` **buttons**: `Object`

#### Index signature

▪ [key: `string`]: `HTMLButtonElement`

#### Defined in

[lib/player.ts:11](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L11)

___

### changePlayVideo

• `Private` `Optional` **changePlayVideo**: `boolean`

#### Defined in

[lib/player.ts:23](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L23)

___

### container

• `Private` `Optional` **container**: `HTMLDivElement`

#### Defined in

[lib/player.ts:18](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L18)

___

### controls

• `Private` `Optional` **controls**: `HTMLDivElement`

#### Defined in

[lib/player.ts:20](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L20)

___

### duration

• `Private` `Optional` **duration**: `number`

#### Defined in

[lib/player.ts:9](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L9)

___

### element

• `Private` `Optional` **element**: `HTMLVideoElement`

#### Defined in

[lib/player.ts:5](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L5)

___

### interval

• `Private` `Optional` **interval**: `Timer`

#### Defined in

[lib/player.ts:16](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L16)

___

### loop

• `Private` `Optional` **loop**: `boolean`

#### Defined in

[lib/player.ts:6](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L6)

___

### metadata

• `Private` **metadata**: [`PlayerMetadata`](../interfaces/PlayerMetadata.md)

#### Defined in

[lib/player.ts:25](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L25)

___

### playlist

• `Optional` **playlist**: [`PlaylistPlayer`](PlaylistPlayer.md)

#### Defined in

[lib/player.ts:26](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L26)

___

### poster

• `Private` `Optional` **poster**: `string`

#### Defined in

[lib/player.ts:17](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L17)

___

### progress

• `Private` `Optional` **progress**: `HTMLInputElement`

#### Defined in

[lib/player.ts:14](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L14)

___

### showPoster

• `Private` `Optional` **showPoster**: `boolean`

#### Defined in

[lib/player.ts:10](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L10)

___

### source

• `Private` **source**: [`VideoData`](../interfaces/VideoData.md)

#### Defined in

[lib/player.ts:13](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L13)

___

### sources

• `Private` `Optional` **sources**: [`SourceInfo`](../interfaces/SourceInfo.md)[]

#### Defined in

[lib/player.ts:8](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L8)

___

### timer

• `Private` `Optional` **timer**: `Timer`

#### Defined in

[lib/player.ts:15](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L15)

___

### timerInfo

• `Private` `Optional` **timerInfo**: `HTMLParagraphElement`

#### Defined in

[lib/player.ts:21](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L21)

___

### title

• `Private` `Optional` **title**: `HTMLParagraphElement`

#### Defined in

[lib/player.ts:22](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L22)

___

### video

• `Private` `Optional` **video**: `HTMLVideoElement`

#### Defined in

[lib/player.ts:19](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L19)

## Accessors

### isFullscreen

• `get` **isFullscreen**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/player.ts:722](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L722)

___

### isPictureInPicture

• `get` **isPictureInPicture**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/player.ts:726](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L726)

___

### isPlaying

• `get` **isPlaying**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/player.ts:730](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L730)

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

### attachEvents

▸ `Private` **attachEvents**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:311](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L311)

___

### blurTarget

▸ `Private` **blurTarget**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

[lib/player.ts:522](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L522)

___

### createControls

▸ `Private` **createControls**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:226](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L226)

___

### createSources

▸ `Private` **createSources**(): `HTMLSourceElement`[]

#### Returns

`HTMLSourceElement`[]

#### Defined in

[lib/player.ts:674](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L674)

___

### createTitle

▸ `Private` **createTitle**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:214](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L214)

___

### createUpdateLoop

▸ `Private` **createUpdateLoop**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:664](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L664)

___

### deleteUpdateLoop

▸ `Private` **deleteUpdateLoop**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:670](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L670)

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

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:734](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L734)

___

### getFormattedDuration

▸ `Private` **getFormattedDuration**(): `string`

#### Returns

`string`

#### Defined in

[lib/player.ts:287](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L287)

___

### getSourceType

▸ `Private` **getSourceType**(`src`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |

#### Returns

`string`

#### Defined in

[lib/player.ts:689](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L689)

___

### init

▸ `Private` **init**(`skip?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `skip?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/player.ts:86](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L86)

___

### loopEnded

▸ `Private` **loopEnded**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:539](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L539)

___

### noopEvent

▸ `Private` **noopEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

[lib/player.ts:518](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L518)

___

### onChangeReady

▸ `Private` **onChangeReady**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:78](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L78)

___

### onFullscreenChange

▸ `Private` **onFullscreenChange**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:631](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L631)

___

### onKeyDown

▸ `Private` **onKeyDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[lib/player.ts:596](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L596)

___

### onKeyUp

▸ `Private` **onKeyUp**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[lib/player.ts:624](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L624)

___

### onPictureInPictureActivate

▸ `Private` **onPictureInPictureActivate**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:397](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L397)

___

### onPictureInPictureDeactivate

▸ `Private` **onPictureInPictureDeactivate**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:404](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L404)

___

### onVideoPause

▸ `Private` **onVideoPause**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:504](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L504)

___

### onVideoPlay

▸ `Private` **onVideoPlay**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:497](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L497)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:592](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L592)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:578](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L578)

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

### render

▸ `Private` **render**(`skip?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skip?` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/player.ts:143](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L143)

___

### resetControlsTimer

▸ `Private` **resetControlsTimer**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:408](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L408)

___

### seekBackward

▸ `Private` **seekBackward**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:486](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L486)

___

### seekForward

▸ `Private` **seekForward**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:482](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L482)

___

### seekTo

▸ `Private` **seekTo**(`details`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `details` | `Required`<`Pick`<`MediaSessionActionDetails`, ``"seekTime"``\>\> & `MediaSessionActionDetails` |

#### Returns

`void`

#### Defined in

[lib/player.ts:490](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L490)

___

### setVideo

▸ **setVideo**(`data`, `play?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`VideoData`](../interfaces/VideoData.md) |
| `play?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/player.ts:42](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L42)

___

### setupMetadata

▸ `Private` **setupMetadata**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:428](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L428)

___

### stop

▸ `Private` **stop**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:511](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L511)

___

### timeUpdate

▸ `Private` **timeUpdate**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:561](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L561)

___

### toggleFullscreen

▸ **toggleFullscreen**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:651](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L651)

___

### togglePictureInPicture

▸ **togglePictureInPicture**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:659](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L659)

___

### togglePlay

▸ **togglePlay**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:549](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L549)

___

### triggerAutoPlay

▸ `Private` **triggerAutoPlay**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:534](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L534)

___

### updateGradient

▸ `Private` **updateGradient**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:709](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L709)

___

### updateVideoTime

▸ `Private` **updateVideoTime**(): `void`

#### Returns

`void`

#### Defined in

[lib/player.ts:526](https://github.com/RedstoneWizard08/YouTubePlayer/blob/592ae14/lib/player.ts#L526)
