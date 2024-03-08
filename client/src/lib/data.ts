import axios from 'axios';

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getAllMentors = async() => {
    try {
      const res = await axios.get(`${apiURL}/mentor`);
      return res;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.response.data.message || error.message);
    }
}

export const getAssigned = async( mentorId: any ) => {
    try {
      const res = await axios.get(
        `${apiURL}/mentor/students/assigned/${mentorId}`
      );
      return res;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.response.data.message || error.message);
    }
}

export const getUnAssigned = async() => {
    try {
      const res = await axios.get(`${apiURL}/mentor/students/unassigned`);
      return res;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.response.data.message || error.message);
    }
}

export const assignStudent = async( mentorId: any, studentId: any ) => {
    try {
      const res = await axios.post(`${apiURL}/mentor/assign`, {
        mentorId,
        studentId,
      });
      return res;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.response.data.message || error.message);
    }
}

export const unAssignStudent = async( mentorId: any, studentId: any ) => {
    try {
        const res = await axios.post(`${apiURL}/mentor/unassign`, {
          mentorId,
          studentId,
        });
        return res;
    } catch (error: any) {
        console.error(error);
        throw new Error(error.response.data.message || error.message);
    }
}

export const updateStudent = async( data: any ) => {
    try {
      const res = await axios.put(`${apiURL}/mentor/marks/edit`, data);
      return res;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.response.data.message || error.message);
    }
}

export const addMarks = async( data: any ) => {
    try {
      const res = await axios.post(`${apiURL}/mentor/marks/add`, data);
      return res;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.response.data.message || error.message);
    }
}