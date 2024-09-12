const courses = [
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Solid",
  "Ember",
  "Backbone",
];

export const fetchCourses = (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(courses);
    }, 1000);
  });
};
