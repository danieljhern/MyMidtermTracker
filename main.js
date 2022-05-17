//candidateArray = {
  //  district1:[
    //    {district: 1, name: "Daniel", party: "D"},
      //  {district: 1, name: "David", party: "R"}
    //],
   // district2:[
     //   {name: "Sara", party: "D"},
      //  {name: "Tom", party: "R"}
    //]
//}


//will create class of Candidates and constructor later which will enable the user to add any candidates not listed in array
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

for(sv in testCandidateArray) {
    if (selectedValue == testCandidateArray[sv].district){

            //later try to do a for loop and the and if 
    
    
            cname = testCandidateArray[sv].name;
            cParty = testCandidateArray[sv].party;
            candidateId = "D1-" + testCandidateArray[sv].name;
            candidateInfo = testCandidateArray[sv].name + "     " + "Party Affiliation:  " + testCandidateArray[sv].party;
            //Creating input elements
            var li = document.createElement('input');
            li.type = 'checkbox';
            li.id = candidateId;
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


//ADD EVENT LISTENER TO SUBMIT buttonAdd
const element = document.getElementById("myBtn");
let testArray = []

let candidateObject =  function(cData, cNotes, cID) {
    this.testData = cData;
    this.testNotes = cNotes;
    this.testID = cID;
}


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
    var list = document.createElement('li');
    list.id = tCandidate;
    list.innerHTML = tCandidate;

    demo.appendChild(list);
    
    
    
    //var info = tCandidate
    //if(alreadyHas()===true){
      //  alert("already added")
    //}
   // else{
         testArray.push(new candidateObject(tCandidate, tNotes, tID));
    //}
    //function alreadyHas(){
        //for (z in testArray){
            //if (testArray[z].testData.includes(checkbox.id)){
              //  return true
            //}
            //else{
          //      return false
        //    }

      //  }
    }

   });
   console.log(testArray)

   //add function to remove duplicates or not add at all if already there
}

document.addEventListener('DOMContentLoaded', () => {

    var myCandidateList = document.getElementById('myCandidates');
    let btn = document.getElementById('btn');
    
   btn.addEventListener('click', ()=>
    {
   for (let x = 0; x < testArray.length; x++){
    var listItem = document.createElement('li');
    listItem.id = testArray[x].testID + "-li-id";
    listItem.innerHTML = testArray[x].testData;

    //text fields
    var InputItem = document.createElement("input");
    InputItem.id = "button-for-"+testArray[x].testID+"-notes";
    InputItem.type = "text";
    InputItem.value = testArray[x].testData;
    //buttons for adding notes    
    var inputBtn = document.createElement("button");
    inputBtn.id = "button-for-"+testArray[x].testID;
    inputBtn.type = "button";
    inputBtn.name = "input-button"
    inputBtn.innerText = "Add Note";

    //buttons for deleting
    var dltBtn = document.createElement("button");
    dltBtn.id = "delete-button-for-"+testArray[x].testID;
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
    }})// commented out button listener

})//commented out domcontent


   // var tester = 'test'
    function addNote(){
        bID = this.id;
        slicebID = bID.slice(11);
        textboxNotes = document.getElementById(bID+"-notes").value;

        for (y in testArray){
            if (slicebID == testArray[y].testID){
                testArray[y].testNotes = textboxNotes
            }
        }
    }

    function removeCandidate(){
        rID = this.id
        slicerID = rID.slice(18)
        
        const parent = document.getElementById("myCandidates")
        var listID=document.getElementById(slicerID + "-li-id")        
        var btnID = document.getElementById("button-for-"+slicerID)


        var dbtnid = document.getElementById(this.id)
        var txtID = document.getElementById("button-for-"+slicerID+"-notes")
        
        //const parent = document.getElementById("myCandidates")

    


      

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
