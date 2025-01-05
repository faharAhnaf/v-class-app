import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import InputError from '../InputError';
import InputLabel from '../InputLabel';
import PrimaryButton from '../PrimaryButton';
import TextInput from '../TextInput';

export default function AbsenSiswaSection() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '',
        npm: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <form onSubmit={submit}>
            <div>
                <InputLabel htmlFor="name" value="Nama Lengkap" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="username" value="Username" />

                <TextInput
                    id="username"
                    type="text"
                    name="username"
                    value={data.username}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData('username', e.target.value)}
                    required
                />

                <InputError message={errors.username} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="npm" value="Npm" />

                <TextInput
                    id="npm"
                    type="text"
                    name="npm"
                    value={data.npm}
                    className="mt-1 block w-full"
                    autoComplete="npm"
                    onChange={(e) => setData('npm', e.target.value)}
                    required
                />

                <InputError message={errors.npm} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="email"
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />

                <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) => setData('password', e.target.value)}
                    required
                />

                <InputError message={errors.password} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel
                    htmlFor="password_confirmation"
                    value="Confirm Password"
                />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setData('password_confirmation', e.target.value)
                    }
                    required
                />

                <InputError
                    message={errors.password_confirmation}
                    className="mt-2"
                />
            </div>
            <div className="mt-4 flex items-center justify-end">
                <Link
                    href={route('login')}
                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                    Already registered?
                </Link>

                <PrimaryButton className="ms-4" disabled={processing}>
                    Register
                </PrimaryButton>
            </div>
        </form>
    );
}
