from django import forms
from .models import Category, Post

class CreateCategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'


class CreatePostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['name','slug','img','short_info','description','category','tags','status','is_main']