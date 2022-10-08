import jsonwebtoken from 'jsonwebtoken'

//control added to start test the JWT and auth process
//get operation http req
export const superSecureResource = async (req,res) => {
    try {
        res.status(401).json({msg: "You need to be logged in to access this resource"})
        
    } catch (error) {
        res.status(500).json({msg: "syntax error"})
    }
}
//post operation control
export const login = async (req,res) => {
    const JWT_SECRET = "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
    const {username,password} = req.body;
    if (username === "admin" && password === "admin") {
        return res.status(200).json({
            token: jsonwebtoken.sign ({user:"admi3n",data:"some secret data"},JWT_SECRET)
        })//return should be added
    }
    return res.status(401).json({
        msg: "The username and password your provided are invalid"
    })
}