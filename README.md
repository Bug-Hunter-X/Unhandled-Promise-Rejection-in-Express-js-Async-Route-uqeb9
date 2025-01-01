# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  The `bug.js` file shows a route that uses a promise but lacks proper error handling. This can lead to silent failures, making debugging difficult.

The `bugSolution.js` file provides a corrected version with robust error handling using a centralized middleware function.