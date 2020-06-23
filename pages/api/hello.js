export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
    const{
        query:{pid},

    } = req
    res.end(`Post: ${pid}`)
}