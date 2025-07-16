import { Course, gradeOptions } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useId } from "react";

interface CourseGradeSelectProps {
  course: Course;
  onGradeChange: (courseName: string, grade: string) => void;
}

export default function CourseGradeSelect({ course, onGradeChange }: CourseGradeSelectProps) {
  const id = useId();

  return (
    <div className="flex flex-row items-center justify-between py-2 md:py-3 border-b border-gray-800 gap-2">
      <div className="flex flex-col flex-1 min-w-0">
        <span className="font-medium text-gray-100 text-sm md:text-base line-clamp-2">{course.name}</span>
        <span className="text-xs md:text-sm text-gray-400">{course.credits} credits</span>
      </div>
      <Select
        key={`${id}-${course.grade === null ? 'empty' : course.grade}`}
        defaultValue={course.grade || undefined}
        onValueChange={(value) => onGradeChange(course.name, value)}
      >
        <SelectTrigger className="w-[100px] md:w-[120px] bg-gray-900 border-gray-700 text-xs md:text-sm h-8 md:h-10 shrink-0">
          <SelectValue placeholder="Select Grade" />
        </SelectTrigger>
        <SelectContent className="bg-gray-900 border-gray-700">
          {gradeOptions.map((grade) => (
            <SelectItem key={grade} value={grade} className="hover:bg-gray-800 text-gray-200 text-xs md:text-sm">
              {grade}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}