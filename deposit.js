function Deposit(){
    const [depositAmount, setDepositAmount] = React.useState(0)
    const ctx = React.useContext(UserContext);
    let activeUser = ctx.activeUser;

    console.log('deposit amount:',typeof depositAmount);

function makeDeposit(){
    // console.log(typeof activeUser.balance);
    console.log('deposit amount:',typeof depositAmount);
    activeUser.balance += depositAmount;    
    setDepositAmount(0);
    document.getElementById('deposit').value='';
    // the last two lines make the balance update, by changing state, and reset the input field
}

    return(
        <div className="container">
            <Card 
                bgcolor="info"
                header="Deposit"
                body={
                    <>
                    Balance {activeUser ? activeUser.balance : '--'}<br/><br/>  
                    Deposit Amount<br/> 
                    <input type="number" className="form-control" id="deposit" placeholder="Enter amount" onChange={e => setDepositAmount(Number(e.currentTarget.value))} /><br/>
                    <button type="submit" className="btn btn-light" onClick={makeDeposit}>Deposit</button>
                    </>
                } 
            />
        </div>
    );
}

//input is a string, even though the state is initialized to the number 0. It was not obvious with the withdraw because 100 - "90" is 10, but in the deposit 100 + "90" is 10090. Thats is why I am adding Number() to the onChange.