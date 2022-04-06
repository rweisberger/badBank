function Withdraw(){
    const [withdrawAmount, setWithdrawAmount] = React.useState(0);
    const ctx = React.useContext(UserContext);
    let activeUser = ctx.activeUser;

    // onclick update balance in user context
    function makeWithdraw(){
        console.log(typeof withdrawAmount);
        if(withdrawAmount <= activeUser.balance) {
            activeUser.balance -= withdrawAmount;
            console.log(activeUser.balance);
            setWithdrawAmount(0);
            document.getElementById('withdraw').value='';
        } else {
            alert('insufficient funds')
        }
    }

    return(
        <div className="container">
            <Card 
            bgcolor="info"
            header="Withdraw"
            body={
                <>
                Balance {activeUser ? activeUser.balance : '--'}<br/><br/>  
                Withdraw Amount<br/> 
                <input type="number" className="form-control" id="withdraw" placeholder="Enter amount" onChange={e => setWithdrawAmount(Number(e.currentTarget.value))}/><br/>
                <button type="submit" className="btn btn-light" onClick={makeWithdraw}>Withdraw</button>
                </>
            } 
            />
        </div>
    );
}

// problems: trying to add balance without using the ternary operator, error "cannot get property balance of undefined" and everything breaks. Need to have something to display when no user is logged in and when a user is logged in. 

// need to reset form so that the input is zero and the balance updates 