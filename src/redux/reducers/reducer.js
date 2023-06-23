const types = {
    CHANGE_API_KEY: "CHANGE_API_KEY",
}

const initialState = {
  apiKey: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjllNjY3MjNhNThkNTgxNWVhNDBmN2IxN2VmOWNkNyIsInN1YiI6IjY0OTU5YWU2YTI4NGViMDEzOWVjODMyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gxckd4cFH_JTzzvmPQ8cy5bNR_41J-jp32FpSs_QJJo'
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.CHANGE_API_KEY: 
        return {
          ...state,
          apiKey: action.payload
        };
        
      default:
        return state;
    }
  };

export default myReducer;