export const ping = store => next => action => {
  console.log('Ping action: ${action.type}  -  ${action.payload}');
  return next(action);
}
