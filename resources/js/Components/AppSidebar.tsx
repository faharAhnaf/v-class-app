import {
    BookOpenCheck,
    CheckCheck,
    CirclePlus,
    CircleUserRound,
    Frame,
    Map,
    PieChart,
    School,
} from 'lucide-react';
import * as React from 'react';

import { usePage } from '@inertiajs/react';
import { NavMain } from './NavMain';
import { NavUser } from './NavUser';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from './ui/sidebar';

// This is sample data.
const data = {
    navMain: [
        {
            title: 'Beranda',
            url: '#',
            icon: CircleUserRound,
            isActive: true,
            items: [
                {
                    title: 'Gabung Kelas',
                    icon: CirclePlus,
                    url: '/gabung-kelas',
                },
            ],
        },
        {
            title: 'Mata Kuliah',
            url: '#',
            icon: School,
            isActive: true,
            items: [
                {
                    title: 'Forum',
                    icon: School,
                    url: '/forum',
                },
                {
                    title: 'Tugas',
                    icon: BookOpenCheck,
                    url: '/tugas',
                },
                {
                    title: 'Absensi',
                    icon: CheckCheck,
                    url: '/absen',
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = usePage().props.auth.user;
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <NavUser user={user} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
