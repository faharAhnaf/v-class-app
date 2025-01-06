import {
    BookOpenCheck,
    CheckCheck,
    CirclePlus,
    CircleUserRound,
    Frame,
    LayoutDashboard,
    Map,
    NotepadText,
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
                    title: 'Dashboard',
                    role: 'all',
                    icon: LayoutDashboard,
                    url: '/',
                },
                {
                    title: 'Gabung Kelas',
                    icon: CirclePlus,
                    role: 'siswa',
                    url: '/gabung-kelas',
                },
                {
                    title: 'Buat Kelas',
                    icon: CirclePlus,
                    role: 'guru',
                    url: '/buat-kelas',
                },
            ],
        },
        {
            title: 'Mata Kuliah',
            url: '#',
            icon: School,
            items: [
                {
                    title: 'Forum',
                    icon: School,
                    role: 'all',
                    url: '/forum',
                },
                {
                    title: 'Tugas',
                    icon: BookOpenCheck,
                    role: 'all',
                    url: '/tugas',
                },
                {
                    title: 'Absensi',
                    icon: CheckCheck,
                    role: 'siswa',
                    url: '/absen',
                },
                {
                    title: 'Nilai',
                    icon: NotepadText,
                    role: 'guru',
                    url: '/nilai',
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
