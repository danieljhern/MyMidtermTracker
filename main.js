
testCandidateArray = [
    {district: 1, name: "D1Candidate1", party: "D"},
    {district: 1, name: "D1Candidate2", party: "R"},
    {district: 2, name: "D2Candidate1", party: "D"},
    {district: 2, name: "D2Candidate2", party: "R"},

]




function getSelectedValue(){
    var selectedValue = document.getElementById('select-district').value;
    document.getElementById('display-current-district').innerHTML=('District ' + selectedValue + " candidates are:");
    outputCandidateCheckbox();
}

function outputCandidateCheckbox(){
var selectedValue = document.getElementById('select-district').value;
var myul = document.getElementById("myList");
myul.innerHTML = '';

//Creates the list items for Candidates by District for the user to pick

for(sv in testCandidateArray) {
    if (selectedValue == testCandidateArray[sv].district){
    
    
            cname = testCandidateArray[sv].name;
            cParty = testCandidateArray[sv].party;
            candidateId = "D"+selectedValue+"-" + testCandidateArray[sv].name;
            candidateInfo = testCandidateArray[sv].name + "     " + "Party Affiliation:  " + testCandidateArray[sv].party;
            //Creating input elements
            var li = document.createElement('input');
            li.type = 'checkbox';
            li.id = candidateId;
            li.value = testCandidateArray[sv].name
            li.name = "checkbox-item"
            //creating label elements
            var liLabel = document.createElement('label')
            liLabel.htmlFor = candidateId;
            liLabel.appendChild(document.createTextNode('Name: ' + cname + ', Party: ' + cParty));
    
    
            var br = document.createElement('br');
            myul.appendChild(liLabel);
            liLabel.appendChild(li);
            myul.appendChild(br);
            

    }
}};


const element = document.getElementById("myBtn");

//User Array which will hold Candidate class objects
let testArray = []

let candidateObject =  function(cName, cNotes, cID, cParty) {
    this.testName = cName;
    //this.testData = cData;
    this.testNotes = cNotes;
    this.testID = cID;
    this.testParty = cParty
}

// Allows user to add Candidates from selected checkboxes
function addToList() {
    demo = document.getElementById("demo");
    tCandidate = {};
    
    let checkboxes = document.querySelectorAll('input[name="checkbox-item"]:checked');


    checkboxes.forEach((checkbox) => {
        if (testArray.includes(checkbox.id)) {
            alert(checkbox.id)
        }
        else{

    tCandidate = checkbox.parentElement.textContent;
    tNotes = "";
    var tID = checkbox.id;
    var tVal = checkbox.value
    var list = document.createElement('li');
    list.id = tCandidate;
    //need to creat value which will remove the begining
    list.innerHTML = tCandidate;
    tParty = tID.charAt(0)

    demo.appendChild(list);
    
    //add back tCandidate if name doesnt work
         testArray.push(new candidateObject(tVal, tNotes, tID, tParty));

    }

   });
   console.log(testArray)

}

document.addEventListener('DOMContentLoaded', () => { //not sure if this is best for DOMContentLoaded

    var myCandidateList = document.getElementById('myCandidates');
    let btn = document.getElementById('btn');
    
  //Diplays list from User Array with buttons to add notes or remove candidates from array  
   btn.addEventListener('click', ()=>
    {
        var theList = document.getElementById("myCandidates");
        theList.innerHTML = "";

    testArray.forEach(function (element, i) {
    var listItem = document.createElement('li');
    listItem.id = element.testID + "-li-id";
    listItem.innerHTML = element.testName  + "     Party: " + element.testParty;
    //text fields, will play around with bigger text areas later
    var InputItem = document.createElement("input");
    InputItem.id = "button-for-"+element.testID+"-notes";
    InputItem.type = "text";
    InputItem.value = element.testName;


    var inputBtn = document.createElement("button");

    
    inputBtn.id = "button-for-"+element.testID;
    inputBtn.type = "button";
    inputBtn.name = "input-button"
    inputBtn.innerText = "Add Note";

    var dltBtn = document.createElement("button");
    dltBtn.id = "delete-button-for-"+element.testID;    
    dltBtn.type = "button";
    dltBtn.name = "input-button";
    dltBtn.innerText = "Remove";


    // create list text fields and buttons
    myCandidateList.appendChild(listItem);
    myCandidateList.appendChild(InputItem);
    myCandidateList.appendChild(inputBtn);
    myCandidateList.appendChild(dltBtn);


    buttonid = inputBtn.id;
    dbuttonid = dltBtn.id;
    document.getElementById(buttonid).addEventListener('click', addNote);
    document.getElementById(dbuttonid).addEventListener('click', removeCandidate);
    })})

    //ADDS CUSTOM CANDIDATE TO USER ARRAY
    document.getElementById("buttonAdd1").addEventListener("click", function () {
       


        cCandName = document.getElementById("custom-candidate-name").value;
        cCandNotes = document.getElementById("custom-candidate-notes").value;
        selectedParty = document.getElementById("select-party").value;
        cCandDistrict = document.getElementById("custom-candidate-district").value
        

        if (selectedParty.value = "Democrat"){
            cCandParty = "D"
        }
        else if (selectedParty.value = "Republican"){
            cCandParty = "R"
        }
        else if (selectedParty.value = "independent"){
            cCandParty = "I"
            
        }

        cCandID = cCandParty + cCandDistrict + "-"+cCandName;

        

        testArray.push(new candidateObject(cCandName,cCandNotes,cCandID,cCandParty))
     });
     
     document.getElementById("buttonClear").addEventListener("click", function () {
         document.getElementById("custom-candidate-name").value = "";
         document.getElementById("custom-candidate-notes").value = "";
     });

})

//ADDNOTE FUNCTION 
    function addNote(){
        alert("function not working yet");
        
        bID = this.id;
        slicebID = bID.slice(11);
        textboxNotes = document.getElementById(bID+"-notes").value;

        for (y in testArray){
            if (slicebID == testArray[y].testID){
                testArray[y].testNotes = textboxNotes
            }
        }
    }

//REMOVE CANDIDATE FUNCTION 

    function removeCandidate(){
        rID = this.id
        slicerID = rID.slice(18)
        
        const parent = document.getElementById("myCandidates")
        var listID=document.getElementById(slicerID + "-li-id")        
        var btnID = document.getElementById("button-for-"+slicerID)


        var dbtnid = document.getElementById(this.id)
        var txtID = document.getElementById("button-for-"+slicerID+"-notes")
        

    


      

        for (p in testArray){
            if (slicerID == testArray[p].testID){
 
                const index = testArray.indexOf(testArray[p]);
                testArray.splice(index, 1);
                parent.removeChild(listID);
                parent.removeChild(btnID);
                parent.removeChild(txtID);
                parent.removeChild(dbtnid);

            }

        }
      
    }
