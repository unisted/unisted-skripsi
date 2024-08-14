// TabelDokumentasi.tsx
import React from "react";
import { data } from "../lib/data";

const TabelDokumentasi: React.FC = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
            Nama
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
            Jalur
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
            Judul
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
            Proposal
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
            Sidang
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
              {item.nama}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
              {item.jalur}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
              {item.judul}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
              {item.proposal}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
              {item.sidang}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelDokumentasi;
