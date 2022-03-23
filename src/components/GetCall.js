import React from 'react';
import axios from 'axios';

function GetCall() {
  function fetchData() {
    axios({
      method: 'GET',
      url: 'https://mbpxqzgypapqdxtetkvn.supabase.co/rest/v1/UserDetails?select=*',
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1icHhxemd5cGFwcWR4dGV0a3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MTk3OTksImV4cCI6MTk2MjI5NTc5OX0.p-NAGcLMwamRuKSwr07ZduPwOq7anW_CSjqYNEPiPiA',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1icHhxemd5cGFwcWR4dGV0a3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3MTk3OTksImV4cCI6MTk2MjI5NTc5OX0.p-NAGcLMwamRuKSwr07ZduPwOq7anW_CSjqYNEPiPiA',
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <button type="button" onClick={fetchData}>
        Click here
      </button>
    </div>
  );
}

export default GetCall;
