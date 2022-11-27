import type { NFTMetadata } from '@thirdweb-dev/sdk'
import type { ImageProps } from 'next/image'
import NftItemImageOnly from './components/NftItemImageOnly'
import NftItemWithVideo from './components/NftItemWithVideo'

interface NftItemCardProps {
  nft: NFTMetadata
  NextImage?: (props: ImageProps) => JSX.Element
}

export default function NftItemCard({ nft, NextImage }: NftItemCardProps) {
  return nft?.animation_url ? (
    <NftItemWithVideo nft={nft} NextImage={NextImage} />
  ) : (
    <NftItemImageOnly nft={nft} NextImage={NextImage} />
  )
}
