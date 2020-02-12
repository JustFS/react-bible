export const saveDesign = (design) => {
  return (dispatch, getState) => {

    dispatch({type: 'SAVE_DESIGN', design})
  }
}