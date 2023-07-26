const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`); // req.originalUrl is the URL that was requested
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // If the error status code is 200, set it to 500
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  // Check for mongoose CastError
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 400;
    message = 'Invalid ID';
  }

  res.status(statusCode);
  res.json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
