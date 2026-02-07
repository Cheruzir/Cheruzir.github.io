class Book:
    '''
    Книга (Название, автор, год создания)
    '''
    def __init__(self, name, author, year):
        self.name = name
        self.author = author
        self.create = year
    def get_info(self):
        string = f"Название: {self.name}"
        return string
    def print_info(self):
        '''
        Описание книги
        
        :param self: Текущий обьект
        '''
        print(f"Название: {self.name}")