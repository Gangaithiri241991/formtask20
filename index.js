// create form

const form = document.createElement('form');

const tit=document.createElement('textarea');

var fnameLabel = document.createElement("label");
fnameLabel.textContent = "First-Name:";
var lnameLabel = document.createElement("label");
lnameLabel.textContent = "Last-Name:";
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 =document.createElement('input');
const  selectElement=document.createElement('select');
const  selectElement1=document.createElement('select');
const  selectElement2=document.createElement('select');
var genderLabel = document.createElement("label");
genderLabel.textContent = "Gender:";
const  selectElement3=document.createElement('select');


const optionValues = ['select','Briyani', 'curdrice', 'Lemon Rice','potato rice','putina rice'];
for (let i = 0; i < optionValues.length; i++) {
  const optionElement = document.createElement('option');
  optionElement.value = optionValues[i];
  optionElement.text = optionValues[i];
  selectElement.appendChild(optionElement);
}
const optionValues1 = ['select','Tamilnadu', 'Kerala', 'Andhrapradesh','Maharastra','Karnataka','Bihar','orissa'];
for (let i = 0; i < optionValues1.length; i++) {
  const optionElement1 = document.createElement('option');
  optionElement1.value = optionValues1[i];
  optionElement1.text = optionValues1[i];
  selectElement1.appendChild(optionElement1);
}
const optionValues2 = ['India', 'U.A.E', 'Rome','Myanmar','Indonesia'];
for (let i = 0; i < optionValues2.length; i++) {
  const optionElement2 = document.createElement('option');
  
  optionElement2.value = optionValues2[i];
  optionElement2.text = optionValues2[i];
  selectElement2.appendChild(optionElement2);
}
const optionValues3 = ['select','Female', 'Male', 'others'];
for (let i = 0; i < optionValues3.length; i++) {
  const optionElement3 = document.createElement('option');
  optionElement3.value = optionValues3[i];
  optionElement3.text = optionValues3[i];
  selectElement3.appendChild(optionElement3);
}
var PincodeLabel = document.createElement("label");
PincodeLabel.textContent = "EnterPincode:";
var AddressLabel = document.createElement("label");
AddressLabel.textContent = "Enter The Address:";
var FoodLabel = document.createElement("label");
FoodLabel.textContent = " Choice of Food:";
var StateLabel = document.createElement("label");
StateLabel.textContent = " State:";
var countryLabel = document.createElement("label");
countryLabel.textContent = " country:";






const button = document.createElement('button');
var resetButton = document.createElement('button');
resetButton.setAttribute('type', 'reset');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', function() {
  document.getElementById('form').reset();
});

form.id="po"
input1.id="c";
input2.id='posi'
input3.id="posi1"

selectElement.id="posi3"
selectElement1.id="posi4"
selectElement2.id="posi5"
selectElement3.id="posi6"

input1.setAttribute('placeholder', 'First name');
input1.setAttribute('type', 'text');
input2.setAttribute('placeholder', 'Lastname');
input2.setAttribute('type', 'text');
input3.setAttribute('placeholder','Pincode');
input3.setAttribute('type','number');



button.textContent = 'Submit';
form.appendChild(fnameLabel);
form.appendChild(input1);
form.appendChild(lnameLabel);
form.appendChild(input2);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
form.appendChild(PincodeLabel);
form.appendChild(input3);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
form.appendChild(AddressLabel);
form.appendChild(tit);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
form.appendChild(genderLabel);

form.appendChild(selectElement3);


var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
form.appendChild(FoodLabel);
form.appendChild(selectElement);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
form.appendChild(StateLabel);
form.appendChild(selectElement1);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
form.appendChild(countryLabel);
form.appendChild(selectElement2);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);


form.appendChild(button);
form.appendChild(resetButton);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);
var lineBreak = document.createElement("br");
form.appendChild(lineBreak);

document.body.appendChild(form);

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');
const th5 = document.createElement('th');
const th6 = document.createElement('th');
const th7 = document.createElement('th');
const th8 = document.createElement('th');

th1.textContent = 'FirstName';
th2.textContent = 'LastName';
th3.textContent = 'Pincode';
th4.textContent = 'Address';
th5.textContent = 'Choiceoffood';
th6.textContent = 'State';
th7.textContent = 'Country';
th8.textContent = 'Gender';

trHead.appendChild(th1);
trHead.appendChild(th2);
trHead.appendChild(th3);
trHead.appendChild(th4);
trHead.appendChild(th5);
trHead.appendChild(th6);
trHead.appendChild(th7);
trHead.appendChild(th8);
thead.appendChild(trHead);
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

// event listener for form submit
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const FirstName = input1.value;
  const LastName = input2.value;
  const Pincode = input3.value;
  const Address = tit.value;
   const Choiceoffood=selectElement.value;
   const State=selectElement1.value;
   const Country=selectElement2.value;
   const Gender=selectElement3.value;
  // create table row and cells
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5=document.createElement('td');
  const td6=document.createElement('td');
  const td7=document.createElement('td');
  const td8=document.createElement('td');


  
  // set cell values to input values
  td1.textContent = FirstName;
  td2.textContent = LastName;
  td3.textContent = Pincode;
  td4.textContent = Address;
  td5.textContent = Choiceoffood;
  td6.textContent = State;
  td7.textContent = Country;
  td8.textContent = Gender;

  // add cells to row and row to table body
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);
  tbody.appendChild(tr);

  // reset form
  //form.reset();
});
