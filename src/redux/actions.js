const setNewApiKey = (apiKey) => ({
        payload:  apiKey,
        type: 'CHANGE_API_KEY'
});

export { setNewApiKey };