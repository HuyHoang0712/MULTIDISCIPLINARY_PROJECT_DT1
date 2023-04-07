import mysql.connector

def insertHumidTemp(conn, roomID, humidity, temp):
    cursor = conn.cursor()

    insert_query = """
    insert into humid_temp (Room_id, Humidity, Temperature)
    values (%s, %s, %s)
    """
    values = (roomID, humidity, temp)
    cursor.execute(insert_query, values)
    conn.commit()
    cursor.close()

def insertLight(conn, roomID, light_power):
    cursor = conn.cursor()

    insert_query = """
    insert into light(Room_id, light_power)
    values (%s, %s)
    """
    values = (roomID, light_power)
    cursor.execute(insert_query, values)
    conn.commit()
    cursor.close()