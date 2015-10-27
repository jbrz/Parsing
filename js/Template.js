function DogTemplate(data) {
  return `
    <li>${data.Name} is a ${data.Breed}. ${data.Name} is ${data.Age_Human} human years old, which is ${data.Age_Dog} in dog years</li>
  `;
}

export default DogTemplate;