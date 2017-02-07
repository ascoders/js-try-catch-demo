var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
(() => {
    const asyncMethod = (errorHandler) => (target, propertyKey, descriptor) => {
        const func = descriptor.value;
        return {
            get() {
                return (...args) => {
                    return Promise.resolve(func.apply(this, args)).catch(error => {
                        errorHandler && errorHandler(error);
                    });
                };
            },
            set(newValue) {
                return newValue;
            }
        };
    };
    function successRequest() {
        return new Promise((resolve, reject) => {
            resolve('a');
        });
    }
    function failRequest() {
        return new Promise((resolve, reject) => {
            reject('b');
        });
    }
    const asyncAction = asyncMethod(error => {
        console.log('统一异常处理', error);
    });
    class Action {
        successReuqest() {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield successRequest();
                console.log('successReuqest', '处理返回值', result);
            });
        }
        failReuqest() {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield failRequest();
                console.log('failReuqest', '处理返回值', result);
            });
        }
        allReuqest() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const result1 = yield successRequest();
                    console.log('allReuqest', '处理返回值 success', result1);
                    const result2 = yield failRequest();
                    console.log('allReuqest', '处理返回值 success', result2);
                }
                catch (error) {
                    console.log('自定义异常处理', error);
                }
            });
        }
    }
    __decorate([
        asyncAction,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Action.prototype, "successReuqest", null);
    __decorate([
        asyncAction,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Action.prototype, "failReuqest", null);
    __decorate([
        asyncAction,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Action.prototype, "allReuqest", null);
    const action = new Action();
    action.successReuqest();
    action.failReuqest();
    action.allReuqest();
})();
