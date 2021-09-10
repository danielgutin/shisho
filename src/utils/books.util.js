/**
 * 
 * @param {Array.<Object>} books list of books
 * @returns list of books for parsed for UI
 */
export const parseBookListForDisplay = (books) => {
  return books?.map(({ volumeInfo = {} }) => ({
    title: volumeInfo?.title ?? 'Title is yet to be provided',
    coverImg: volumeInfo?.imageLinks?.thumbnail ?? null,
    description: volumeInfo?.description ?? 'Description is yet to be provided' 
  }));
};
