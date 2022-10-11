class Configuration:
    def __init__(self):
        self.Version = 1.0
        self.Author = 'Jhon David Castillo Guaita'

    ### MongoDB
    def MONGO_DB_SERVER(self):
        return 'mongodb://localhost:27017/'

    def MONGO_DB_PORT(self):
        return 27017

    def MONGO_DB(self):
        return 'test'

    def MONGO_COLL_FOOD(self):
        return 'food'

