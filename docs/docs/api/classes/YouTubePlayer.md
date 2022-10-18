---
id: "YouTubePlayer"
title: "Class: YouTubePlayer"
sidebar_label: "YouTubePlayer"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new YouTubePlayer**()

## Methods

### createPlayer

▸ `Static` **createPlayer**(`source`, `metadata`): [`YouTubeMediaPlayer`](YouTubeMediaPlayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`VideoData`](../interfaces/VideoData.md) |
| `metadata` | [`PlayerMetadata`](../interfaces/PlayerMetadata.md) |

#### Returns

[`YouTubeMediaPlayer`](YouTubeMediaPlayer.md)

#### Defined in

[lib/index.ts:18](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/index.ts#L18)

___

### createPlaylistPlayer

▸ `Static` **createPlaylistPlayer**(`sources`, `root?`): [`PlaylistPlayer`](PlaylistPlayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [`VideoData`](../interfaces/VideoData.md)[] |
| `root?` | `HTMLElement` |

#### Returns

[`PlaylistPlayer`](PlaylistPlayer.md)

#### Defined in

[lib/index.ts:22](https://github.com/RedstoneWizard08/YouTubePlayer/blob/efef6d9/lib/index.ts#L22)
