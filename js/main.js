const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 

// ---------abar
const users = [
    { name: 'Hridoy', age: 22 },
    { name: 'Misu', age: 20 }
  ];
  const names = users.map(user => user.name);
  console.log(names); 

// ---------abar
const students = [
    { name: 'Hridoy', score: 85 },
    { name: 'Misu', score: 92 },
    { name: 'Shimoli', score: 78 }
  ];
  const messages = students.map(student => {
    return `${student.name} has scored ${student.score} marks.`;
  });
  console.log(messages);

  // ---------abar
  const students1 = [
    { name: 'Hridoy', score: 85 },
    { name: 'Misu', score: 92 },
    { name: 'Shimoli', score: 78 },
    { name: 'Samiha', score: 65 },
    { name: 'Tanvir', score: 50 }
  ];
  
  const messages1 = students1.map(student => {
    let grade = '';
  
    if (student.score >= 90) {
      grade = 'A+';
    } else if (student.score >= 80) {
      grade = 'A';
    } else if (student.score >= 70) {
      grade = 'B';
    } else if (student.score >= 60) {
      grade = 'C';
    } else {
      grade = 'D';
    }
  
    return `${student.name} has scored ${student.score} marks and got Grade ${grade}.`;
  });
  console.log(messages);
  
  

  