import {ENVIRONMENT, Environment} from '../enums'
import getShortBranchName from './get-short-branch-name'

const getSuffixedAppKey = (
  appKey: string,
  environment: Environment,
  branch: string
): string => {
  if (environment === ENVIRONMENT.PRODUCTION) return appKey
  if (environment === ENVIRONMENT.STAGING) return `${appKey}-staging`
  const suffix = getShortBranchName(branch)
  return `${appKey}-dev-${suffix}`
}

export default getSuffixedAppKey
