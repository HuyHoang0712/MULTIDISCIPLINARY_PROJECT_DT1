def get_database():
	from pymongo import MongoClient
	import pymongo

	# Provide the mongodb atlas url to connect python to mongodb using pymongo
	CONNECTION_STRING = 'mongodb+srv://DT1Project_API:DT1123@dt1projectapi.hq3qnqo.mongodb.net/?retryWrites=true&w=majority'

	# Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
	from pymongo import MongoClient
	client = MongoClient(CONNECTION_STRING)
 
    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

	return client['DT1_API']