from django.urls import re_path as url
from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^department$', views.departmentApi),
    url(r'^department/([0-9]+)$', views.departmentApi),

    url(r'^employee$', views.employeeApi),
    url(r'^employee/([0-9]+)$', views.employeeApi),

    url(r'^sales$', views.salesApi),
    url(r'^sales/([0-9]+)$', views.salesApi),

    url(r'^supplier$', views.supplierApi),
    url(r'^supplier/([0-9]+)$', views.supplierApi),

    url(r'^vendor$', views.vendorApi),
    url(r'^vendor/([0-9]+)$', views.vendorApi),

    url(r'^store$', views.storeApi),
    url(r'^store/([0-9]+)$', views.storeApi),

    url(r'^item$', views.itemApi),
    url(r'^item/([0-9]+)$', views.itemApi),


    url(r'^employee/savefile', views.SaveFile)
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
