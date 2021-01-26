from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "index.html")

def bobothy(request):
    return HttpResponse("Bobothy time. the best boi!")