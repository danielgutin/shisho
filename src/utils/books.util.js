/**
 * 
 * @param {*} books list of books
 * @returns Book list for UI display
 */
export const parseBookListForDisplay = (books) => {
  const booksForDisplay = books?.map(({ volumeInfo = {} }) => ({
    title: volumeInfo?.title ?? 'Title is yet to be provided',
    coverImg: volumeInfo?.imageLinks?.thumbnail ?? null,
    // saw few cases where description prop was missing
    description: volumeInfo?.description ?? 'Description is yet to be provided' 
  }));
  return booksForDisplay;
};
