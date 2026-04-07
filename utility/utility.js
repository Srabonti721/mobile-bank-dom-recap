function getInputByValidId(id){
   const value = document.getElementById(id).value;
   const convertedValue = parseFloat(value);
   return convertedValue;
}

function getInnerTextByID (id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIdAndVAlue (id, value){
document.getElementById(id).innerText = value;
}