from django import template

from Admin.models import Category

register = template.Library()

@register.inclusion_tag('menu.html')
def show_categories():
    categories = Category.objects.all()
    return {'categories':categories, 'salom':"salom1"}