import React from 'react';

const DropdownTable = ({ registrations, onApprove, onReject }) => {
    return (
        <div className="dropdown-table">
            <details>
                <summary className="cursor-pointer p-4 bg-blue-500 text-white rounded-lg shadow-md">
                    View Registrations
                </summary>
                <div className="p-4 bg-white rounded-lg shadow-md mt-2">
                    {registrations.length === 0 ? (
                        <p className="text-gray-700">No registrations available</p>
                    ) : (
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-300 font-bold text-left">Name</th>
                                    <th className="py-2 px-4 border-b border-gray-300 font-bold text-left">Email</th>
                                    <th className="py-2 px-4 border-b border-gray-300 font-bold text-left">Event Name</th>
                                    <th className="py-2 px-4 border-b border-gray-300 font-bold text-left">Status</th>
                                    <th className="py-2 px-4 border-b border-gray-300 font-bold text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrations.map((reg) => (
                                    <tr key={reg.id}>
                                        <td className="py-2 px-4 border-b border-gray-300">{reg.name}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">{reg.email}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">{reg.eventname}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">{reg.status}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">
                                            {reg.status !== 'Approved' && reg.status !== 'Rejected' ? (
                                                <>
                                                    <button
                                                        className="bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-green-600 mr-2"
                                                        onClick={() => onApprove(reg.id, reg.eventId)}
                                                        disabled={reg.status === 'Approved' || reg.status === 'Rejected'}
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600"
                                                        onClick={() => onReject(reg.id, reg.eventId)}
                                                        disabled={reg.status === 'Approved' || reg.status === 'Rejected'}
                                                    >
                                                        Reject
                                                    </button>
                                                </>
                                            ) : (
                                                <p className="text-gray-700">{reg.status}</p>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </details>
        </div>
    );
};

export default DropdownTable;