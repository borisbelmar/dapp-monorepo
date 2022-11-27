import type { NFTMetadata } from '@thirdweb-dev/sdk'

interface NftItemImageOnlyProps {
  nft: NFTMetadata
}

export default function NftItemMetadata({ nft }: NftItemImageOnlyProps) {
  return (
    <div className="mb-1 mt-2">
      <h3 className="font-bold mb-1 text-sm">{nft.name}</h3>
      <span className="border border-cyan-500 text-cyan-500 font-bold text-xs p-1 rounded">
        10.4 MATIC
      </span>
    </div>
  )
}
