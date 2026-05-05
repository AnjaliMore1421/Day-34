#  Day 34 - Frontend Task (22/01/2026)

##  Deep Theory: API Calls in React Native

---

## 1️. API Calls in React Native

API calls are used to communicate with backend servers to fetch or send data. In React Native, this is commonly done using libraries like **Axios** or the built-in `fetch()`.

###  Why API Calls?
- Fetch data from server (GET)
- Send data (POST, PUT, DELETE)
- Enable dynamic and real-time apps

---

## 2️. Axios + React Query for Mobile

###  Axios
Axios is a promise-based HTTP client used for making API requests.

####  Features:
- Easy syntax
- Automatic JSON parsing
- Request & response interceptors
- Error handling

####  Example:
```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};
🔸 React Query (TanStack Query)

React Query is used for data fetching, caching, and synchronization.

 Advantages:
1)Automatic caching
2)Background data refresh
3)Loading & error state handling
4)Reduces API calls

 Example:
import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api';

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};



3️. AsyncStorage for Offline Storage

AsyncStorage is used to store data locally on the device.

 Use Cases:
Store user token
Save user preferences
Cache API data for offline use

 Example:
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
await AsyncStorage.setItem('token', 'abc123');

// Get data
const token = await AsyncStorage.getItem('token');

// Remove data
await AsyncStorage.removeItem('token');



4️. Handling Network Loss Gracefully
🔸 Problem:

Mobile apps often face unstable internet connections.

🔸 Solutions:
1) Detect Network Status
import NetInfo from '@react-native-community/netinfo';

NetInfo.addEventListener(state => {
  console.log('Connection type:', state.type);
  console.log('Is connected?', state.isConnected);
});
2) Best Practices:
Show "No Internet" message
Disable actions requiring API
Retry failed requests automatically
Use cached data when offline



5️. JWT Authentication in Mobile Apps

JWT (JSON Web Token) is used for secure authentication between client and server.

🔸 Flow:
User logs in (email/password)
Server returns JWT token
Token is stored in AsyncStorage
Token is sent in API headers

 Example:
Store Token:
await AsyncStorage.setItem('token', token);
Attach Token to Requests:
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
