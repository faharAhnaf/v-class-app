import CardCourse from '@/Components/cards/CardCourse';
import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head } from '@inertiajs/react';

const datas = [
    {
        id: 1,
        course: 'Interaksi Manusia & Komputer',
        class: '3KA05',
        teacher_name: 'Taufik Hidayat',
    },
    {
        id: 2,
        course: 'Konsep Data Mining',
        class: '3KA05',
        teacher_name: 'Ihsan Jatnika',
    },
    {
        id: 3,
        course: 'Pemrograman Berbasis Web',
        class: '3KA05',
        teacher_name: 'Sri Wulan W Ratih',
    },
];

export default function Dashboard() {
    return (
        <SidebarLayout header="Dashboard">
            <Head title="Dashboard" />
            <main className="container">
                <p className="text-3xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    My Course
                </p>
                {datas.map((data, i) => (
                    <CardCourse key={i} data={data} />
                ))}
            </main>
        </SidebarLayout>
    );
}
