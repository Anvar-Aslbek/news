from django.contrib import admin
from django.utils.html import format_html

# Register your models here.
from mptt.admin import DraggableMPTTAdmin
from .models import Category, Post, MyUser

class MyDraggableMPTTAdmin(DraggableMPTTAdmin):
    list_display = ('tree_actions', 'something')
    list_display_links = ('something',)

    def something(self, instance):
        return format_html(
            '<div style="text-indent:{}px">{}</div>',
            instance._mpttfield('level') * self.mptt_level_indent,
            instance.name,  # Or whatever you want to put here
        )
    something.short_description = ('something nice')

admin.site.register(Category, MyDraggableMPTTAdmin)
admin.site.register([Post,MyUser])