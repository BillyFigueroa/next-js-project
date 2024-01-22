export const formatDOB = (
  dob: { age: number; date: Date }
) => new Date(dob.date).toISOString().substring(0, 10);

export const fullName = (
  name: { first: string, last: string }
) => `${name.first} ${name.last}`;

export const fullAddress = (
  street: { number: number, name: string },
  city: string,
  state: string,
  postcode: number
) => `${street.number} ${street.name} - ${city}, ${state} ${postcode}`;