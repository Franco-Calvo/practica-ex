import Category from '../Category.js'
import "dotenv/config.js";
import "../../config/database.js";

let categories = [
  {
    name: "shonen",
    description: "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
    admin_id: "63f66f8daea87ce097984ac9"
},{
    name: "manhwa",
    description: "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
    admin_id: "63f66f8daea87ce097984ac9"
},{
    name: "marvel",
    description: "American superhero comics",
    admin_id: "63f66f8daea87ce097984ac9"
},{
    name: "dc",
    description: "American superhero comics",
    admin_id: "63f66f8daea87ce097984ac9"
},{
    name: "shojo",
    description: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
    admin_id: "63f66f8daea87ce097984ac9"
},{
    name: "seinen",
    description: "Japanese seinen tells stories with a mature tone.",
    admin_id: "63f66f8daea87ce097984ac9"
}
]

Category.insertMany(categories);