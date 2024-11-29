const employee = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Fix login issue",
                description: "Resolve the error preventing users from logging in.",
                date: "2024-10-15",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Create landing page design",
                description: "Design the new landing page for the website.",
                date: "2024-10-20",
                category: "Design",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Team meeting",
                description: "Attend the monthly team progress meeting.",
                date: "2024-10-10",
                category: "Meeting",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Code review",
                description: "Review the code submitted by the junior developer.",
                date: "2024-10-12",
                category: "Development",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "Write unit tests",
                description: "Implement unit tests for the payment module.",
                date: "2024-10-18",
                category: "Testing",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Database migration",
                description: "Migrate the database from MySQL to PostgreSQL.",
                date: "2024-10-25",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Prepare sprint report",
                description: "Summarize progress in the current sprint.",
                date: "2024-10-22",
                category: "Research",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Redesign logo",
                description: "Create a new logo for the rebranding project.",
                date: "2024-10-08",
                category: "Design",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Client meeting",
                description: "Discuss project requirements with the client.",
                date: "2024-10-13",
                category: "Meeting",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Optimize website speed",
                description: "Improve loading times by optimizing images and scripts.",
                date: "2024-10-20",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Research AI tools",
                description: "Explore AI tools for enhancing customer support.",
                date: "2024-10-15",
                category: "Research",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Write blog post",
                description: "Publish a blog post about recent tech trends.",
                date: "2024-10-10",
                category: "Research",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "Update user profiles",
                description: "Add new fields to the user profiles page.",
                date: "2024-10-11",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Fix security vulnerabilities",
                description: "Patch vulnerabilities found in the security audit.",
                date: "2024-10-19",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Organize team outing",
                description: "Plan the details of the upcoming team outing.",
                date: "2024-10-23",
                category: "Meeting",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Create wireframes",
                description: "Design wireframes for the new project.",
                date: "2024-10-09",
                category: "Design",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Deploy new app version",
                description: "Deploy the latest app version to the production server.",
                date: "2024-10-18",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Conduct QA testing",
                description: "Perform quality assurance testing for the new feature.",
                date: "2024-10-20",
                category: "Testing",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Run marketing campaign",
                description: "Launch the social media marketing campaign.",
                date: "2024-10-15",
                category: "Research",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    }
];

const admin =[
	{
		id: 1,
		email: "admin@example.com",
		password: "123",
	},
];

export const setLocalStorage = () => {
    localStorage.setItem('employee', JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem('employee'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employee, admin };
}
