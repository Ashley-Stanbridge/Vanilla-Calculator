
var input1 = document.getElementById('input1').value
var input2 = document.getElementById('input2').value
var div = document.getElementById('sum')

plus = function(input1, input2) {
  outcome = Number(input1) + Number(input2)
  div.innerHTML = div.innerHTML + outcome
  return outcome
}

times = function(input1, input2) {
  outcome = Number(input1) * Number(input2)
  div.innerHTML = div.innerHTML + outcome
  return outcome
}

devide = function(input1, input2) {
  outcome = Number(input1) / Number(input2)
  div.innerHTML = div.innerHTML + outcome
  return outcome
}

subtract = function(input1, input2) {
  outcome = Number(input1) - Number(input2)
  div.innerHTML = div.innerHTML + outcome
  return outcome
}

// div.innerHTML = div.innerHTML + outcome
