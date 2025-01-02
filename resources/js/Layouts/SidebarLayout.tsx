import { AppSidebar } from '@/Components/AppSidebar';
import HeaderText from '@/Components/HeaderText';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/Components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/Components/ui/sidebar';

interface Props {
    header: string;
    children: React.ReactNode;
}

export default function SidebarLayout({ header, children }: Props) {
    const location = window.location.href;
    const pathname = location
        .replace('http://127.0.0.1:8000', '')
        .split('/')
        .filter(Boolean);
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <HeaderText text={header}></HeaderText>
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    Dashboard
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            {pathname.map((path, index) => (
                                <>
                                    <BreadcrumbItem key={index}>
                                        <BreadcrumbLink href={`/${path}`}>
                                            {path.slice(0, 1).toUpperCase() +
                                                path.slice(1)}
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                </>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
