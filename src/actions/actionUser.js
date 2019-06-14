const loginUser = userInfo => {
    let url = "http://localhost:3001/login"

    return dispatch => {
        return (
            fetch(url, {
                method: "POST",
                body: JSON.stringify(userInfo),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log("Sucessfully Logged In")
                    localStorage.setItem("token", data.token)
                    
                } else {
                    this.setState({error: 'Invalid username or password'})
                }
            })
            .catch(error => console.log("Error " + error))
    )}
}

export default loginUser