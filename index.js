function Spa(){

    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'Rachel', email:'rachel@gmail.com', password:'secret', balance:100}]}}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/login/" component={Login}/>
                <Route path="/deposit/" component={Deposit}/>
                <Route path="/withdraw/" component={Withdraw}/>
                <Route path="/balance/" component={Balance}/>
                <Route path="/AllData/" component={AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);