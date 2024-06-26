export const books = [
  {
    id: 1,
    title: "Book Title 1",
    author: "Author 1",
    cover: "next.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 1", "Genre 2", "Genre 3"],
    year: 2024,
    status: "reading",
    favorite: false,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 2,
    title: "Book Title 2",
    author: "Author 2",
    cover: "next.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 2", "Genre 2", "Genre 3"],
    year: 2024,
    status: "reading",
    favorite: false,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 3,
    title: "Book Title 3",
    author: "Author 3",
    cover: "next.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 3", "Genre 2", "Genre 3"],
    year: 2024,
    status: "toRead",
    favorite: false,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 4,
    title: "Book Title 4",
    author: "Author 4",
    cover: "next.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: [, "Genre 2", "Genre 3"],
    year: 2024,
    status: "reading",
    favorite: true,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 5,
    title: "Book Title 5",
    author: "Author 5",
    cover: "next.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 5", "Genre 2", "Genre 3"],
    year: 2024,
    status: "finished",
    favorite: true,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 6,
    title: "Book Title 6",
    author: "Author 6",
    cover: "next.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 6", "Genre 2", "Genre 3"],
    year: 2024,
    status: "finished",
    favorite: false,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
  {
    id: 7,
    title: "Book Title 7",
    author: "Author 7",
    cover: "next.svg",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    genres: ["Genre 7", "Genre 2", "Genre 3"],
    year: 2024,
    status: "toRead",
    favorite: true,
    pagesRead: 5,
    totalPages: 100,
    get progress() {
      return Math.round((this.pagesRead / this.totalPages) * 100);
    },
  },
];
