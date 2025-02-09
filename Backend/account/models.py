from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from .manager import CustomUserManager
# Create your models here.
# Custom User Model

class user(AbstractBaseUser):
    USER_TYPES = (
        ("Admin", "Admin"),
        ("Staff", "Staff"),
        ("User", "User"),
    )

    user_id = models.AutoField(primary_key=True)
    username=None
    email = models.EmailField(verbose_name='Email', max_length=255, unique=True)
    name = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=10)
    user_type = models.CharField(max_length=50, choices=USER_TYPES, null=False)
    is_status = models.BooleanField(default=False)  # Active status
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)  # Superuser flag
    address = models.TextField()
    # Make sure to set the correct manager
    objects = CustomUserManager()

    # Required fields
    USERNAME_FIELD = 'email'  # email is used as the unique identifier
    REQUIRED_FIELDS = ['name', 'mobile_no', ]  # Fields that need to be filled in when creating a user

    def __str__(self):
        return self.name

    def has_perm(self, perm, obj=None):
        return self.is_admin or self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_admin or self.is_superuser
    
    
    
class Profile(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"
 
    
    
    