
import { expect,it,beforeAll,afterAll,beforeEach,afterEach } from 'vitest'
import {  createjsonwebtoken } from '../../funcsTest/asyncFunc'
import {  generateTokenPromise } from '../../funcsTest/asyncFunc'
import {User} from '../../funcsTest/hooksuser'

const email = "hosseinjealous@gmail.com";
let user = new User(email);
 
it('async test', async () => {
  const email = "hosseinjealous@gmail.com";
  const token = await generateTokenPromise(email);
  expect(token).toBeDefined()
}) 
afterEach(()=>{   
  user = new User(email);
});
beforeEach(()=>{   
  console.log("beforeEach");
});
afterAll(()=>{   
  console.log("afterAll");
});
beforeAll(()=>{   
   console.log("beforeAll");
});
 
it('hooks user', async () => {
  const newEmail = "hossein@gmail.com";  
  user.updateEmail(newEmail);
  expect(user.email).toBe("hossein@gmail.com");
}) 
it('hooks user', async () => {
  expect(user.email).toBe(email);
}) 
it('hooks user property', async () => {
  expect(user).toHaveProperty("email");
}) 
 
