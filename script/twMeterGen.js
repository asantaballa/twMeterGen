var MeterReading = (function () {
    function MeterReading() {
    }
    return MeterReading;
})();
function GenBase(lowOfRange, highOfRange) {
    var meterReadings = [];
    var sizeOfRange = highOfRange - lowOfRange;
    var readingValue;
    var limit = 60;
    var i = 0;
    while (i < limit) {
        var meterReading = new MeterReading();
        meterReading.Value = Math.floor((Math.random() * sizeOfRange) + lowOfRange);
        meterReadings.push(meterReading);
        console.log(meterReading.Value);
        i++;
    }
    return meterReadings;
}
