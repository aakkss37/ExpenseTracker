import React from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"




const NewExpense = (props)=>{

        const SaveExpenseDataHaldler = (expenseData)=>{
                const newExpenseData = {
                        ...expenseData,
                        id: Math.random().toString()
                }
                // console.log(expenseData)

                props.onAddExpense(newExpenseData)
        }

        return(
                <div className="new-expense">
                        <ExpenseForm onSaveExpenseData = {SaveExpenseDataHaldler}/>
                </div>
        )
}

export default NewExpense