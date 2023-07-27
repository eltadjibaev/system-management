import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import Image from 'next/image';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const closeButtonStyle = {
    height: 0,
    textAlign: "right",
};

export default function BasicModal({ isModalShow, setIsModalShow }) {

    const handleCloseModal = () => setIsModalShow(false)

    return (
        <div>
            <Modal
                open={isModalShow}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style}>
                    <Box sx={closeButtonStyle}>
                        <IconButton onClick={handleCloseModal}>
                            <Close />
                        </IconButton>
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        2F ローズ 共用トイレ 施工予定: 22.11.17  施工実施: 22.11.17  フェーズ: 作業完了
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        初見等初見等初見等初見等初見等初見等初見等初見等初見等初見等初見等初見等初見等初見等 初見等初見等初見等初見等初見等初見等初見等初見等初見等初見等初見等
                    </Typography>
                    <div className='border-b-2 border-black mt-8'/>
                    <div className='flex mt-8 justify-center space-x-2'>
                        <Image
                            src="/k1.jpg"
                            height={300}
                            width={300}
                            alt='kitchen'
                        />

                        <Image
                            src="/k2.jpg"
                            height={300}
                            width={300}
                            alt='kitchen'
                        />
                    </div>
                </Box>
            </Modal>
        </div>
    )
}