import axios from 'axios';

export interface User {
    id: string;
    email: string;
    password: string;
    date: string;
}

export async function getAllData(email: string, password: string): Promise<User[] | string> {
    const formData = { email, password };

    try {
        const response = await axios.post('http://localhost:1001/api.login', formData, {
            headers: { 'Content-Type': 'application/json' }
        });

        // Check if response data is an array of users
        if (!response.data || !Array.isArray(response.data)) {
            return "NO DATA!";
        }

        const usersArray: User[] = response.data.map((user: any) => ({
            id: user.id,
            email: user.email,
            password: user.password,
            date: user.date
        }));

        return usersArray;
    } catch (error) {
        console.log('Error during request:', error);
        return "Error for login";
    }
}
