export default function truncateTokenBalance(balance: string, decimals = 4) {
  if (!balance) {
    return `0.${Array(decimals).fill(0).join('')}`
  }
  const splitted = balance.split('.')
  return `${splitted[0]}.${splitted[1].substring(0, decimals)}`
}