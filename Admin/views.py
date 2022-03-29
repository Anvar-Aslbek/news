from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from .models import Post ,Category, MyUser
from django.core.paginator import Paginator
from taggit.models import Tag
from .forms import CreateCategoryForm, CreatePostForm

# class kurinishi uchun 
from django.views.generic import CreateView, DeleteView
from django.views.generic.edit import UpdateView


def index(request):
    news = Post.objects.all()
    category = Category.objects.all()
    return render(request,'index.html',{'news':news,'categories':category})


class CreatePostView(CreateView):
    form_class = CreatePostForm
    template_name = 'createpost.html'
    success_url = reverse_lazy('home')

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)


class UpdatePostView(UpdateView):
    model = Post
    template_name = 'updatepost.html'
    fields = ['name','slug','img','short_info','description','category','tags','status','is_main']
    get_absolute_url = 'home'

class DeletePostView(DeleteView):
    model = Post
    template_name = 'deletepost.html'
    success_url = reverse_lazy('home')


# def createPost(request):
#     if request.method == "POST":
#         form = CreatePostForm(request.POST)
#         if form.is_valid():
#             form = form.save(commit = False)
#             form.author = request.user
#             form.save()
#             redirect('home')
#     else :
#         form = CreatePostForm()
#     return render(request, 'createpost.html',{'form':form})

def search(request):
    results = None
    category = Category.objects.all()
    try:
        query = request.POST['query']
        results = Post.objects.filter(name__icontains=query) |\
            Post.objects.filter(description__icontains=query)
        paginator = Paginator(results, 20)
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)

        return render(
            request,
            'index.html',
            {'news': page_obj,'categories':category}
        )
    except KeyError:
        "KeyError"
        return render(
            request,
            'index.html',
            {'news': results,'categories':category})


def categories(request):
    category = Category.objects.all()
    paginator = Paginator(category, 20)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    #create category
    if request.method == "POST":
        form = CreateCategoryForm(request.POST)
        if form.is_valid():
            form.save()
            redirect('categories')
    else :
        form = CreateCategoryForm()
    return render(request, 'category.html',{'news':category,'form':form})
    
def sort(request):
    results = None
    category = Category.objects.all()
    try:
        query = request.POST['query']
        results = Category.objects.filter(name__icontains=query)

        return render(
            request,
            'category.html',
            {'news': results,'categories':category}
        )
    except KeyError:
        "KeyError"
        return render(
            request,
            'category.html',
            {'cateory': results,'categories':category}
        )

def UserList(request):
    admin = MyUser.objects.all()
    return render(request,'userlist.html',{'admin':admin})

def tagview(request):
    tags = Tag.objects.all()
    return render(request, 'tags.html',{'tags':tags})