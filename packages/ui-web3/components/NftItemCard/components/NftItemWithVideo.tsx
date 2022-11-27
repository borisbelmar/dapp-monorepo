import type { NFTMetadata } from '@thirdweb-dev/sdk'
import type { ElementType } from 'react'
import type { ImageProps } from 'next/image'
import NftItemLayout from './NftItemLayout'
import NftItemMetadata from './NftItemMetadata'
import NftItemVideoImage from './NftItemVideoImage'
import useAnimatedNft from '../hooks/useAnimatedNft'

interface NftItemWithVideoProps {
  nft: NFTMetadata
  NextImage?: ElementType<ImageProps>
}

export default function NftItemWithVideo({ nft, NextImage }: NftItemWithVideoProps) {
  const {
    videoRef,
    videoShow,
    handleVideoPause,
    handleVideoPlay,
    needAction
  } = useAnimatedNft()

  return (
    <NftItemLayout
      onVideoPlay={handleVideoPlay}
      onVideoPause={handleVideoPause}
    >
      <NftItemVideoImage
        ref={videoRef}
        nft={nft}
        showVideo={videoShow}
        onPlay={handleVideoPlay}
        needAction={needAction}
        NextImage={NextImage}
      />
      <NftItemMetadata nft={nft} />
    </NftItemLayout>
  )
}
