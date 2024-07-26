function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = false;
    const match = input.match(/^\d*(?:[.]\d+)?(?:[/]\d+(?:[.]\d+)?)?(?=[a-z]*$)/i)
    if (match){
      const numberStr = match[0];
      if(numberStr.includes('/')){
        const [numerator, denominator] = numberStr.split('/').map(Number);
        result = numerator/denominator
      }
      else {
        if(numberStr) result = parseFloat(numberStr);
        else result = 1;
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result = "";
    const match = input.match(/((?!\d)[a-z]+)$/i)
    if (match) {
      switch(match[0].toLowerCase()){
        
        case "l":
          result = "L"
          break;

        case "kg":
        case "lbs":
        case "gal":
        case "km":
        case "mi":
          result = match[0].toLowerCase();
          break;
        default:
          result = "";
      }
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    let unit = initUnit.toLowerCase();
    switch(unit){
      case "gal":
        result = "L"
        break;

      case "mi":
        result = "km"
        break;
      
      case "lbs":
        result = "kg"
        break;

      case "l":
        result = "gal"
        break;

      case "km":
        result = "mi"
        break;
      
      case "kg":
        result = "lbs"
        break;

      default:
        result = ""
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit){
      case "gal":
        result = "gallons"
        break;

      case "mi":
        result = "miles"
        break;
      
      case "lbs":
        result = "pounds"
        break;

      case "L":
        result = "liters"
        break;

      case "km":
        result = "kilometers"
        break;
      
      case "kg":
        result = "kilograms"
        break;

      default:
        result = ""
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit){
      case "gal":
        result = initNum*galToL;
        break;

      case "mi":
        result = initNum*miToKm;
        break;
      
      case "lbs":
        result = initNum*lbsToKg;
        break;

      case "L":
        result = initNum/galToL;
        break;

      case "km":
        result = initNum/miToKm;
        break;
      
      case "kg":
        result = initNum/lbsToKg;
        break;

      default:
        result = ""
    }
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum.toString()} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toString()} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
