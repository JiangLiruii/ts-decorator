// metadata的实际函数定义为此
// function metadata (metadataKey:any, metadataValue:any): {
//   (target: Function):void;
//   (target:Object, propertyKey: string | symbol): void;
// };
import 'reflect-metadata'

const classD:ClassDecorator = target => {
  target.prototype.sayName = function(){console.log()}
}

@classD
export class TestClassDecrator {
  constructor(private name='test') {
  }
}
