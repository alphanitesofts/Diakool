async function SearchList(query) {
    try {
      const formdata = new FormData();
      formdata.append("query", query);
  
      const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
  
      const response = await fetch("https://supercoolac.alphanitesofts.net/api/search_product", requestOptions);
  
      if (response.status === 200) {
        const result = await response.json();
        return result;
      } else {
        // If status is not 200, throw an error
        // throw new Error(`Failed to fetch data. Status: ${response.status}`);
        return null;
      }
    } catch (error) {
      // console.error('Error fetching data:', error.message);
      // Return null in case of an error
      return null;
    }
  }
  
  export default SearchList;
  