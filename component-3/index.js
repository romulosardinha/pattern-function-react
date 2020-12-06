import {send} from './tools/send'
import {change} from './tools/change'
import {del} from './tools/del'

export const Component3 = () => {

    const itens = [
        {
            title: 'Title Post',
            id: 1
        },
        {
            title: 'Other Title Post',
            id: 2
        }
    ]

    const eventSend = (item) => { send(item, myUser) }
    const eventChange = () => { change(myUser) }
    const eventDel = () => { del(props.chatRoom) }

    return (
        <div>
            {
                itens.map((item) =>
                    <div key={item.id}>
                        <h5>Head</h5>
                        <div>{item.title}</div>
                        <div onClick={() => eventSend(item)}>Send</div>
                        <div onClick={eventChange}>Change User</div>
                        <div onClick={eventDel}>Delete</div>
                    </div>
                )
            }
        </div>
    )
}
