interface MyCardProps {
    id: number;
    room: string;
    keyowner: string;
    available: boolean;
}

const MyCard: React.FC<MyCardProps> = ({ room, keyowner, available, id }) => {
    return (
        <div key={id} className="max-w-lg p-4 bg-white shadow-md rounded-lg">
            <div className="flex gap-3 items-center">
                <div>
                    <div className="text-lg font-bold">{room}</div>
                    <div className="text-sm text-gray-500">{keyowner}</div>
                </div>
                <div className="ml-auto flex gap-3 items-center">
                    {available ? (
                        <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded">
                            Disponível
                        </span>
                    ) : (
                        <span className="px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded">
                            Indisponível
                        </span>
                    )}
                    {keyowner === "you" && (
                        <button className="px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                            Repassar Chave
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyCard;
