import static spark.Spark.*;


public class main {
    public static void main(String[] args) {
        staticFileLocation("/public");




        get("/",(request, response) -> {
            System.out.println("Step 1");
            response.redirect("/index.html");
            return null;
        });

        get("/hearts", (request, response) -> {
            System.out.println("Step 7");
            response.type("application/json");
            return "{\n" +
                    "  \"name\" : \"Ted\",\n" +
                    "  \"age\" : 85,\n" +
                    "  \"alive\" : true\n" +
                    "}";
        });

    }
}
