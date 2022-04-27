import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";

app.get("/recipes", getAllRecipes)

app.get("/users", getAllUsers)