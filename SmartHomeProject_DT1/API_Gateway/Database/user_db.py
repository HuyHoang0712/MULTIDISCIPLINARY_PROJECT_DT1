def get_database():
    from pymongo import MongoClient
    import pymongo
    
    URI = "mongodb+srv://DT1Project_API:DT1123@dt1projectapi.hq3qnqo.mongodb.net/?retryWrites=true&w=majority"
    
    client = MongoClient(URI)
    
    try:
        client.ping.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)
        
    return client['DT1_API']