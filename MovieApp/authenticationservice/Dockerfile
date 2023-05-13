#here openjdk is docker image for Java 11, depends on java version mentioned in pom.xml
FROM openjdk

#this command refers to the working directory of your image
WORKDIR usr/lib

#copy executable file and put it your working directory
#add source destination
ADD ./target/authenticationservice-0.0.1-SNAPSHOT.jar /usr/lib/authenticationservice-0.0.1-SNAPSHOT.jar

#run the jar file
ENTRYPOINT ["java","-jar","authenticationservice-0.0.1-SNAPSHOT.jar"]