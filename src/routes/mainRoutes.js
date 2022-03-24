import { lazy } from 'react';

export const mainRoutes = [
    {
        path: "/analytics",
        name: "Analytics",
        exact: false,
        component: lazy(
            () => import("../pages/AnalyticsPage") /* webpackChunkName: "Analytics" */
        ),
    },
    {
        path: "/gradebooks",
        name: "Gradebooks",
        exact: false,
        component: lazy(
            () => import("../pages/GradebooksPage") /* webpackChunkName: "Gradebooks" */
        ),
    },
    {
        path: "/tests",
        name: "Tests",
        exact: false,
        component: lazy(
            () => import("../pages/TestsPage") /* webpackChunkName: "Tests" */
        ),
    },
    {
        path: "/students",
        name: "Students",
        exact: true,
        component: lazy(
            () => import("../pages/StudentsPage") /* webpackChunkName: "Students" */
        ),
    },
    {
        path: "/teachers",
        name: "Teachers",
        exact: false,
        component: lazy(
            () => import("../pages/TeachersPage") /* webpackChunkName: "Teachers" */
        ),
    },
    {
        path: "/archive",
        name: "Archive",
        exact: false,
        component: lazy(
            () => import("../pages/ArchivePage") /* webpackChunkName: "Archive" */
        ),
    }
]