function AllData(){
    const ctx = React.useContext(UserContext);

    return(
        <h1>All Data<br/>
            {/* {`Hello ${ctx.users[0].name}!`} */}
            {JSON.stringify(ctx)}
        </h1>
    );
}