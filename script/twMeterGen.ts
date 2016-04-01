
class MeterReading {
  Time: Date;
  Value: number;

  constructor() {}
}


function GenBase(lowOfRange: number, highOfRange: number)
{
    var meterReadings = [];
    var sizeOfRange = highOfRange - lowOfRange;
    var readingValue: number;
    var limit = 60;
    var i = 0;
    while(i < limit)
    {
        var meterReading = new MeterReading();
        meterReading.Value = Math.floor((Math.random() * sizeOfRange) + lowOfRange);
        meterReadings.push(meterReading);
        console.log(meterReading.Value);
        i++;
    }
    return meterReadings;
}
