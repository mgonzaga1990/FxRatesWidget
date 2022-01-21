FROM adoptopenjdk/openjdk11:alpine-slim as builder

COPY .mvn .mvn
COPY mvnw .
COPY pom.xml .
RUN ./mvnw dependency:go-offline

COPY src src
RUN ./mvnw package -DskipTests

FROM adoptopenjdk/openjdk11:alpine-jre as layers

COPY --from=builder target/fxWidget.jar fxWidget.jar
RUN java -Djarmode=layertools -jar fxWidget.jar extract

FROM adoptopenjdk/openjdk11:alpine-jre

COPY --from=layers dependencies/ .
COPY --from=layers snapshot-dependencies/ .
COPY --from=layers spring-boot-loader/ .
COPY --from=layers application/ .

ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]