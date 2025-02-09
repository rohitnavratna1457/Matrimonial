from django.contrib import admin
from .models import *  # Import the custom User model

# Custom User Admin
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'mobile_no', 'user_type', 'is_status', 'is_admin', 'is_superuser')
    search_fields = ('email', 'name', 'mobile_no')
    list_filter = ('user_type', 'is_status', 'is_admin', 'is_superuser')

    fieldsets = (
        (None, {
            'fields': ('email', 'password', 'name', 'mobile_no', 'address')
        }),
        ('Permissions', {
            'fields': ('is_admin', 'is_superuser', 'is_status', 'is_staff')  # Add is_staff here
        }),
        ('User Type', {
            'fields': ('user_type',)
        }),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'name', 'mobile_no', 'user_type', 'is_status', 'is_staff')
        }),
    )

# Register the User model with the custom admin
admin.site.register(user, CustomUserAdmin)
admin.site.register(Profile)
