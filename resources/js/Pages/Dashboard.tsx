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
            <div className="h-full rounded-lg bg-gray-100 dark:bg-gray-900">
                <Head title="Dashboard" />
                <main className="mx-auto my-10 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                    <p className="text-3xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        My Course
                    </p>
                    {datas.map((data, i) => (
                        <CardCourse key={i} data={data} />
                    ))}
                </main>
            </div>
        </SidebarLayout>
    );
}
