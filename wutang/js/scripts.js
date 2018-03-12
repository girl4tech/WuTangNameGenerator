document.addEventListener("DOMContentLoaded" , () => {
  //variables and data
  const generate = document.getElementById("gen");
  const inputs = document.getElementsByTagName("input");
  const firstName = document.getElementById("name");
  const lastName = document.getElementById("name2");
  const wuTangMembers = [
    "Black",
    "Killah",
    "Masta",
    "Big",
    "Ol Dirty",
    "Doctah",
    "Crazy",
    "Angry"
  ];
  const lastNames = [
    "Shootah",
    "Child",
    "Warrior",
    "Man",
    "The Chef",
    "Bastard",
    "Priest"
  ];
//logic
  generate.addEventListener("click" , () => {
    for(let i = 0; i < inputs.length; i++){
      if(inputs[i].value !== ""){
        let randomFirstName = wuTangMembers[Math.round(Math.random()* (wuTangMembers.length - 1))];
        let randomLastName = lastNames[Math.round(Math.random()* (lastNames.length - 1))]; 
        firstName.innerHTML = randomFirstName;
        lastName.innerHTML = randomLastName;      
      }
    }
  });
});

