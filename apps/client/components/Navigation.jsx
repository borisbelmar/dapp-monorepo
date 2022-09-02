/* eslint-disable react/jsx-filename-extension */
import { useMetamask, useAddress, useDisconnect } from '@thirdweb-dev/react'
import { truncateAddress, truncateTokenBalance } from 'web3-utils'
import { InnerContainerLayout } from 'ui'
import { useAddressBalance } from 'thirdweb-hooks'

export default function Navigation() {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const { balance } = useAddressBalance(address)
  const disconnect = useDisconnect()

  return (
    <nav className="bg-gray-900">
      <InnerContainerLayout className="flex py-4 justify-between items-center">
        <div>
          <h5 className="font-bold text-xl">Super Marketplace</h5>
        </div>
        <div>
          {address ? (
            <div className="border rounded py-1 px-2 bg-white bg-opacity-10">
              <h6 className="text-xs font-bold">
                Connected as {truncateAddress(address)}
              </h6>
              <p className="text-xs">
                <span>
                  {truncateTokenBalance(balance?.displayValue)} {balance?.symbol}
                </span>
                <span className="mx-1">|</span>
                <button
                  className="underline text-cyan-500 hover:text-cyan-300"
                  onClick={disconnect}
                >
                  Disconnect
                </button>
              </p>
            </div>
          ) : (
            <button
              className="border rounded py-1 px-2 bg-white bg-opacity-10 text-sm hover:bg-opacity-20"
              onClick={connectWithMetamask}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </InnerContainerLayout>
    </nav>
  )
}
