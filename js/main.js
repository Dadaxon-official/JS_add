var doingList = [];
var doneList = [];
var completedList = [];
var uniqueId = 0;

function addTask() {

    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var selected = document.getElementById('category').value;

    var task = {
        id: uniqueId,
        name: name,
        date: date,
        selected: selected
    };

    if (name !== '' && date !== '') {

        if (selected === 'doing') {
            doingList.push(task);
            console.log(doingList);

            document.getElementById('doingList').innerHTML += '<div class="border p-2 mb-2" id=' + uniqueId + '>' +
                '<h6>' + uniqueId + '.' + task.name + '</h6><h6>' + task.date + '</h6>' +
                '<button type="button" onclick="changeToDone(' + uniqueId + ')" class="btn btn-block btn-success">Done</button></div>'

        } else {
            doneList.push(task);
            console.log(doneList);

            document.getElementById('doneList').innerHTML += '<div class="border p-2 mb-2" id=' + uniqueId + '>' +
                '<h6>' + uniqueId + '.' + task.name + '</h6><h6>' + task.date + '</h6>' +
                '<button type="button" onclick="changeToCompleted(' + uniqueId + ')" class="btn btn-block btn-success">Complited</button></div>'

        }

        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        uniqueId++;

    } else {
        alert('Form is not filled!')
    }
}

function changeToDone(uniqueId) {

    var dynamicTask = '';

    for (i = 0; i < doingList.length; i++) {
        if (uniqueId === doingList[i].id) {
            dynamicTask = doingList[i];
            doneList.push(doingList[i]);
            document.getElementById('doneList').innerHTML += '<div class="border p-2 mb-2" id=' + dynamicTask.id + '>' +
                '<h6>' + dynamicTask.id + '.' + dynamicTask.name + '</h6><h6>' + dynamicTask.date + '</h6>' +
                '<button type="button" onclick="changeToCompleted(' + uniqueId + ')" class="btn btn-block btn-success">Complited</button></div>';
            doingList.splice(i, 1);
            var list = document.getElementById(uniqueId);
            list.parentNode.removeChild(list);
        }
    }
}

function changeToCompleted(uniqueId) {

    var dynamicTask = '';

    for (i = 0; i < doneList.length; i++) {
        if (uniqueId === doneList[i].id) {
            dynamicTask = doneList[i];
            completedList.push(doneList[i]);
            document.getElementById('completedList').innerHTML += '<div class="border p-2 mb-2" id=' + dynamicTask.id + '>' +
                '<h6>' + dynamicTask.id + '.' + dynamicTask.name + '</h6><h6>' + dynamicTask.date + '</h6>' +
                '<button type="button" onclick="changeToCompleted(\' + uniqueId + \')" class="btn btn-block btn-success">Done</button></div>';
            doneList.splice(i, 1);
            var list = document.getElementById(uniqueId);
            list.parentNode.removeChild(list);
        }
    }
}
function changeTo(uniqueId) {

    var dynamicTask = '';

    for (i = 0; i < doneList.length; i++) {
        if (uniqueId === doneList[i].id) {
            dynamicTask = doneList[i];
            completedList.push(doneList[i]);
            document.getElementById('completedList').innerHTML += '<div class="border p-2 mb-2" id=' + dynamicTask.id + '>' +
                '<h6>' + dynamicTask.id + '.' + dynamicTask.name + '</h6><h6>' + dynamicTask.date + '</h6>' +
                '<button type="button" onclick="changeToCompleted(\' + uniqueId + \')" class="btn btn-block btn-success">Done</button></div>';
            doneList.splice(i, 1);
            var list = document.getElementById(uniqueId);
            list.parentNode.removeChild(list);
        }
    }
}