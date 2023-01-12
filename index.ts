import {PlatformHttp} from './platformHttp'
import {PlatformRpc} from './platformRpc'

function classMixins(baseClass: any, classItemList: any[]) {
    for (const classItem of classItemList) {
      const funcNameList = Object.getOwnPropertyNames(classItem.prototype)
      for(const funcName of funcNameList) {
        if(baseClass.prototype[funcName]) {
          if(funcName ==='__appConfig') {
            baseClass.prototype[funcName] = new Map([
              ...baseClass.prototype[funcName].entries(),
              ...classItem.prototype[funcName].entries()
            ])
            continue
          }
          if(funcName ==='constructor') {
            continue
          }
          throw new Error('该方法已存在，不能进行classMixins')
        }
        baseClass.prototype[funcName] = classItem.prototype[funcName]
      }
    }
}
class PlatformServer {}
classMixins(PlatformServer,[PlatformHttp, PlatformRpc])
export default class Platform extends PlatformServer {}