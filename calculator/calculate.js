/*function to show or hide element "point"*/
function checkNum(){
    var checkInteger = document.getElementById('integer')
    if(checkInteger.checked){
        document.getElementById("point").style.display = "none";
    }
    else{
        document.getElementById("point").style.display = "inline-block";
    }
}

/*function for set value*/
function setValue(value){
    document.getElementById('original').value += value;
}
function splitByIndex(value, index) {
    return value.substring(0, index) + "," + value.substring(index);
}

/*function for clear inputs*/
function clearInput(){
    document.getElementById('original').value = '';
    document.getElementById('result').value = '';
}
/*function to check which operator*/
function CheckOperator(operator, result, numbers){
    if (operator == '+')
    {
        result += Number(numbers)
    }
    if (operator == '-')
    {
        result -= Number(numbers)
    }
    if (operator == '*')
    {
        result *= Number(numbers)
    }
    if (operator == '/')
    {
        result /= Number(numbers)
    }
    return result
}
/*function for calculate without priority*/
function withoutPriority(){
    let originalValueArray = Array.from(original.value);
    let operators = ['+', '-', '/', '*']

    var numbers = ""
    var result = 0;
    var operator = "";

    var index = 0;
    for (var i = 0; i < originalValueArray.length; i++)
    {
        if (operators.indexOf(originalValueArray[i]) == -1){
            numbers += originalValueArray[i]
        }

        if (operators.indexOf(originalValueArray[i]) != -1){
            result = Number(numbers);
            index = i;
            i = originalValueArray.length
        }
    }

    numbers = "";
    for (var i = index; i < originalValueArray.length; i++){
        if (operators.indexOf(originalValueArray[i]) != -1){
            if (operator == ""){
                operator = originalValueArray[i]
            }
            else
            {
                result = CheckOperator(operator, result, numbers)
                operator = originalValueArray[i]
                numbers = ""
            }
        }

        if (operators.indexOf(originalValueArray[i]) == -1){
            numbers += originalValueArray[i]
        }

        if (i == originalValueArray.length - 1)
        {
            result = CheckOperator(operator, result, numbers)
        }
    }

    return result

}

/*function for calculate result*/
function calculationResult(){
    var resultValArray = [' '];
    var val = document.getElementById('original').value;

    if(document.getElementById('priority').checked)
    {
        if(document.getElementById('integer').checked) {
            result = parseInt(withoutPriority());
        }
        else{
            result = withoutPriority();
        }
    }
    else{
        if(document.getElementById('integer').checked) {
            result = parseInt(eval(val));
        }
        else{
            result = eval(val);
        }
    }
    document.getElementById('result').value = result;
    for(i = 0; i < resultValArray.length; i++)
    {
        resultValArray[i] += result;
    }
    for(i = 0; i < resultValArray.length; i++)
    {
        document.getElementById('history').value += resultValArray[i];
    }
}
/*function to show block with history of answers*/
function showHistory(){
    document.getElementById("history").style.display = "inline-block";
}
/*function to hide block with history of answers*/
function closeHistory(){
    document.getElementById("history").style.display = "none";
}


