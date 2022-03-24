import axios from 'axios';

// export const getStudents = async () => {
//   try {
//     return await axios.get(`https://test-task-j.herokuapp.com/data`);
//   } catch (error) {
//     throw error;
//   }
// }

export const getStudents = async ({
    limit = 10, 
    page = 1,
    sortBy = '',
    sortDir = '-1',
    search,
}) => {
   try {
    const { data } = await axios.get(`https://test-task-j.herokuapp.com/data`, {
        params: {
          size: limit,
          page,
          sortBy,
          sortDir,
          search,
        },
      });
      console.log(data)
      return data;
      
    } catch (error) {
      throw error;
   } 
   
}