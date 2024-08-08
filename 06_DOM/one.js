document.getElementById('idname').id
document.getElementById('idname').className
document.getElementById('idname').getAttribute('attribute name')  // attribute name like class, id , name...
document.getElementById('idname').setAttribute('class', 'newclassname1 newclassname2')

const classlst = document.getElementsByClassName('classname')    // gives HTML collection    , it's different from Nodelist
// no looping function work except for loop
// hence to use looping methods convert it into array like :
classlst = Array.from(classlst)

document.getElementById('idname').innerHTML = "<h1> Any text </h1>"

const obj1 = document.getElementById('idname')
obj1.style.padding = "10px"

// Below 3 attributes gives the written text in the tag which is executed, some differences btw them are :

obj1.innerHTML      // gives everything including child HTML tags inside and it's styling

obj1.innerText      // only gives displayed text , Eg. if display: none for some part of text which is in a child span tag and not displayed on the page, then it will also not get that

obj1.textContent    // gives all the text inside regardless of css styling applied

