import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../store/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;

    console.log("message:", message);

    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt="sender"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white ${fromMe ? 'bg-[#C80036]' : 'bg-[#071952]'}`}>
                {message.message}
            </div>
            <div className='chat-footer opacity-65 text-xs flex gap-1 items-center'>
                {extractTime(message.createdAt)}
            </div>
        </div>
    )
}

export default Message