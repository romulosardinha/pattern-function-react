export const Component1 = () => {

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

    return (
        <div>
            {
                itens.map((item) =>
                    <div key={item.id}>
                        <h5>Head</h5>
                        <div>{item.title}</div>
                        <div onClick={() => send(item, myUser)}>Send</div>
                        <div onClick={() => change(myUser)}>Change User</div>
                        <div onClick={() => del(props.chatRoom)}>Delete</div>
                    </div>
                )
            }
        </div>
    )
}
