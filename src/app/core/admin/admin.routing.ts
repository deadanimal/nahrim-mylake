import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ReportComponent } from './report/report.component';
import { LakeListComponent } from './lake-list/lake-list.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { LakeViewerComponent } from './lake-viewer/lake-viewer.component';
import { LakeDetailComponent } from './lake-detail/lake-detail.component';

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'lake',
                children: [
                    {
                        path: 'list',
                        component: LakeListComponent
                    },
                    {
                        path: 'viewer',
                        component: LakeViewerComponent
                    },
                    {
                        path: 'detail',
                        component: LakeDetailComponent
                    }
                ]
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
]