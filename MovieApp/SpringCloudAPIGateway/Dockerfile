FROM openjdk
WORKDIR usr/lib
EXPOSE 9000
ADD ./target/SpringCloudAPIGateway-0.0.1-SNAPSHOT.jar /usr/lib/SpringCloudAPIGateway-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","SpringCloudAPIGateway-0.0.1-SNAPSHOT.jar"]