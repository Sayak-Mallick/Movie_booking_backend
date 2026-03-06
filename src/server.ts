import express, { Application } from "express";
import { config } from "@/config/config";
import cors, { CorsOptions } from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import limiter from "@/middlewares/rate_limiting_middleware";

const app: Application = express();

const corsOptions: CorsOptions = {
  origin(origin, callback) {
    // callback(new Error("Cors Error"), false);
    if (config.env === "development" || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Cors Error: ${origin} is not allowed by CORS`), false);
    }
  }
};

// apply CORS middleware
app.use(cors(corsOptions))

// Enable JSON parsing for incoming requests
app.use(express.json());

// Enable URL-encoded request body parsing with extended mode, which allows rich objects and arrays via querystring library. This is useful for parsing complex data structures sent in the request body.
app.use(express.urlencoded({ extended: true }));

// Enable cookie parsing for incoming requests, allowing the server to read and manipulate cookies sent by clients. This is essential for handling sessions, authentication, and other features that rely on cookies.
app.use(cookieParser());

// Enable response compression to reduce the size of the response body (payload) and improve performance.
app.use(compression({
  threshold: 1024, // Only compress responses larger than 1KB
}))

// Enable security-related HTTP headers to protect the app from common web vulnerabilities.
app.use(helmet());

// Apply rate limiting middleware to limit the number of requests from a single IP address within a specified time window.
app.use(limiter);

const startServer = async () => {
  const PORT = config.PORT;
  app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
  });
}

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Movie Booking API"
  });
})

startServer();
