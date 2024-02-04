const fs = require('fs');

function countStudents(path) {
  try {
    const data = (fs.readFileSync(path, 'utf-8'));
    const dataSep = data.split('\n');
    const retArr = dataSep.filter((x) => x.length > 0);
    console.log(`Number of students: ${retArr.length - 1}`);

    let f1 = 0;
    let f2 = 0;
    const arr1 = [];
    const arr2 = [];
    for (const line of retArr) {
      const data = line.split(',');
      if (data[3] === 'CS') {
        arr1.push(data[0]);
        f1 += 1;
      }
      if (data[3] === 'SWE') {
        arr2.push(data[0]);
        f2 += 1;
      }
    }
    console.log(`Number of students in CS: ${f1}. List: ${arr1.join(', ')}`);
    console.log(`Number of students in SWE: ${f2}. List: ${arr2.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;