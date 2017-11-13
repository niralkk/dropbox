1) Start Zookeeper Server
	zookeeper-server-start.bat ..\..\config\zookeeper.properties
2) Start Kafka
	kafka-server-start.bat ..\..\config\server.properties

3) Create Kafka topics

	kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic login_topic
	kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic response_topic
	kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic list_topic
	kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic register_topic
	kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic directory_topic


4) Start Mongo Server
	mongod
	
5) Start dropboxnode Server
	cd dropboxnode
	npm install
	npm start

6) Start dropboxkafka Server
	cd dropboxkafka
	npm install
	npm start

7) Start dropboxreact Server
	cd dropboxreact
	npm install
	npm start


Mocha Testing

8) Start dropboxnode Server
	cd dropboxnode
	npm test
