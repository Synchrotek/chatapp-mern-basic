import Coversation from './Coversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Coversations = () => {
    const { loading, conversations } = useGetConversations();
    return (
        <div className='hideScrollBar py-2 flex flex-col gap-2 overflow-y-scroll h-[400px]'>
            {conversations.map((conversation, idx) => (
                <Coversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}
            {loading ?
                <span className='loading loading-spinner'></span> : null
            }
        </div>
    )
}

export default Coversations