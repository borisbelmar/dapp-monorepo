import { useContract, useNFTs } from '@thirdweb-dev/react'
import Image from 'next/image'
import { InnerContainerLayout, MainLayout } from 'ui'
import { NftItemCard } from 'ui-web3'
import Navigation from '../Navigation'

export default function Home() {
  const { contract } = useContract(process.env.NEXT_PUBLIC_TEST_NFT_COLLECTION)
  const { data: nfts } = useNFTs(contract)

  return (
    <MainLayout NavigationComponent={Navigation}>
      <InnerContainerLayout className="py-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">
            DAZN #Shorts Collection
          </h1>
          <p className="">
            This collection has {nfts?.length} NFTs
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-2">
          {nfts?.map(nft => (
            <NftItemCard key={nft.metadata.uri} nft={nft.metadata} NextImage={Image} />
          ))}
        </ul>
      </InnerContainerLayout>
    </MainLayout>
  )
}
