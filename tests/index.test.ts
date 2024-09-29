
import  {score} from '../src/index';

import {describe, expect, test} from '@jest/globals';


describe('score module', () => {
test('it should error if input is not an array', ()=> {
  // @ts-ignore
    expect(score('wrong')).toBe('invalid input') 
})

test('it should calculate the score when a match is wom', ()=> {
  
    expect(score(["3:1"]
      )).toBe(3) 
})

test('it should calculate the score when a match is lost', ()=> {
  
  expect(score(["3:5"]
    )).toBe(0) 
})

test('it should calculate the score when a match is drawn', ()=> {
  
  expect(score(["3:3"]
    )).toBe(1) 
})

test('it should calculate the score when there are mulitple matches', ()=> {
  
  expect(score(["3:3", "3:2", "0:4"]
    )).toBe(4) 
})
});

