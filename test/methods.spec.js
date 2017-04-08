/* eslint-env chai, mocha */
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const DateTimeOffset = require('../DateTimeOffset').default;

chai.use(dirtyChai);
const expect = chai.expect;

const customTime = '2017-04-10T00:00:00Z';
const customTime2 = '2017-04-09T23:50:00Z';
const customTime3 = '2017-04-10T00:10:00Z';
const customTimeKST = '2017-04-10 09:00:00';
const customTime2KST = '2017-04-10 08:50:00';
const customTime3KST = '2017-04-10 09:10:00';

describe('DateTimeOffset Method Tests', () => {
  describe(`const datetime = new DateTimeOffset(${customTime})`, () => {
    it('datetime.addDays(10) expect 2017-04-20 00:00:00', () => {
      const t = new DateTimeOffset(customTime).addDays(10);
      expect(t.toString()).to.be.equal('2017-04-20 00:00:00');
    });
    it('datetime.addDays(-5) expect 2017-04-05 00:00:00', () => {
      const t = new DateTimeOffset(customTime).addDays(-5);
      expect(t.toString()).to.be.equal('2017-04-05 00:00:00');
    });
    it('datetime.addDays(\'aaaa\') expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addDays.bind(t, 'aaaa')).to.throw(Error, /not typeof/);
    });
    it('datetime.addDays(null) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addDays.bind(t, null)).to.throw(Error, /not typeof/);
    });
    it('datetime.addDays(undefined) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addDays.bind(t)).to.throw(Error, /1 number/);
    });
    it('datetime.addDays(1, 1) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addDays.bind(t, 1, 1)).to.throw(Error, /1 number/);
    });
    it('datetime.addHours(10) expect 2017-04-19 10:00:00');
    it('datetime.addHours(-10) expect 2017-04-09 14:00:00');
    it('datetime.addMonth(5) expect 2017-09-10 00:00:00');
    it('datetime.addMonth(-3) expect 2017-01-10 00:00:00');
    it('datetime.addSeconds(50) expect 2017-04-10 00:00:50');
    it('datetime.addSeconds(120) expect 2017-04-10 00:02:00');
    it('datetime.addSeconds(-50) expect 2017-04-09 23:59:10');
    it('datetime.addYears(10) expect 2027-04-10 00:00:00');
    it('datetime.addYears(-10) expect 2007-04-10 00:00:00');
    it(`datetime.compareTo(new DateTimeOffset(${customTime})) expect 0`);
    it(`datetime.compareTo(new DateTimeOffset(${customTime2})) expect +number`);
    it(`datetime.compareTo(new DateTimeOffset(${customTime3})) expect -number`);
    it(`datetime.compareTo(new DateTimeOffset(${customTimeKST}, 'KST')) expect 0`);
    it(`datetime.compareTo(new DateTimeOffset(${customTime2KST}, 'KST')) expect +number`);
    it(`datetime.compareTo(new DateTimeOffset(${customTime3KST}, 'KST')) expect -number`);
    it(`datetime.equals(new DateTimeOffset(${customTime})) expect true`);
    it(`datetime.equals(new DateTimeOffset(${customTime2})) expect false`);
    it(`datetime.equals(new DateTimeOffset(${customTimeKST}, 'KST')) expect true`);
    it(`datetime.equals(new DateTimeOffset(${customTime2KST}, 'KST')) expect false`);
  });
  describe('Static Methods', () => {
    it(`compare(new DateTimeOffset(${customTime}), new DateTimeOffset(${customTime})) expect 0`);
    it(`compare(new DateTimeOffset(${customTime}), new DateTimeOffset(${customTime2})) expect +number`);
    it(`compare(new DateTimeOffset(${customTime}), new DateTimeOffset(${customTime3})) expect -number`);
    it(`equals(new DateTimeOffset(${customTime}, 'UTC'), new DateTimeOffset(${customTime}, 'UTC')) expect true`);
    it(`equals(new DateTimeOffset(${customTime}, 'UTC'), new DateTimeOffset(${customTime2}, 'UTC')) expect false`);
    it(`equals(new DateTimeOffset(${customTime}, 'UTC'), new DateTimeOffset(${customTimeKST}, 'KST')) expect true`);
    it(`equals(new DateTimeOffset(${customTime2}, 'UTC'), new DateTimeOffset(${customTimeKST}, 'KST')) expect false`);
  });
});
