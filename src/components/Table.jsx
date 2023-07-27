'use client'

import Link from "next/link"

const Table = () => {

    return (
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-lg text-left text-gray-500 ">
                <thead className="text-lg text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            都道府県
                        </th>
                        <th scope="col" className="px-6 py-3">
                            施設名
                        </th>
                        <th scope="col" className="px-6 py-3">
                            担当
                        </th>
                        <th scope="col" className="px-6 py-3">
                            最終更新日
                        </th>
                        <th scope="col" className="px-6 py-3">
                            アラート
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            ○○県
                        </th>
                        <td className="px-6 py-4">
                            ○○○○○ホーム
                        </td>
                        <td className="px-6 py-4">
                            田中
                        </td>
                        <td className="px-6 py-4">
                            00.00.00
                        </td>
                        <td className="px-6 py-4">
                            3ヶ月経過
                        </td>
                        <td className="px-6 py-4">
                            <Link href="/detail" className="font-medium text-blue-600  hover:underline">詳細を見る</Link>
                        </td>
                    </tr>
                    <tr className="border-b bg-gray-50 ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            ○○県
                        </th>
                        <td className="px-6 py-4">
                            ○○○○○ホーム
                        </td>
                        <td className="px-6 py-4">
                            若松
                        </td>
                        <td className="px-6 py-4">
                            00.00.00
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            <Link href="/detail" class="font-medium text-blue-600 ">詳細を見る</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            ○○県
                        </th>
                        <td className="px-6 py-4">
                            ○○○○○ホーム
                        </td>
                        <td className="px-6 py-4">
                            田中
                        </td>
                        <td className="px-6 py-4">
                            00.00.00
                        </td>
                        <td className="px-6 py-4">
                            6ヶ月経過
                        </td>
                        <td className="px-6 py-4">
                            <Link href="/detail" className="font-medium text-blue-600  hover:underline">詳細を見る</Link>
                        </td>
                    </tr>
                    <tr className="border-b bg-gray-50  ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            ○○県
                        </th>
                        <td className="px-6 py-4">
                            ○○○○○ホーム
                        </td>
                        <td className="px-6 py-4">
                            若松
                        </td>
                        <td className="px-6 py-4">
                            00.00.00
                        </td>
                        <td className="px-6 py-4">
                            1年経過
                        </td>
                        <td className="px-6 py-4">
                            <Link href="/detail" className="font-medium text-blue-600  hover:underline">詳細を見る</Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            ○○県
                        </th>
                        <td className="px-6 py-4">
                            ○○○○○ホーム
                        </td>
                        <td className="px-6 py-4">
                            田中
                        </td>
                        <td className="px-6 py-4">
                            00.00.00
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            <Link href="/detail" className="font-medium text-blue-600  hover:underline">詳細を見る</Link>
                        </td>
                    </tr>
                    <tr className="border-b bg-gray-50 ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            ○○県
                        </th>
                        <td className="px-6 py-4">
                            ○○○○○ホーム
                        </td>
                        <td className="px-6 py-4">
                            若松
                        </td>
                        <td className="px-6 py-4">
                            00.00.00
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            <Link href="/detail" className="font-medium text-blue-600  hover:underline">詳細を見る</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )

}

export default Table