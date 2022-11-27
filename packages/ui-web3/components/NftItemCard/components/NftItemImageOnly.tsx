import type { NFTMetadata } from '@thirdweb-dev/sdk'
import type { ElementType } from 'react'
import type { ImageProps } from 'next/image'
import NftItemLayout from './NftItemLayout'
import NftItemMetadata from './NftItemMetadata'
import NftItemVideoImage from './NftItemVideoImage'

interface NftItemImageOnlyProps {
  nft: NFTMetadata,
  NextImage?: ElementType<ImageProps>
}

export default function NftItemImageOnly({ nft, NextImage }: NftItemImageOnlyProps) {
  return (
    <NftItemLayout>
      <NftItemVideoImage nft={nft} NextImage={NextImage} />
      <NftItemMetadata nft={nft} />
    </NftItemLayout>
  )
}
