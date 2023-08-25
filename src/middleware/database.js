import dbConnect from "@/lib/dbConnect";

const databaseMiddleware = handler => async (req, res) => {
  const db = await dbConnect(); // Connect to the database
  // Attach the db object to the request for use in the route handler
  req.db = db;

  // Call the route handler
  const response = await handler(req, res);

  return response;
};

export default databaseMiddleware;