/**
 * Util function to get questions
 */
export const getQuestion = async () => {
  try {
    const res = await fetch('./questions.json');
    return await res.json();
  } catch (err) {
    console.log('Failed to parse: ', JSON.stringify(err));
    throw new Error(err);
  }
};
