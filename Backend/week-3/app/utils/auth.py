from jose import JWTError
from sqlalchemy.orm import Session
from app.utils.jwt import decode_access_token
from app.models.user import User

def get_current_user(token:str, db:Session):
    if not token:
        raise Exception("Not authenticated. Please login and send your token.")
    
    if token.startswith("Bearer "):
        token = token[7:]
        
    payload = decode_access_token(token) 
    if payload is None:
        raise Exception("Invalid or expired token. Please login again.")
    
    user_id = payload.get("sub")
    if user_id is None:
        raise Exception("Token payload is missing user info.")
    user = db.query(User).filter(User.id == int(user_id)).first()
    if user is None:
        raise Exception("User no longer exists.")

    return user