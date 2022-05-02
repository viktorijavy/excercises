function identifyInvalidTransactions(transactions) {
    const [transa, transb] = transactions
    const valuesOfTransA = transa.split(',')
    const valuesOfTransB = transb.split(',')

    const [nameA, timeA, amountA, locationA] = valuesOfTransA
    const [nameB, timeB, amountB, locationB] = valuesOfTransB



    if (Number(amountA) > 2000 || Number(amountB) > 2000) {

        return transactions
    }

    if ((Number(timeA) - Number(timeB) <= 60 || Number(timeB) - Number(timeA) <= 60) && nameA === nameB && Number(amountA) === Number(amountB)) {


        return transactions

    }
    if ((Number(timeA) - Number(timeB) <= 60 || Number(timeB) - Number(timeA) <= 60) && nameA === nameB && locationA !== locationB) {

        return transactions
    }

    if (Number(timeA) === Number(timeB) && nameA === nameB) {
        return transactions
    }
    return []
}


identifyInvalidTransactions(["john,20,150,stockholm", "john,30,300,stockholm"])

identifyInvalidTransactions(["john,20,2100,stockholm", "john,50,10000,beijing"]) //CSV comma seperated value