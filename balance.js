function Balance(){
    const ctx = React.useContext(UserContext);
    let activeUser = ctx.activeUser;



    return(
        <div className="container">
            <Card 
                bgcolor="info"
                header={activeUser ? `Welcome ${activeUser.name}` : 'Login to your account'}
                body={
                    <>
                    Balance {activeUser ? activeUser.balance : '--'}<br/><br/>  
                    </>
                } 
            />
        </div>
    );
}