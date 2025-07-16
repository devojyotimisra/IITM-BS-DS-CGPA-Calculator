import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Course, initialCourses, gradeValueMap } from "@/types";
import CourseGradeSelect from "./CourseGradeSelect";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function CGPACalculator() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [cgpa, setCgpa] = useState<number | null>(null);

  const handleGradeChange = (courseName: string, grade: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.name === courseName ? { ...course, grade } : course
      )
    );
  };

  const calculateCGPA = () => {
    const coursesWithGrades = courses.filter(
      (course) => course.grade !== null && course.grade !== "Not appeared yet"
    );
    
    if (coursesWithGrades.length === 0) {
      setCgpa(null);
      return;
    }

    const totalCredits = coursesWithGrades.reduce(
      (sum, course) => sum + course.credits,
      0
    );
    
    const weightedSum = coursesWithGrades.reduce(
      (sum, course) => sum + course.credits * (course.grade ? gradeValueMap[course.grade] : 0),
      0
    );

    setCgpa(weightedSum / totalCredits);
  };

  const resetGrades = () => {
    setCourses(courses.map(course => ({
      ...course,
      grade: null
    })));
    setCgpa(null);
  };

  const gradedCoursesCount = courses.filter(
    (course) => course.grade !== null
  ).length;

  return (
    <div className="w-full">
      <Card className="w-full max-w-2xl mx-auto bg-gray-900 border-gray-800 shadow-xl">
        <CardHeader className="border-b border-gray-800 pb-6 px-6">
          <CardTitle className="text-2xl font-bold text-gray-100 tracking-tight">
            IITM BS(DS) CGPA Calculator
          </CardTitle>
          <CardDescription className="text-base text-gray-400">
            Select your grades for each course to calculate your CGPA
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6 px-6">
          <div className="flex flex-row items-center justify-between mb-4 gap-2">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="outline" className="px-3 border-gray-700 text-sm">
                {gradedCoursesCount} / {courses.length} courses graded
              </Badge>
              
              {cgpa !== null && (
                <Badge className="px-3 bg-gray-800 hover:bg-gray-800 text-gray-100 text-sm">
                  CGPA: {cgpa.toFixed(2)}
                </Badge>
              )}
            </div>
            
            <Button 
              variant="outline" 
              onClick={resetGrades} 
              className="border-gray-700 hover:bg-gray-800 hover:text-gray-200 text-sm shrink-0"
              size="sm"
            >
              Reset All
            </Button>
          </div>
          
          <ScrollArea className="h-[40vh] pr-4">
            <div className="space-y-1">
              {courses.map((course) => (
                <CourseGradeSelect
                  key={course.name}
                  course={course}
                  onGradeChange={handleGradeChange}
                />
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        
        <CardFooter className="border-t border-gray-800 pt-6 flex flex-row justify-between items-center px-6">
          <div>
            <Button 
              onClick={calculateCGPA}
              className="bg-gray-800 hover:bg-gray-700 text-gray-100 text-sm"
              size="sm"
            >
              Calculate CGPA
            </Button>
          </div>
          
          {cgpa !== null && (
            <div className="text-lg font-semibold text-gray-100 text-right">
              Final CGPA: {cgpa.toFixed(2)}
            </div>
          )}
        </CardFooter>

        <div className="text-center py-3 text-base text-gray-500 border-t border-gray-800">
          Made with ❤️ by Devojyoti Misra
        </div>
      </Card>
    </div>
  );
}