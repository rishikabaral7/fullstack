import strawberry
from app.database import sessionLocal
from app.utils.hashing import hash_password, verify_password
from app.schemas.user_schema import UserType, AuthResponse, RegisterInput, LoginInput
from app.models.user import User
from app.utils.jwt import create_access_token


@strawberry.type
class AuthMutation:
    @strawberry.mutation
    def register(self, input: RegisterInput)->AuthResponse:
        session = sessionLocal()
        try:
            existing_email = session.query(User).filter(User.email == input.email).first()
            if existing_email:
                return AuthResponse(success=False,message="Email already exist")
            existing_username = session.query(User).filter(User.username == input.username).first()
            if existing_username:
                return AuthResponse(success=False, message="Username already exist")
            
            hashed = hash_password(input.password)

            new_user = User(
                username = input.username,
                email = input.email,
                hashed_password = hashed
            )
            session.add(new_user)
            session.commit()
            session.refresh(new_user)
            
            return AuthResponse(
                success=True,
                message="User registered successfully",
                user = UserType(id=new_user.id, username=new_user.username, email=new_user.email)
            )
        
        except Exception as e:
            session.rollback()
            return AuthResponse(success=False, message=f"Error:{str(e)}")
        finally:
            session.close()
            
            
    @strawberry.mutation
    def login(self, input:LoginInput)-> AuthResponse:
        session = sessionLocal()
        try:
            user = session.query(User).filter(User.email == input.email).first()
            if not user:
                return AuthResponse(success=False, message="Invalid email")
            
            if not verify_password(input.password, user.hashed_password):
                return AuthResponse(success=False, message="Invalid password")
            token = create_access_token(data={"sub": str(user.id), "username": user.username})
            
            return AuthResponse(
                success=True,
                message="Login successfull",
                user= UserType(id=user.id, username=user.username, email=user.email),
                token=token)
        except Exception as e:
            return AuthResponse(success=False, message=f"Error:{str(e)}")
        
        finally:
            session.close()
                
            

            