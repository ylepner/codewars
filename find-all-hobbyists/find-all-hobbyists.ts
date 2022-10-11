export function findAllHobbyists(hobby: string, hobbies: Record<string, string[]>) {
  let result: string[] = []
  Object.entries(hobbies).forEach((([key, hobbies]) => hobbies.forEach((hobbyValue) => {
    if (hobbyValue === hobby) {
      result.push(key)
    }
  })))
  return result
}