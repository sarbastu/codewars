/* DESCRIPTION: */
/* ==========================================================================
Anika's phonebook is pretty messy.
For example, the same phone number can be written in such a way:
0049891234567
+49891234567
+49-89-123-45-67
+49(89)1234567
+49(0)891234567
0 (89) 123-45-67
0891234567
089 12-34-56-7
123-45-67
12-34-567
123 45 67

Actually, there can be dashes and spaces at whatever position.
The country and area code can be written in different manner or can be 
missing.

So, the country code (first digits) could be written 0049, +0049 or +49.
The area code (digits after the country code) could be written (0)89, (89), 
089 or 89.
All phone numbers are local - that means, they belong to the same country 
and area.

Now Anika tries to add a new phone number into her phonebook in the same 
messy format.

Task
You must write a function, which returns:
false - if the number already exists in the phonebook.
true - if the number doesn't exist in the phonebook.
========================================================================== */
/* My solution 
================================================ */
function checkPhoneNumber(phoneBook, phoneNumber) {
  const book = phoneBook.map((e) =>
    e.replace(/[^\d]/g, '').replace(/^(00490|0049|49|490|0)?89(.{7})$/, '$2')
  )
  const number = phoneNumber
    .replace(/[^\d]/g, '')
    .replace(/^(00490|0049|49|490|0)?89(.{7})$/, '$2')

  return !book.some((e) => e.indexOf(number) === 0 || number.indexOf(e) === 0)
}

/* ===============================================
* Solution by other users (usually highest voted) 
================================================ */
function checkPhoneNumber(book, numb) {
  var norm = (s) => s.replace(/-| /g, '').slice(-7)
  numb = norm(numb)
  return book.findIndex((n) => norm(n) == numb) == -1
}

const checkPhoneNumber = (book, number) =>
  ((fn) => !book.map(fn).includes(fn(number)))((n) =>
    n.replace(/\D/g, ``).slice(-7)
  )
