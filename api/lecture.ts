const baseURL = "https://api.suwiki.kr/lecture";

export interface Lecture {
  count: number;
  data: [
    {
      id: number;
      semesterList: string;
      professor: string;
      lectureType: string;
      lectureName: string;
      majorType: string;
      lectureTotalAvg: number;
      lectureSatisfactionAvg: number;
      lectureHoneyAvg: number;
      lectureLearningAvg: number;
    }
  ];
}

export const getMainLectureList = async () => {
  const response = await fetch(`${baseURL}/all`);
  const data = await response.json();
  return data;
};
