import React from "react";

import Badge from "./Shared/badge";

export default function PublishersTable({ publishers }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <tbody className="bg-white divide-y divide-gray-200">
        {publishers.map((publisher) => (
          <tr key={publisher.id}>
            <td className="pr-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={publisher.image}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    <p className="inline mr-2">{publisher.name}</p>
                    {publisher.badge && (
                      <Badge
                        label={publisher.badge.label}
                        color={publisher.badge.color}
                        textColor={publisher.badge.textColor}
                      />
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{publisher.date}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div className="ml-40">
                <p className="text-sm font-semibold mb-0">
                  {publisher.sats} sats
                </p>
                <div className="relative mt-2 w-6/12 ml-auto">
                  <div className="flex items-center">
                    <div
                      style={{ width: `${publisher.percentage}%` }}
                      className="ml-auto h-2 shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    />
                    <span className={`text-xs font-semibold text-blue-500`}>
                      {publisher.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}