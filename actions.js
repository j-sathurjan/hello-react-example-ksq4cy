// Action Creator
export function AddPerson(person) {
  return {
    type: 'ADD_PERSON',
    data: person,
  };
}
