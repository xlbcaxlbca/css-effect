class Simulate{
    constructor(){
        this.x = 1;
    }

    //new的实现
    static simulateNew(fn, ...args){
        var obj = {};
        obj.__proto__ = fn.prototype;
        fn.apply(obj, args);
        return obj;
    }

    //call的实现
    static SimulateCall(){
        Function.prototype.myCall = (context) => {
            //context默认为window
            context = context || window;
            //context对象添加一个方法，执行这个方法，再删除
            context.fn = this;
            let args = [...arguments].slice(1);
            var result = context.fn(...args);
            delete context.fn;
            return result;
        }
    }

    //bind实现
    static simulateBind(context){
        //1.返回一个函数，第一个参数作为this，后面的参数作为函数执行时的参数
        //2.可以用new创建对象，这时this失效
        Function.prototype.myBind = (context) => {
            if(typeof this !== "function")
            {
                throw new Error("!!!");
                return;
            }
            var self = this;
            var args = [...arguments].slice(1);
            return function F(){
                if(this instanceof F)
                {
                    return new self(...args, ...arguments);
                }
                return self.apply(context, args.concat([...arguments]));
                // self.apply(this instanceof self ? this : context, args.concat([...arguments].slice()))
            }
        }
    }

    //parse实现
    parse(obj, str){
    }
}

export{
    Simulate
}