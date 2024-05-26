import bcrypt from 'bcrypt';

export const hashThis= async (password)=>{
    try {
        const salt=10
        const hashedpass= await bcrypt.hash(password,salt);
        return hashedpass;
    } catch (error) {
        console.log(`error in hashing given password`,password,error);
    }
}
export const compareHash= async (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}

