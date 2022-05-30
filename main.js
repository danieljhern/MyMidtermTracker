
testCandidateArray = [
    {district: 1, name: "Davina Duerr", party: "D"},
    {district: 1, name: "Shelley Kloba", party: "D"},    
    {district: 1, name: "John Peeples", party: "R"},    
    {district: 1, name: "Jerry Zeiger-Buccola", party: "R"},
    {district: 2, name: "Andrew Barkis", party: "R"},
    {district: 2, name: "JT Wilcox", party: "R"},
    {district: 3, name: "Marcus Riccelli", party: "D"},
    {district: 3, name: "Timm Ormsby ", party: "D"},    
    {district: 3, name: "Scotty Nicol", party: "R"},    
    {district: 3, name: "Natalie Poulson", party: "R"},
    {district: 4, name: "Ted Cummings", party: "D"},
    {district: 4, name: "MJ Bolt", party: "R"},
    {district: 3, name: "Suzanne Schmidt", party: "R"},
    {district: 4, name: "Rob Chase ", party: "R"},
    {district: 4, name: "Leonard Christian", party: "R"},

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
let userArray = []
let includesArray = []


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

//check selected checkboxes to see if they are in the "includesArray" and pushes new object to 
//"userArray" if not
    checkboxes.forEach((checkbox) => {        
    var duplicate = includesArray.includes(checkbox.id);
        if (duplicate == false) {
            tCandidate = "Added - "+ checkbox.parentElement.textContent;
            tNotes = "";
            var tID = checkbox.id;
            var tVal = checkbox.value
            var list = document.createElement('li');
            list.id = tCandidate;
            list.innerHTML = tCandidate;
            tParty = tID.charAt(0)

            demo.appendChild(list);
    
    //add back tCandidate if name doesnt work
         userArray.push(new candidateObject(tVal, tNotes, tID, tParty));
         includesArray.push(tID);

    }
    else {alert(checkbox.value + " " + "is already in your list")}

   });
   console.log(userArray)

}

document.addEventListener('DOMContentLoaded', () => { //not sure if this is best for DOMContentLoaded

    var myCandidateList = document.getElementById('myCandidates');
    let btn = document.getElementById('btn');
    
  //Diplays list from User Array with buttons to add notes or remove candidates from array  
   btn.addEventListener('click', ()=>
    {
        var theList = document.getElementById("myCandidates");
        theList.innerHTML = "";

    userArray.forEach(function (element, i) {
    var listItem = document.createElement('li');
    listItem.id = element.testID + "-li-id";
    listItem.innerHTML = element.testName  + "     Party: " + element.testParty;
    //text fields, will play around with bigger text areas later
    var InputItem = document.createElement("input");
    InputItem.id = "button-for-"+element.testID+"-notes";
    InputItem.type = "text";
    InputItem.value = element.testNotes;


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

        

        userArray.push(new candidateObject(cCandName,cCandNotes,cCandID,cCandParty));
        
     });
     
     document.getElementById("buttonClear").addEventListener("click", function () {
         document.getElementById("custom-candidate-name").value = "";
         document.getElementById("custom-candidate-notes").value = "";
     });

})

//ADDNOTE FUNCTION 
    function addNote(){
        
        bID = this.id;
        slicebID = bID.slice(11);
        textboxNotes = document.getElementById(bID+"-notes").value;

        for (y in userArray){
            if (slicebID == userArray[y].testID){
                userArray[y].testNotes = textboxNotes
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
        

    


      

        for (p in userArray){
            if (slicerID == userArray[p].testID){
 
                const index = userArray.indexOf(userArray[p]);
                userArray.splice(index, 1);
                parent.removeChild(listID);
                parent.removeChild(btnID);
                parent.removeChild(txtID);
                parent.removeChild(dbtnid);

            }

        }
      
    }
