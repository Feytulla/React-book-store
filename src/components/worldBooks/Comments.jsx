import { useEffect, useState } from "react"

function Comments() {
    const [commentsUser, setCommentsUser] = useState([
        {
            name: 'Мария К.',
            comment: 'Саша Пушкин был поэтом невротического типа. Дуэльная часть его биографии не дает покоя многим исследователям.',
        },
        {
            name: 'Александр Р.',
            comment: 'большая часть этих изданий отвратительного качества, как с точки зрения полиграфии, так и редакторско-составительской работы, не говоря уже о качестве появившихся в эти годы переводов. ',
        },
        {
            name: 'Марк С.',
            comment: 'Ряд издательств были откровенными однодневками.',
        },
    ])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    useEffect(() => {
        if (localStorage.getItem('comments')) {
            setCommentsUser(
                JSON.parse(localStorage.getItem('comments'))
            )
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(commentsUser))
    }, [commentsUser])

    function handleSubmit(e) {
        e.preventDefault()

        if (name.trim() && email.trim() && comment.trim()) {
            setCommentsUser(commentsUser.concat([{ name: name, comment: comment }]))

        }
        setName('')
        setEmail('')
        setComment('')
    }
    return (
        <>
            {
                commentsUser.map(user => {
                    return (
                        <div className="content-container comment">
                            <strong className="comment__name">{user.name}</strong>
                            <p className="comment__text">{user.comment}</p>
                        </div>
                    )
                })
            }
            <div className="content-container">
                <h5 className="h5">Оставить комментарий</h5>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="mb-3 form__name">
                        <label className="form-label">Ваше имя:</label>
                        <input type="text" className="form-control" placeholder="Введите Ваше имя" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-3 form__email">
                        <label for="exampleInputEmail1" clclassNameass="form-label">Ваш email:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите Ваш email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3 form__comment">
                        <label className="form-label">Ваш комментарий:</label>
                        <textarea name="comment" id="" placeholder="Введите Ваш комментарий" value={comment} onChange={e => setComment(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn form__btn">Отправить</button>
                </form>
            </div>
        </>
    )
}

export default Comments