import 'reflect-metadata'

const nameSymbol = Symbol('lorry')
@Reflect.metadata('name', 'lorry')
class MetaDataClass {
  @Reflect.metadata(nameSymbol, 'nihao')
  public name = 'origin'
  public getName () {
    console.log(this.name)
  }
}
const value = Reflect.getMetadata('name', MetaDataClass);
const metadataInstance = new MetaDataClass
const name = Reflect.getMetadata(nameSymbol, metadataInstance, 'name')
console.log(name)
