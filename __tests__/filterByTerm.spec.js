const  filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {

  const input = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" }
  ];

  test("It should filter by a search term (link)", () => {
    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output);
    
  });

  test("It should filter by a search term (uRl)", () => {
    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];

    expect(filterByTerm(input, "uRl")).toEqual(output);
           
  });

  test("It should throw an error when searchTem is an empty string", () => {
    const input = [];

    expect( () => {
        filterByTerm(input, '');
    }).toThrowError(Error('searchTerm cannot be empty'));
               
  });

});
