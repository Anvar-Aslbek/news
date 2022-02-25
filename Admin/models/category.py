from django.db import models
from mptt.models import MPTTModel, TreeForeignKey

class Category(MPTTModel):
    name = models.CharField(max_length = 200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    is_hidden = models.BooleanField()
    is_home = models.BooleanField()
    creted_at = models.DateTimeField(auto_now_add = True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')

    class MPTTMeta:
        order_insertion_by = ['name']
    

    def __str__(self):
        return self.name