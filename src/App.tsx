import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types';
import { mockCustomers } from './mockCustomers';
import './styles.css';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(1);

  console.log("mockCustomers:", mockCustomers);
  console.log("customers state:", customers);

  const selectedCustomer = selectedCustomerId !== null 
    ? customers.find(customer => customer.id === selectedCustomerId) 
    : undefined;

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
