import { networksIndex } from '../../../src/runtime/networksIndex'

export const useNetworkIndex = () => {
  const networks = Object.keys(networksIndex)
  return networks
}
