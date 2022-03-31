from django.shortcuts import render
from Admin.models import Post
# Create your views here.



def home(request):
    sungi = Post.objects.all().order_by('created_at')[:15]
    return render(request, "home.html",{'sungi':sungi})
