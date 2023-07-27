'use client'

import Modal from "@/components/Modal"
import PdfModal from "@/components/PdfModal"
import DefaultSidebar from "@/components/Sidebar"
import MenuBar from "@/layout/MenuBar"
import Image from "next/image"
import { useCallback, useState } from "react"

export default function Home() {
    const [isSidebarVisible, setSidebarVisible] = useState(false)
    const [isModalShow, setIsModalShow] = useState(false)
    const [isPdfModalShow, setIsPdfModalShow] = useState(false)

    const toggleSidebar = useCallback(() => {
        setSidebarVisible(value => !value)
    }, [])

    const handleOpenModal = useCallback(() => {
        setIsModalShow(true)
    }, [])

    const handleOpenPdfModal = useCallback(() => {
        setIsPdfModalShow(true)
    }, [])

    return (
      <>
        <MenuBar />
  
        <main className="container mx-auto px-4 mt-20">
            <div className="flex space-x-8 border-b-2 border-black">
                <p className="text-xl text-gray-900 mb-3">○○○○○ホーム</p>
                <p className="text-xl text-gray-900">東京都○○市○○1-2-3</p>
                <p className="text-xl text-gray-900"><span>最終更新日:</span> 0000.00</p>
                <p className="text-xl text-gray-900"><span>担当:</span>田中</p>
            </div>

            <div className="mt-10 space-x-2">
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[16px] px-5 py-2.5 mr-2 mb-2  focus:outline-none "
                    onClick={toggleSidebar}
                >リスト表示</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[16px] px-5 py-2.5 mr-2 mb-2  focus:outline-none ">新規作業登録</button>
            </div>

            <div className="relative">
                <Image 
                    src="/home.jpg"
                    width={1600}
                    height={1000}
                    alt="Picture of the home"
                />

                <div 
                    className="block absolute bg-blue-500/20" 
                    style={{ top: '13%', left: '43%', right: '52%', bottom: '62%' }}
                    onClick={handleOpenModal}
                />

                <div 
                    className="block absolute bg-blue-500/20" 
                    style={{ top: '13%', left: '59%', right: '13%', bottom: '62%' }}
                    onClick={handleOpenPdfModal}
                />
            </div>

        </main>

        <DefaultSidebar isSidebarVisible={isSidebarVisible} setIsModalShow={setIsModalShow} setIsPdfModalShow={setIsPdfModalShow}  />
        <Modal isModalShow={isModalShow} setIsModalShow={setIsModalShow}/>
        <PdfModal isPdfModalShow={isPdfModalShow} setIsPdfModalShow={setIsPdfModalShow}/>
      </>
    )
}