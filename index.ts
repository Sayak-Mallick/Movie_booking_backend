import app from "./src/server.js";
import {config} from "./src/config/config.js";

const startServer = () => {
    const PORT = config.port
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
}

startServer();
