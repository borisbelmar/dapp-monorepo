/* eslint-disable react/jsx-filename-extension */
import { useMetamask, useAddress, useDisconnect, useBalance } from '@thirdweb-dev/react'
import { InnerContainerLayout } from 'ui'
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
          <h5 className="font-bold text-xl">Super Marketplace</h5>
        </div>
        <Web3ConnectionBtn
          address={address}
          balance={balance}
          onConnect={connectWithMetamask}
          onDisconnect={disconnect}
        />
      </InnerContainerLayout>
    </nav>
  )
}
