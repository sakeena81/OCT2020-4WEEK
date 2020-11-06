
function addRecord() {
    var newperson = {
        "ninumber": document.getElementById("addNI").value,
        "fullname": document.getElementById("addFullName").value,
        "phone": document.getElementById("addPhone").value,
        "address": document.getElementById("addAdd").value,
        "department": document.getElementById("addDep").value,
    }
    records.push(newperson);

    show(records);
}

function deleteRecord(button) {

    var buttonIndex = parseInt(button.dataset.index);

    let choice = confirm("do you want to delete this record?");
    if (choice == true) {
        for (let index = 0; index < records.length; index++) {
            if (index == buttonIndex) {
                records.splice(index, 1);

            }

        }

        show(records);
    }

}
function save() {
    //HIDES THE EDIT PERSON RECORD
    document.getElementById("editperson").setAttribute("hidden", "hidden");
    var person = document.getElementById("editNI").value; //get the ninumber here, after edit button pressed

    for (var i = 0; i < records.length; i++) { //trying to find this person within the records


        if (records[i].ninumber == person) { //here the find occurs
            records[i].ninumber = document.getElementById("editNI").value;
            records[i].fullname = document.getElementById("editName").value;
            records[i].phone = document.getElementById("editPhone").value;
            records[i].address = document.getElementById("editAddress").value;
            records[i].department = document.getElementById("editDept").value;

            show(records)

            return;
        }
    }

}
function editrecord(button) {
    document.getElementById("editperson").removeAttribute("hidden");

    for (var i = 0; i < records.length; i++) {

        if (records[i].ninumber == button.id) {
            document.getElementById("editNI").value = records[i].ninumber;
            document.getElementById("editName").value = records[i].fullname;
            document.getElementById("editPhone").value = records[i].phone;
            document.getElementById("editAddress").value = records[i].address;
            document.getElementById("editDept").value = records[i].department;

            return;
        }
    }
}

function cancel() {
    document.getElementById("editperson").setAttribute("hidden", "hidden");

}

function confirmEdit(id) {

    records.push(

        {
            "ninumber": document.getElementById("addNI").value,
            "fullname": document.getElementById("addFullName").value,
            "phone": document.getElementById("addPhone").value,
            "address": document.getElementById("addAdd").value,
            "department": document.getElementById("addDep").value
        });

    records.splice(id, 1);
    show(records);

    document.getElementById("addNI").style.visibility = "hidden";
    document.getElementById("addFullName").style.visibility = "hidden";
    document.getElementById("addPhone").style.visibility = "hidden";
    document.getElementById("addAdd").style.visibility = "hidden";
    document.getElementById("addDep").style.visibility = "hidden";
    document.getElementById("save").style.visibility = "hidden";
}

    
//delete record, to find which button I pressed, 
//find that person on the array
//remove person from array
//rebuild table 



