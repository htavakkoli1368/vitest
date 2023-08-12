
import { expect,test,describe } from 'vitest'
import {  add } from '../../funcsTest/math'
import {  getresult } from '../../funcsTest/result'


 describe('math function', () => {
  // test('should work as expected', () => { 
  //   expect(Math.sqrt(4)).toBe(2)
  // })
  // test("add nan number",()=>{
  // var arr =[];
  // const result =add(arr)
  //   expect(result).toBe(0)
  // })
  test('get result ', () => {
    let result = getresult(25);
    let result2 = getresult("invalid");
    let result3 = getresult(false);
    expect(result).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });
 })

  
