/** 
 * Conversation service
 * @class ConversationService
 *  */
export class ConversationService {
    /**
     * Constructor method
     * @param {array} data 
     * @param {array} users 
     */
    constructor(data, users) {
        this.conversations = data;
        this.users = users;
    }
    
    /**
     * Gets up-to-date list of conversations by status.
     * conversation status could be open, archived, snooze, or trash
     * @param {string} status
     * @returns {Object} Array Object
     */
    async getConversationsByStatus(status) {
        const conversationsCopy = [...this.conversations];
        const usersCopy = [...this.users]
        const conversationsBySatus = conversationsCopy.filter((conversation) => conversation.status === status);
        if (conversationsBySatus.length > 0 ) {
            const conversationDetail = conversationsBySatus.map((conv) => {
                const user = usersCopy.find((u) => u.id === conv.userId);
                if (user !== -1) {
                    conv.user = user;
                    return conv;
                }
                return null;
            }).filter((conversation) => conversation !== null);
            return conversationDetail;
        }
        return [];
    }

    /**
     * Get a converstation by id
     * @param {string} conversationId 
     * @returns {object} conversation
     */
    async getConversationsById(conversationId) {
        const conversationsCopy = [...this.conversations];
        const usersCopy = [...this.users]
        const conversation = conversationsCopy.find((c) => c.id === conversationId);
        if (conversation !== -1) {
            
            const user = usersCopy.find((x) => x.id === conversation.userId);
            conversation.user = user;
            return conversation
        }
        
        return null;
    }
}
