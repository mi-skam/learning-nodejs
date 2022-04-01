function example(input) {
  let output;
  if (input.length < 2) {
    throw new Error('Too few characters');
  }

  for (let i = 0; i < 10; i++) {
    output += `${i}. Output: ${input}`;
  }

  return output;
  output += 'result';
}

function greet(user) {
  const firstname = user.firstname;
  const lastname = user.lastname;
  return `Hello ${firstname} ${lastname}`;
}
