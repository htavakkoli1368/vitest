
import { expect,test,describe } from 'vitest'
import {  add } from '../../funcsTest/math'


 describe('math function', () => {
  test('should work as expected', () => { 
    expect(Math.sqrt(4)).toBe(2)
  })
  test("add nan number",()=>{
  var arr =[];
  const result =add(arr)
    expect(result).toBe(0)
  })
  test("add nan number",()=>{
  let num1 =[20,30];

  const result =()=>{
    add(num1)
  }
    expect(result).not.toThrow()
  })
 })
 describe('check type of value', () => {
  test('should be number ', () => {
    let result =20;
    expect(result).toBeTypeOf("number");
  });
 })
  
