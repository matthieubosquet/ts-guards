import * as index from "./index"
// @ponicode
describe("index.isNotNullOrUndefined", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.isNotNullOrUndefined(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.isNotNullOrUndefined(50)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.isNotNullOrUndefined(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.isNotNullOrUndefined(30)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.isNotNullOrUndefined("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.isNotNullOrUndefined(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
