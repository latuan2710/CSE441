import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const getAuthHeader = async () => {
  const token = await AsyncStorage.getItem('token');
  return {Authorization: `Bearer ${token}`};
};

export const login = async (phone, password) => {
  const res = await axios.post('https://kami-backend-5rs0.onrender.com/auth', {
    phone,
    password,
  });

  return res.data;
};

export const getAllService = async () => {
  const res = await axios.get(
    'https://kami-backend-5rs0.onrender.com/services',
  );

  return res.data;
};

export const getServiceById = async id => {
  const res = await axios.get(
    `https://kami-backend-5rs0.onrender.com/services/${id}`,
  );

  return res.data;
};

export const addService = async (name, price) => {
  const headers = await getAuthHeader();
  const res = await axios.post(
    'https://kami-backend-5rs0.onrender.com/services',
    {name, price},
    {headers},
  );

  return res.data;
};

export const updateService = async (id, name, price) => {
  const headers = await getAuthHeader();
  const res = await axios.put(
    `https://kami-backend-5rs0.onrender.com/services/${id}`,
    {name, price},
    {headers},
  );

  return res.data;
};

export const deleteService = async id => {
  const headers = await getAuthHeader();
  const res = await axios.delete(
    `https://kami-backend-5rs0.onrender.com/services/${id}`,
    {headers},
  );

  return res.data;
};

export const getAllCustomer = async () => {
  const res = await axios.get(
    'https://kami-backend-5rs0.onrender.com/customers',
  );

  return res.data;
};

export const getCustomerById = async id => {
  const res = await axios.get(
    `https://kami-backend-5rs0.onrender.com/customers/${id}`,
  );

  return res.data;
};

export const addCustomer = async (name, phone) => {
  const headers = await getAuthHeader();
  const res = await axios.post(
    'https://kami-backend-5rs0.onrender.com/customers',
    {name, phone},
    {headers},
  );

  return res.data;
};

export const updateCustomer = async (id, name, phone) => {
  const headers = await getAuthHeader();
  const res = await axios.put(
    `https://kami-backend-5rs0.onrender.com/customers/${id}`,
    {name, phone},
    {headers},
  );

  return res.data;
};

export const deleteCustomer = async id => {
  const headers = await getAuthHeader();
  const res = await axios.delete(
    `https://kami-backend-5rs0.onrender.com/customers/${id}`,
    {headers},
  );

  return res.data;
};

export const getAllTransaction = async () => {
  const res = await axios.get(
    'https://kami-backend-5rs0.onrender.com/transactions',
  );

  return res.data;
};

export const getTransactionById = async id => {
  const res = await axios.get(
    `https://kami-backend-5rs0.onrender.com/transactions/${id}`,
  );

  return res.data;
};

export const addTransaction = async (customerId, services) => {
  const headers = await getAuthHeader();
  const res = await axios.post(
    'https://kami-backend-5rs0.onrender.com/transactions',
    {customerId, services},
    {headers},
  );

  return res.data;
};

export const deleteTransaction = async id => {
  const headers = await getAuthHeader();

  const res = await axios.delete(
    `https://kami-backend-5rs0.onrender.com/transactions/${id}`,
    {headers},
  );

  return res.data;
};

export const getAllUser = async () => {
  const res = await axios.get(
    'https://kami-backend-5rs0.onrender.com/users',
  );

  return res.data;
};