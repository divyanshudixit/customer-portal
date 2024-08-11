import React from 'react';
import { Customer } from '../types';
import ImageGrid from './ImageGrid';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => (
  <div className="customer-details">
    <h2>{customer.name}</h2>
    <h4>{customer.title}</h4>
    <p>{customer.address}</p>
    <ImageGrid />
  </div>
);

export default CustomerDetails;
