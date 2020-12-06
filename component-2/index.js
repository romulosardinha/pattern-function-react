export const Component2 = () => {

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

    const send = (item, myUser) => {
        // Code here
    }
    const change = (myUser) => {
        // Code here
    }
    const del = (chatRoom) => {
        // Code here
    }

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
