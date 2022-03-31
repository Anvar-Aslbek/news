from django import template

from Admin.models import Category, Post

register = template.Library()

@register.inclusion_tag('menu.html')
def show_categories():
    categories = Category.objects.all()
    return {'categories':categories, 'salom':"salom1"}

@register.inclusion_tag('ommabop.html')
def show_ommabop():
    omma = Post.objects.all().order_by('-views')[:6]
    return {'best_view':omma}