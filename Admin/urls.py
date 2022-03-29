from django.urls import path
from .views import index , search ,categories,sort,UserList, tagview, CreatePostView, UpdatePostView ,DeletePostView

urlpatterns = [
    path('', index, name ='home'),
    path('search',search, name='news_search'),
    path('category/',categories,name = 'categories'),
    path('category/sort',sort, name='sort_category'),
    path('user/',UserList,name='user_list'),
    path('tags/',tagview,name = 'tags_view'),
    path('createpost/',CreatePostView.as_view(),name = "createpost"),
    path('updatepost/<slug:slug>',UpdatePostView.as_view(),name = 'updatepost'),
    path('delete/<slug:slug>',DeletePostView.as_view(),name = 'deletepost')
]
