import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'mukesh prajapat',
        email : 'mukeshprajapat75@gmail.com',
        password : bcrypt.hashSync('mukesh123',12),
        isAdmin : true
    },
    {
        name : 'mahaveer prajapat',
        email : 'mahaveer75@gmail.com',
        password : bcrypt.hashSync('mahaveer123',12),
        isAdmin : true
    },
    {
        name : 'dinesh prajapat',
        email : 'dinesh75@gmail.com',
        password : bcrypt.hashSync('dinesh123',12),
        isAdmin : true
    },
    {
        name : 'pintu prajapat',
        email : 'pintu75@gmail.com',
        password : bcrypt.hashSync('pintu12345',12),
        isAdmin : false
    }
    
]
export default Users