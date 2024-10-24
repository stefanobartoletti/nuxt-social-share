import { networksBase } from '../../../src/runtime/networksIndex'

export const useNetworkIndex = () => {
  const networks = Object.keys(networksBase)
  return networks
}
