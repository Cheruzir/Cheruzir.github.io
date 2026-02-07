

class Deparment:
    '''
    Docstring for deparment
    '''
    def __init__(self, name, boooks):
        self.name = name
        self.boooks = []
    def add_book(self, book):
        self.boooks.append(book)
    def oldest_book(self, book):
        if book.create < 1990:
            return book
    def print_info(self, book):
        '''
        Описание Отдела
        
        :param self: Текущий обьект
        '''
        print(f"Название: {self.name}")
        print(f"Книги: {self.boooks}")
    # Конструктор (Создает область памяти, в которую записывает)