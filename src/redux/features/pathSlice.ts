import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course, Program } from "@/types/types";
import { UdemyCourse } from "@/app/(main-content)/analysis/fetch-udemy";

type PathState = {
  currentPath: string;
  completedSkills: string[];
  programSkills: { [x: string]: string[] };
  program: Program | null;
  coursesSkills: { [key: string]: string[] };
  courses: Course[] | null;
  udemyCourses: UdemyCourse[] | null;
  udemyCoursesWithSkills: { [key: string]: string[] };
};

type SkillStatus = {
  skill: string;
  status: string;
};

const initialState: PathState = {
  currentPath: "",
  completedSkills: [],
  program: null,
  programSkills: {},
  courses: null,
  coursesSkills: {},
  udemyCourses: null,
  udemyCoursesWithSkills: {},
};

export const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setCurrentPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload;
    },
    setProgram: (state, action: PayloadAction<Program>) => {
      state.program = action.payload;
    },
    setProgramSkills: (
      state,
      action: PayloadAction<{ [x: string]: string[] }>
    ) => {
      state.programSkills = action.payload;
    },
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    setCoursesSkills: (
      state,
      action: PayloadAction<{ [key: string]: string[] }>
    ) => {
      state.coursesSkills = action.payload;
    },
    setUdemyCourses: (state, action: PayloadAction<UdemyCourse[]>) => {
      state.udemyCourses = action.payload;
    },
    setUdemyCoursesWithSkills: (
      state,
      action: PayloadAction<{ [key: string]: string[] }>
    ) => {
      state.udemyCoursesWithSkills = action.payload;
    },
    setCompletedSkills: (state, action: PayloadAction<SkillStatus>) => {
      const { skill, status } = action.payload;
      switch (status) {
        case "Completed": {
          if (!state.completedSkills.includes(skill)) {
            state.completedSkills = [...state.completedSkills, skill];
          }
          break;
        }
        case "Start Soon": {
          if (state.completedSkills.includes(skill)) {
            state.completedSkills.splice(
              state.completedSkills.indexOf(skill),
              1
            );
          }
          break;
        }
        case "In Progress": {
          if (state.completedSkills.includes(skill)) {
            state.completedSkills.splice(
              state.completedSkills.indexOf(skill),
              1
            );
          }
          break;
        }
        default: {
          break;
        }
      }
    },
    resetState: (state) => {
      state.currentPath = "";
      state.completedSkills = [];
      state.program = null;
      state.programSkills = {};
      state.courses = null;
      state.coursesSkills = {};
      state.udemyCourses = null;
      state.udemyCoursesWithSkills = {};
    },
  },
});

export const {
  setCurrentPath,
  setCompletedSkills,
  setProgram,
  setCourses,
  setProgramSkills,
  setCoursesSkills,
  setUdemyCourses,
  setUdemyCoursesWithSkills,
  resetState,
} = pathSlice.actions;

export default pathSlice.reducer;
