/**
 * 装饰器
 */

/**
 * class decorator
 */
const classDecorator = (target: any) => {
    const keys = Object.getOwnPropertyNames(target.prototype)
    console.log('classA keys,', keys)
}

@classDecorator
class A {
    sayName() {
        console.log('classA ascoders')
    }
}
const a = new A()
a.sayName()

/**
 * property decorator
 */
const propertyDecorator = (target: any, propertyKey: string | symbol) => {
    Object.defineProperty(target, propertyKey, {
        get() {
            return 'github'
        },
        set(value: any) {
            return value
        }
    })
}

class B {
    @propertyDecorator
    private name = 'ascoders'

    sayName() {
        console.log(`classB ${this.name}`)
    }
}
const b = new B()
b.sayName()

/**
 * method decorator
 */
const methodDecorator = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    return {
        get() {
            return () => {
                console.log('classC method override')
            }
        }
    }
}

class C {
    @methodDecorator
    sayName() {
        console.log('classC ascoders')
    }
}
const c = new C()
c.sayName()