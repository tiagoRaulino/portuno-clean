import React, { ChangeEvent } from 'react';

interface SearchBarProps {
    search: string;
    onChange: (search: string) => void;
    placeholder?: string;
}

function SearchBar({ search, onChange, placeholder }: SearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.414-1.414L21 21zm-9-5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                    />
                </svg>
            </span>
        </div>
    );
}

export default SearchBar;
