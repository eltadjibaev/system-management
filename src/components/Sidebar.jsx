

export default function DefaultSidebar({ isSidebarVisible, setIsModalShow, setIsPdfModalShow }) {
    return (
        <div className={`fixed top-[30%] bg-gray-100 left-0 bottom-0 ${isSidebarVisible ? '' : '-translate-x-full'} transition-transform`}>

            <div className="py-10 px-10 space-y-3 text-[18px]">
                <div 
                    className='flex space-x-6 hover:bg-gray-200 cursor-pointer px-2'
                    onClick={() => {setIsModalShow(true)}}
                >
                    <p>00.00.00</p>
                    <p>完了</p>
                    <p>2F ローズ 共用トイレ</p>
                </div>

                <div 
                    className='flex space-x-6 hover:bg-gray-200 cursor-pointer px-2'
                    onClick={() => {setIsPdfModalShow(true)}}
                >
                    <p>00.00.00</p>
                    <p>完了</p>
                    <p>見積提示</p>
                </div>

                <div 
                    className='flex space-x-6 hover:bg-gray-200 cursor-pointer px-2'
                    onClick={() => {setIsModalShow(true)}}
                >
                    <p>00.00.00</p>
                    <p>完了</p>
                    <p>2F ローズ 共用トイレ</p>
                </div>

                <div 
                    className='flex space-x-6 hover:bg-gray-200 cursor-pointer px-2'
                    onClick={() => {setIsPdfModalShow(true)}}
                >
                    <p>00.00.00</p>
                    <p>完了</p>
                    <p>メール送付</p>
                </div>

                <div 
                    className='flex space-x-6 hover:bg-gray-200 cursor-pointer px-2'
                    onClick={() => {setIsModalShow(true)}}
                >
                    <p>00.00.00</p>
                    <p>完了</p>
                    <p>2F ローズ 共用トイレ</p>
                </div>

                <div 
                    className='flex space-x-6 hover:bg-gray-200 cursor-pointer px-2'
                    onClick={() => {setIsPdfModalShow(true)}}
                >
                    <p>00.00.00</p>
                    <p>完了</p>
                    <p>2F ローズ 共用トイレ</p>
                </div>
            </div>
        </div>
    )
}