async function FetchAcDetails(id) {
    const requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(`https://supercoolac.alphanitesofts.net/api/fetch_product_with_key_features_and_spec_by_id/${id}`, requestOptions);
  
      if (response.status === 200) {
        const result = await response.json();
        // console.log(result,"result")
        return result;
      } else {
        // If status is not 200, throw an error
        // throw new Error(`Failed to fetch data. Status: ${response.status}`);
        return null
      }
    } catch (error) {
    //   console.error('Error fetching data:', error.message);
      // Return an empty array in case of an error
      return null;
    }
  }
  export default FetchAcDetails