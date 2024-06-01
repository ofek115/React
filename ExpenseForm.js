import "./ExpenseForm.css"
import react, {useState} from "react"

const ExpenseForm = () => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const AmountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const DateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        setTitle("")
        setAmount("")
        setDate("")

        fetch(
            "http://localhost:3000/addToMongo/" + expenseData
        ).catch((err) => console.log(err));
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label> Title</label>
                <input type="text" value={title} onChange={titleChangeHandler}/>
            </div>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={amount}
                    onChange={AmountChangeHandler}
                />
            </div>
            <div>
                <label>Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    value={date}
                    onChange={DateChangeHandler} />
            </div>

            <button type="submit"> Add expense </button>
        </form>
    )
}
export default ExpenseForm