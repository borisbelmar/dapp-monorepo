import { truncateAddress, truncateTokenBalance } from 'web3-utils'

interface Props {
  address: string
  balance: {
    displayValue: string
    symbol: string
  },
  onConnect: () => void
  onDisconnect: () => void
}

export default function Web3ConnectionBtn({
  address,
  onConnect,
  onDisconnect,
  balance
}: Props) {
  if (address) {
    return (
      <div className="border rounded flex flex-col justify-center py-1 px-2 bg-white bg-opacity-10">
        <h6 className="text-xs font-bold">
          Connected as {truncateAddress(address)}
        </h6>
        <p className="text-xs">
          <span>
            {truncateTokenBalance(balance?.displayValue)} {balance?.symbol}
          </span>
          <span className="mx-1">|</span>
          <button
            className="underline text-cyan-500 hover:text-cyan-300 focus:font-bold"
            onClick={onDisconnect}
          >
            Disconnect
          </button>
        </p>
      </div>
    )
  }

  return (
    <button
      className="block border rounded py-1 px-2 bg-white bg-opacity-10 text-sm hover:bg-opacity-20"
      onClick={onConnect}
    >
      Connect Wallet
    </button>
  )
}
