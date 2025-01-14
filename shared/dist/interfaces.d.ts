/**
 * api/user
 * 1. post: admin patch role on registered user || configure server cashe
 */
export type UserRole = 'teacher' | 'sales' | 'consultant' | string;
/**
 * 5. post: schemaCrl'er register user with role
 */
export interface User {
    name: string;
    password: string;
    role: UserRole[];
}
/**
 * 7. post: schemaCtrl'er maxHoursTeaching (require user_id)
 * -- ez see reports for roles
 */
export interface UserReport extends User {
    reportedValues: {
        totalReportBookings: number;
        issuesReported: string[];
    };
}
/**
 * api/room
 * - populate rooms
 * 2. post|patch: admin edit privilages on room
 * 6. patch: schemaCtrl'er update schema(reportedBooking) + bookings(ids)
 * -- can see free rooms
 *
 * slug.1.1 load rolebased data
 *
 * --- free rooms
 * ---- free rooms
 */
export type Room = {
    id: string;
    configuration: Privilages;
    reportedBooking: ReportedBooking;
    teacher_id: string;
    participants_ids: string[];
};
/**
 * slug.1.2
 * slug2.1 course events and reEval(in course details?)
 */
export type CourseDetails = 'technology-session' | 'tutoring' | 'workshop' | 'deadline';
/**
 * api/reports
 * - assigned privilages
 * 3. patch/put: schemaCtrl  put array of Lessons (batch, dupplicate)
 * -- Err: conflict
 * -- mark read day
 * 4. post/patch: access lesson in array and modify lesson index
 * 8 patch: mark read day
 *
 * ---- can group and set span of date in response object from server
 */
export type ReportedBooking = {
    prupose: CourseDetails;
    lessonsOnTheCurrentDay: Lesson[];
    dayFilterable: Date;
    isRedDay: boolean;
};
/**
 * api/privilages
 *2.  post|patch: admin edit privilages on room
 */
export type Privilages = {
    name: string;
    maxParticipants: number;
    type: 'meetingRoom' | 'classRoom' | 'co-working';
};
export type Lesson = {
    startIndexedLesson: number;
    endIndexedLesson: number;
    nameOfEnrolledClass: string;
};
//# sourceMappingURL=interfaces.d.ts.map