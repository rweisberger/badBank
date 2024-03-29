function Login(){
    const [loginEmail, setLoginEmail] = React.useState('');
    const [loginPassword, setLoginPassword] = React.useState('')
    const [loggedOut, setLoggedOut] = React.useState('');

    // const [user, setUser] = React.useState('');
    const ctx = React.useContext(UserContext);


    // button needs onClick to find user
    // use state to keep track of login status 
    // use ternary operator to display logout?

    function findUser(){
        let data = ctx.users;
           data.forEach(user => {
            if(loginEmail === user.email && loginPassword === user.password) {
                    console.log('user match');
                    ctx.activeUser = user;
                    console.log(ctx);
                    setLoggedOut(false);;       
                }
        }); 
    }

    const logoutUser = () => {
        delete ctx.activeUser;
        setLoginEmail('');
        setLoginPassword('');
        setLoggedOut(true);
        console.log(ctx);
    };

    // for logoutUser I tried to clear the form with document.getElementById('email').value='' in find user and in the logout user, but it did not work, probably because the fields were not present when the lines of code were read and errors were thrown. Since I used the ternary operator to display two forms of the card, i followed Abel's example and reset the state to ''


    return(
        <div className="container">
            <Card 
                bgcolor="info"
                header="Login"
                body={!ctx.activeUser ? (
                    <>
                    Email address<br/> 
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)}/><br/>
                    Password<br/> 
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={findUser}>Login</button>
                    </>
                ) : (
                    <>
                    Welcome {ctx.activeUser.name}!<br/><br/>
                    <button type="submit" className="btn btn-light" onClick={logoutUser}>Logout</button>
                    </>
                )
                } 
            />
        </div>
    );
}