- Consider using graphql on a server instead of rest. In that case, we can avoid overfetching and selectors, keeping information regarding business logic just inside of models
Also, as an option, we can avoid sending multiple REST requests in favor of one graphql query. For example, when getting the list of organisations where user is an admin


Rename modules to models and have hoa in the same dir as models and controllers