import { TimeSecondsFormatPipe } from './time-seconds-format.pipe';

describe('TimeSecondsFormatPipe', () => {
  describe('Unit tests', ()=>{
    it('create an instance', () => {
      const pipe = new TimeSecondsFormatPipe();
      expect(pipe).toBeTruthy();
    });
  
    it('should should format the time',()=>{
      const pipe = new TimeSecondsFormatPipe();
      const resultFormatted = pipe.transform(30600);
  
      expect(resultFormatted).toEqual('8HH: 30MM: 0ss')
    })
  });
});
