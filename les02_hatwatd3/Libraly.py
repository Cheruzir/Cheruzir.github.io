class Libraly:
    '''
    Docstring for Libraly
    '''
    def __init__(self, name):
        self.name = name
        self.depar = []


    def add_deparment(self, depar):
        self.depar.append(depar)
        

    def stats(self, libraly, depar, books):
        d