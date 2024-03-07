//./loaders/index.js
import expressLoader from "./express-loader.js";
import connectDB from './db-loader.js';

export async function init(server){
    await connectDB();
    expressLoader(server);
}
