export const authProvider = {
    login: ({ username, password }) => {
        // localStorage.setItem('username', username);
        var email=username;
        const request = new Request(`${process.env.REACT_APP_API_BASE_URL}/api/user/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ access_token, is_admin, username, avatar_url }) => {
                if (is_admin) {
                    localStorage.setItem('token', access_token);
                    localStorage.setItem('fullName', username);
                    localStorage.setItem('avatar', avatar_url || process.env.REACT_APP_DEFAULT_AVATAR);
                } else {
                    throw new Error('This user have no permission to login')
                }
            })
            .catch((error) => {
                throw new Error(error)
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('fullName');
        localStorage.removeItem('avatar');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.resolve([]),
    getIdentity: () => {
        return Promise.resolve({
            fullName: localStorage.getItem('fullName'),
            avatar: localStorage.getItem('avatar'),
        });
    }
};