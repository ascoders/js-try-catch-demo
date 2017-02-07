var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const classDecorator = (target) => {
    const keys = Object.getOwnPropertyNames(target.prototype);
    console.log('classA keys,', keys);
};
let A = class A {
    sayName() {
        console.log('classA ascoders');
    }
};
A = __decorate([
    classDecorator,
    __metadata("design:paramtypes", [])
], A);
const a = new A();
a.sayName();
const propertyDecorator = (target, propertyKey) => {
    Object.defineProperty(target, propertyKey, {
        get() {
            return 'github';
        },
        set(value) {
            return value;
        }
    });
};
class B {
    constructor() {
        this.name = 'ascoders';
    }
    sayName() {
        console.log(`classB ${this.name}`);
    }
}
__decorate([
    propertyDecorator,
    __metadata("design:type", Object)
], B.prototype, "name", void 0);
const b = new B();
b.sayName();
const methodDecorator = (target, propertyKey, descriptor) => {
    return {
        get() {
            return () => {
                console.log('classC method override');
            };
        }
    };
};
class C {
    sayName() {
        console.log('classC ascoders');
    }
}
__decorate([
    methodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], C.prototype, "sayName", null);
const c = new C();
c.sayName();
