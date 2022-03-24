import { getStudents } from "../services/api";
import { getAllStudentsError, getAllStudentsRequest, getAllStudentsSuccess } from "./studentsAction";

export const getAllStudentsOperation = () => async (dispatch, _) => {
    try {
      dispatch(getAllStudentsRequest());
      const res = await getStudents();
  
      dispatch(getAllStudentsSuccess(res.data.data));
    } catch (error) {
      dispatch(getAllStudentsError(error.message));
    }
  };
  