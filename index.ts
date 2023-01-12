import {util} from 'vaas-framework'

import {PlatformHttp} from './platformHttp'
import {PlatformRpc} from './platformRpc'


class PlatformServer {}
util.entryClassMixins(PlatformServer,[PlatformHttp, PlatformRpc])
export default class Platform extends PlatformServer {}