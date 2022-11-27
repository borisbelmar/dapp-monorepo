import type { NFTMetadata } from '@thirdweb-dev/sdk'
import type { ImageProps } from 'next/image'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface NftItemVideoImageProps {
  nft: NFTMetadata
  showVideo?: boolean
  needAction?: boolean
  onPlay?: () => void
  NextImage?: (props: ImageProps) => JSX.Element
}

const NftItemVideoImage = forwardRef<HTMLVideoElement, NftItemVideoImageProps>(({
  nft,
  showVideo,
  needAction,
  onPlay,
  NextImage
}, ref) => {
  return (
    <div className="relative aspect-square overflow-hidden rounded">
      {needAction && (
        <button
          className="object-cover absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10 cursor-pointer"
          onClick={onPlay}
        >
          <p>Clic to activate play!</p>
        </button>
      )}
      {NextImage ? (
        <NextImage
          src={nft.image || ''}
          width={300}
          height={300}
          layout="responsive"
          objectFit="cover"
          className="aspect-square transition duration-300 group-hover:scale-110"
          alt={nft.name}
        />
      ) : (
        <img
          src={nft.image || ''}
          className="aspect-square w-full transition duration-300 object-cover group-hover:scale-110"
          alt={nft.name}
        />
      )}
      <motion.video
        key={nft.uri}
        ref={ref}
        src={nft.animation_url || ''}
        className="aspect-square object-cover absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: showVideo ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        loop
        controls={false}
      />
    </div>
  )
})

export default NftItemVideoImage
