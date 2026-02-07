'''
Docstring for les02.main
'''

from Book import Book
from Deparment import Deparment
from Libraly import Libraly
    
book1 = Book("Мастер и Маргарита", "Михаил Булгаков", 1925)
print(book1.name)
book1.print_info()
info = book1.get_info()
book2 = Book(input("Напишите название книги: "), input("Напишите автора книги: "), input("Напишите дату создании книги: ")
)

deparment1 = Deparment("Умный отдел", book1)

deparment1.add_book(book2)
deparment1.print_info(deparment1)