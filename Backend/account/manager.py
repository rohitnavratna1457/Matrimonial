# Custom User Manager to handle User creation
from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, mobile_no,  password=None):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, mobile_no=mobile_no)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, mobile_no,  password=None):
        user = self.create_user(email, name, mobile_no,  password)
        # user.is_superuser = True
        user.is_admin = True
        user.is_status = True  # Typically active by default for superusers
        user.is_staff=True
        user.save(using=self._db)
        return user