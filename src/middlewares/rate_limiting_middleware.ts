import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60000, // 1 minute timw window for request limiting
  limit: 60, // allow a maximum of 60 requests per IP address within the time window
  standardHeaders: 'draft-8', // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    error: "Too many requests, please try again later."
  }
});

export default limiter;