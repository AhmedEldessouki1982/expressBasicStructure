//this function created as middleware to send a ameessage incase of wrong http operation handleded
export default function notFound (req,res) {
    res.status(404).send(
        "Route /URL does not exists"
    )
}