export interface User {
  id: string;
  username: string;
  name:string;
  email: string;
  password: string; 
  role: 'user' | 'admin';
}


export const mockUsers: User[] = [
  {
    id: '1',
    username: 'john_doe',
    name:"John Doe",
    email: 'john@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    id: '2',
    username: 'jane_smith',
    name:"Jane Smith",
    email: 'jane@example.com',
    password: 'password456',
    role: 'user',
  },
  {
    id: '3',
    username: 'admin_user',
    name:"Admin User",
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
  },
];

export const login = async (email: string, password: string): Promise<User | null> => {
  const user = mockUsers.find(
    (user) => user.email === email && user.password === password
  );
  
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = (): void => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
};
