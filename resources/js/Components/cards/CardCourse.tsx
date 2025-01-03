import { Separator } from '@/components/ui/separator';

interface Props {
    data: {
        id: number;
        course: string;
        class: string;
        teacher_name: string;
    };
}
export default function CardCourse({ data }: Props) {
    return (
        <div className="mt-10">
            <div className="flex overflow-hidden border border-gray-200 bg-white shadow-xl dark:bg-gray-800 sm:rounded-lg">
                <div className="flex w-40 items-center justify-center">
                    <img
                        src="https://dummyimage.com/600x400/000/fff"
                        className="size-24 rounded-full"
                    />
                </div>
                <div className="w-full">
                    <div className="flex h-20 flex-col justify-center">
                        <p className="text-2xl">{data.course}</p>
                        <p className="text-lg">{data.class}</p>
                    </div>
                    <Separator></Separator>
                    <div className="flex h-20 flex-col justify-center">
                        <p className="text-2xl">{data.teacher_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
