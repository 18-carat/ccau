export class Task {
    name: string;
    path: string;
    help: string;

    constructor(name: string, path: string, help: string) {
        this.name = name;
        this.path = path;
        this.help = help;
    }
}

export function getTasks(): Task[] {
    return TASKS.tasks;
}

const TASKS = {
    "tasks": [
        {
            "help": "Click the --> button to start the copy",
            "name": "Begin Course Copy",
            "path": ""
        },
        {
            "help": "If there is any content, don't do the copy",
            "name": "Check for Content",
            "path": "modules"
        },
        {
            "help": "Delete 'Student Introductions' and 'Questions and Answers'",
            "name": "Delete Discussions",
            "path": "discussion_topics"
        },
        {
            "help": "Delete all pages except University Information",
            "name": "Delete Pages",
            "path": "pages"
        },
        {
            "help": "'Restrict students from viewing course before term start date' should be enabled and 'Participation' should be 'Course'",
            "name": "Verify Settings",
            "path": "settings"
        },
        {
            "help": "Double check the email to make sure you copy the right course",
            "name": "Copy Content",
            "path": "content_migrations"
        },
        {
            "help": "Copy the current holiday from the SE University Holidays course (select content)",
            "name": "Copy Holiday",
            "path": "content_migrations"
        },
        {
            "help": "Delete any duplicate menu items. The original item is the first one listed",
            "name": "Delete Duplicate Menu Items",
            "path": "settings/configurations#tab-tools"
        },
        {
            "help": "Move the items in the navigation menu to this order:\n\nHome\nAnnouncements\nSyllabus\nModules\nGrades\nSubmit Grades\nPeople\nSE Email\nHenry G. Bennett Library\nTech Support\nTutor.com\nYuJa\nPanorama\nLockdown Browser\nItem Banks\nCredentials\nFollett Discover\n(whatever else happens to be there)\n",
            "name": "Fix Menu Order",
            "path": "settings#tab-navigation"
        },
        {
            "help": "Click the Auto-Move button, then the arrow in the bottom left",
            "name": "Move Content",
            "path": "modules"
        },
        {
            "help": "Click the Remove Empty button, then the arrow in the bottom left",
            "name": "Delete Empty Modules",
            "path": "modules"
        },
        {
            "help": "Click the Add Dates button, wait for them to publish, then drag them to the top of their respective modules",
            "name": "Add Date Headers",
            "path": "modules"
        },
        {
            "help": "Delete any GOLD Orientation and the University Information items which are NOT at the bottom of the START HERE module",
            "name": "Delete Old GOLD",
            "path": "modules"
        },
        {
            "help": "Move the holiday module into place",
            "name": "Move Holiday",
            "path": "modules"
        },
        {
            "help": "Delete any duplicate Question and Answer or Student Introductions discussions",
            "name": "Delete Duplicate Discussions",
            "path": "discussion_topics"
        },
        {
            "help": "Delete any undeployed GOLD Orientation assignments and empty categories",
            "name": "Delete Duplicate Assignments",
            "path": "assignments"
        },
        {
            "help": "Use https://k.ngn.tf/8775a to fix broken images; manually fix broken module links",
            "name": "Fix Homepage",
            "path": "wiki"
        },
        {
            "help": "Make sure the dates are correct, especially regarding the holiday-adjacent weeks",
            "name": "Check Assignment Dates",
            "path": "assignments"
        },
        {
            "help": "Check for Blackboard references, as well as getting the grade total / weights",
            "name": "Check Syllabus",
            "path": "assignments/syllabus"
        },
        {
            "help": "Make sure it matches the syllabus",
            "name": "Check Gradebook",
            "path": "gradebook"
        },
        {
            "help": "If any real links are broken, inform the professor",
            "name": "Run Link Validator",
            "path": "link_validator"
        },
        {
            "help": "Ensure that all the steps on the Google Sheet have been followed. If something there isn't covered in the automation, lmk",
            "name": "Check Google Sheet",
            "path": ""
        },
        {
            "help": "Excellent work, 47. The money has been wired to your account",
            "name": "Done",
            "path": ""
        }
    ]
};
