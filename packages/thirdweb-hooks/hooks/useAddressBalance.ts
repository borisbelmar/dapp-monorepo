import { useToken } from '@thirdweb-dev/react'
import type { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'

const NATIVE_TOKEN_ADDRESS = '0x0000000000000000000000000000000000001010'

export interface AddressBalance {
  symbol: string
  decimals: number
  name: string
  value: BigNumber
  displayValue: string
}

export default function useAddressBalance(address: string | undefined, tokenAddress?: string) {
  const [balance, setBalance] = useState<AddressBalance | null>(null)
  const token = useToken(tokenAddress || NATIVE_TOKEN_ADDRESS)

  useEffect(() => {
    if (address && token) {
      token.balanceOf(address).then(val => setBalance(val))
    }
  }, [address, token])

  return {
    balance
  }
}
