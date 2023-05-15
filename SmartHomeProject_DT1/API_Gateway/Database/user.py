def get_database():
    from pymongo import MongoClient
    import pymongo

    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = 'mongodb+srv://DT1Project_API:DT1123@dt1projectapi.hq3qnqo.mongodb.net/?retryWrites=true&w=majority'

    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    from pymongo import MongoClient
    client = MongoClient(CONNECTION_STRING)
	return client['DT1_API']