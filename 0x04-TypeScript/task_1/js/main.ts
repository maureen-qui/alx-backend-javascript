// task_1/js/main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Function to create a Teacher object
function createTeacher(
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  additionalAttributes?: { [key: string]: any }
): Teacher {
  const teacher: Teacher = {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...additionalAttributes,
  };

  return teacher;
}

// Example usage
const teacher3: Teacher = createTeacher('John', 'Doe', false, 'London', {
  contract: false,
});

console.log(teacher3);


// New code based on your request
interface Directors extends Teacher {
  numberOfReports: number;
}

function createDirector(
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  numberOfReports: number,
  additionalAttributes?: { [key: string]: any }
): Directors {
  const director: Directors = {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    numberOfReports,
    ...additionalAttributes,
  };

  return director;
}

// Example usage for the new code
const director1: Directors = createDirector('John', 'Doe', true, 'London', 17);

console.log(director1);
