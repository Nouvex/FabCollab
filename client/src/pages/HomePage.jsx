import React from 'react';

const CompanyInfo = ({ name, info }) => (
  <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
    <h2>{name}</h2>
    <p>{info}</p>
  </div>
);

const HomePage = () => {
  const companies = [
    { name: 'Company 1', info: 'Example info about Company 1' },
    { name: 'Company 2', info: 'Example info about Company 2' },
    { name: 'Company 3', info: 'Example info about Company 3' },
  ];

  return (
    <div>
      <header>
        <button>Login</button>
        <input type="search" placeholder="Search..." />
      </header>
      <main>
        {companies.map((company, index) => (
          <CompanyInfo key={index} name={company.name} info={company.info} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;