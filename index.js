let name

const fetchUser = async () => {
     const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const userData = await userResponse.json()
    console.log(userData.name)
}

// fetchUser(userName)
fetchUser()
