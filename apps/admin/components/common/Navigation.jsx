import { useMetamask, useAddress, useDisconnect, useBalance } from '@thirdweb-dev/react'
import { InnerContainerLayout, ThemeSwitcherButton } from 'ui'
import { Web3ConnectionBtn } from 'ui-web3'

export default function Navigation() {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const { data: balance } = useBalance()
  const disconnect = useDisconnect()

  return (
    <nav className="bg-gray-50 dark:bg-gray-900">
      <InnerContainerLayout className="flex py-4 justify-between items-center">
        <div>
          <h5 className="font-bold text-xl">
            NFT Marketplace Dashboard
          </h5>
        </div>
        <div className="flex h-12 gap-2">
          <Web3ConnectionBtn
            address={address}
            balance={balance}
            onConnect={connectWithMetamask}
            onDisconnect={disconnect}
          />
          <ThemeSwitcherButton />
        </div>
      </InnerContainerLayout>
    </nav>
  )
}
