import serial.tools.list_ports
import mysql.connector
import database


conn = mysql.connector.connect(
    host='localhost',
    password='hieu1905',
    user='root',
    database='smartHome'
)
#find Port
def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB Serial Device" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    # return commPort
    return "COM11"


def processData(client, data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    value = splitData[2]

    if value == None or float(value) < 0:
        print("Invalid input value")
        return

    if splitData[1] == "T":
        client.publish("cambien1", splitData[2])
        # database.insertHumidTemp(conn, 1, 0,float(value))
    elif splitData[1] == "H":
        client.publish("cambien2", splitData[2])
        # database.insertHumidTemp(conn, 1, float(value), 0)


mess = ''
def readSerial(client):
    bytesToRead = ser.inWaiting()
    if (bytesToRead > 0):
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(client, mess[start:end + 1])
            if (end == len(mess)):
                mess = ""
            else:
                mess = mess[end + 1:]


if getPort() != 'None':
    ser = serial.Serial( port=getPort(), baudrate=115200)
    print(ser)