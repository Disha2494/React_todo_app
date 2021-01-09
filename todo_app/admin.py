from django.contrib import admin
from .models import Todo, Label          #importing the model created for Todo_app.

# Register your models here.
class TodoAdmin(admin.ModelAdmin): 
    list_display = ('title', 'description', 'completed', 'label')

class LabelAdmin(admin.ModelAdmin):
    list_display = ("name",)

# Register the Todo model here.
admin.site.register(Todo, TodoAdmin)
admin.site.register(Label, LabelAdmin)
