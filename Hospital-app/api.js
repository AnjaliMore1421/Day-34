// src/services/api.js

export const loginApi = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userEmail = email?.trim();
      const userPass = password?.trim();

      if (userEmail && userPass) {
        resolve({
          token: "dummy-token-123",
          user: { email: userEmail },
        });
      } else {
        reject("Invalid credentials");
      }
    }, 800);
  });
};

export const fetchPatientsApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", name: "Rahul Sharma", disease: "Fever" },
        { id: "2", name: "Priya Mehta", disease: "Diabetes" },
      ]);
    }, 800);
  });
};