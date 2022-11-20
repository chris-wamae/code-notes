//array methods

.pop()
//removes the last element from an array

.unshift()
//removes the first element from an array

.push()
//adds an entry as to the end of an array

.shift()
//adds an entry to the beginning of an array

.slice()
//removes a part of an array and returns it as a new array
//it can take two parameters, the first indicating where the
//slicing should start and the entry before which it should end
//not giving a second parameter will run the slice to the end

.splice()
//removes or adds entries to an array destructively 
//takes up to 3 parameters: an array index, the number of
//entries that should be affected, and the new arrays if any
//eg.
numbers.splice(2,0,"newEntry1","newEntry2","newEntryEtc")