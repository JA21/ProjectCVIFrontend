
const GetCVI = async ({ atribute, data,typeFile }) => {
  //let token = localStorage.getItem('token')
  const url = `http://localhost:3500/${atribute}`;
  
  if(typeFile){
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
  }

  if (data) {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
  }
  return await fetch(url)
    .then(res => res.json())
    .then(response => {
      const data = response;
      return data
    })
}

export default GetCVI;