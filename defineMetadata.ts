import 'reflect-metadata'

class DefineMetadata {
  static staticMethod() {}
  static staticProperty = 'static'
  getName() {}
}
const type = 'type'
Reflect.defineMetadata(type, 'class', DefineMetadata)
Reflect.defineMetadata(type, 'staticMethod', DefineMetadata.staticMethod)
Reflect.defineMetadata(type, 'staticMethos', DefineMetadata, 'staticMethod')
Reflect.defineMetadata(type, 'method', DefineMetadata.prototype.getName)
Reflect.defineMetadata(type, 'staticProperty', DefineMetadata, 'staticProperty')
const t1 = Reflect.getMetadata(type, DefineMetadata)
// const t2 = Reflect.getMetadata(type, DefineMetadata.staticMethod)
const t2 = Reflect.getMetadata(type, DefineMetadata, 'staticMethod')
const t3 = Reflect.getMetadata(type, DefineMetadata.prototype.getName)
const t4 = Reflect.getMetadata(type, DefineMetadata,'staticProperty')
console.log(t1,t2,t3,t4)
