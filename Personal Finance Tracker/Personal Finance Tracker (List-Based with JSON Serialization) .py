#import JSON file
import json

# Global list to store transactions
transactions = []

#Function to load transaction from a JSON file.
def load_transactions():
    try:
        with open('transactions.json', 'r') as file:
            file_content = file.read()
            if file_content.strip():  
                global transactions
                transactions = json.loads(file_content)
    except FileNotFoundError:
        pass

# Function to save transactions to a JSON file.
def save_transactions():
    with open('transactions.json', 'w') as file:
        json.dump(transactions, file)


#Function to add a new transaction.
def add_transaction():
    while True:
        #ask the user to enter a input.
        amount = input('Enter the amount: ')
        try:
            amount=float(amount)
            break
        except ValueError:
            # If the input is not a valid number, ask again.
            print('*** Invalid input, please enter a number ***')
    # Ask the user to enter the category.
    category=str(input('Enter the category : '))
    # Ask the user to enter the date.
    date = input('Enter date (YYYY-MM-DD): ')
    while True:
        # Ask the user to enter the transaction type.
        transaction_type = input('Enter type (Income/Expense): ')
        # Check if the input is valid.
        if transaction_type == 'income' or transaction_type == 'expense':
            break
        else:
            # If the input is not valid, prompt again.
            print('*** Invalid input try again!!! ***')
    new_transaction = [amount, category, transaction_type, date]
    transactions.append(new_transaction)
    save_transactions()
    print()
    print('--Transaction added successfully.--')


# Function to view all transactions
def view_transactions():
    # Check if there are any transactions
    if not transactions:
        print("No Transactions Found!")
    else:
        for i in range (len(transactions)):
            transaction = transactions[i]
            print(f"{i+1}.Amount:{transaction[0]} ,  Category:{transaction[1]} ,  Type:{transaction[2]} ,  Date:{transaction[3]}")


#Function to update the transaction.
def update_transaction():
    view_transactions()
    # Check if there are any transactions.
    if not transactions:
        return
    print()
    try:
        # Ask the user to enter the index of the transaction to update.
        index = int(input("Enter the index of the transaction to update: "))- 1
        # Check if the index is valid.
        if index < 0 or index >= len(transactions):
            print("*** Invalid index enter a valid index ***.")
            return
        while True:
            #Ask the user to enter the new amount.
            amount = input('Enter the new amount: ')
            try:
                amount=float(amount)
                break
            except ValueError:
                # If the input is not a valid number, prompt again.
                print('*** Invalid input try again!!! ***')
        # Ask the user to enter the category.
        category=str(input('Enter the category : '))
        # Ask the user to enter the new date.
        date = input('Enter the new date (YYYY-MM-DD): ')
        while True:
            transaction_type = input('Enter the new type (Income/Expense): ')
            # Check if the input is valid.
            if transaction_type == 'income' or transaction_type == 'expense':
                break
            else:
                # If the input is not valid, prompt again.
                print('*** Invalid input try again!!! ***')
        transactions[index] = [amount, category, transaction_type, date]
        save_transactions()
        print('-- Transaction updated successfully. --')
    except ValueError:
        print("*** Invalid input try again!!! ***")
        
        
#Function to Delete a transaction
def delete_transaction():
    view_transactions()
    print()
    # Check if there are any transactions.
    if not transactions:
        return
    print()
    try:
        #Ask the user to enter the index of the transaction to delete
        index = int(input("Enter the index of the transaction to delete: ")) - 1
        # Check if the index is valid
        if index < 0 or index >= len(transactions):
            print("Invalid index,Enter a valid index.")
            return
        # Delete the transaction at the specified index.
        del transactions[index]
        # Save the updated transactions to the JSON file
        save_transactions()
        print('-- Transaction deleted successfully.--')
    except ValueError:
        print("*** Invalid input try again!!! ***")

        
#function to display summary
def display_summary():
    # Calculate total income, total expense, and net income from transactions
    total_income = sum(transaction[0] for transaction in transactions if transaction[2] == "income")
    total_expense = sum(transaction[0] for transaction in transactions if transaction[2] == "expense")
    net_income = total_income - total_expense
    #print summary
    print(f"Total Income: {total_income}")
    print(f"Total Expense:{total_expense}")
    print(f"Net Income: {net_income}")


#function to display main menu
def main_menu():
    # Load transactions from the JSON file
    load_transactions()  
    while True:
        print("\nPersonal Finance Tracker")
        print()
        print("1. Add Transaction")
        print("2. View Transactions")
        print("3. Update Transaction")
        print("4. Delete Transaction")
        print("5. Display Summary")
        print("6. Exit")
        print()
        # Prompt the user to enter their choice
        choice = input("Enter your choice: ")

        if choice == '1':
            print()
            add_transaction()
        elif choice == '2':
            print()
            view_transactions()
        elif choice == '3':
            print()
            update_transaction()
        elif choice == '4':
            print()
            delete_transaction()
        elif choice == '5':
            print()
            display_summary()
        elif choice == '6':
            print()
            print("Exiting program.")
            break
        else:
            print("Invalid choice. Please try again.")

# Entry point of the program
if __name__ == "__main__":
    main_menu()
