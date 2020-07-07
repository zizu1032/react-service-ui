export const fetchConsole = (url => {
    console.log('📥%cfetching: ' + url, 'background: #222; color: #bada55')
})

export const resultConsole = (result) => {
    if (result === true) {
        console.log('🟢%cSuccess!', 'color: green')
    }
    else {
        console.log('🔴%cError', 'color: red')
    }
}



export const fetchResultPrint = (result ) => {
    console.log('📃%cFetch result:','background: white; color: green')
    console.log(result)
}