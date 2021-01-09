from django.db import models

# Create your models here.

class Label(models.Model):
    name = models.CharField(max_length = 100)
    
    class Meta:
        verbose_name = ("Label")
        verbose_name_plural = ("Labels")

    def __str__(self):
        return self.name

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    label = models.ForeignKey(Label, on_delete=models.PROTECT, default="general")

    def __str__(self):
        return self.title
