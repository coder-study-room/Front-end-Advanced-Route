/*
Author: Viktor (victor318x@gmail.com)
interview.js (c) 2021
Desc: description
Created:  3/31/2021, 11:55:24 AM
Modified: 3/31/2021, 11:56:08 AM
*/
import React from 'react';
import Layout from '@theme/Layout';

function Interview() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Interview;
