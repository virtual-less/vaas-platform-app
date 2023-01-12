import {Decorator} from 'vaas-framework'
import {deploy} from './deploy/index'

interface rpcParams {
    params:NodeJS.Dict<any>,
    context?:NodeJS.Dict<any>,
}

export class PlatformRpc {
    @Decorator.VaasServer({type:'rpc'})
    async deployRpc({params,context}:rpcParams) {
        const {
            appBuildS3Key,
            appName,
            version
        } = params
        const data = await deploy({appName, version, appBuildS3Key})
        return {data, context}
    }
}