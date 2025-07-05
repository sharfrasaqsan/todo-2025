const apiRequest = async (url = "", objMethod = null, errMsg = null) => {
  try {
    const response = await fetch(url, objMethod);
    if (!response.ok) throw Error("Please reload the app");
  } catch (err) {
    errMsg = err.Message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
