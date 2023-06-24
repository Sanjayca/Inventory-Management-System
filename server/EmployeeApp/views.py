from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp.models import Departments, Employees, Sales, Supplier, Vendor, Store, Item
from EmployeeApp.serializers import DepartmentSerializer, EmployeeSerializer, SalesSerializer, SupplierSerializer, VendorSerializer, StoreSerializer, ItemSerializer

from django.core.files.storage import default_storage

# Create your views here.


@csrf_exempt
def departmentApi(request, id=0):
    if request.method == 'GET':
        departments = Departments.objects.all()
        departments_serializer = DepartmentSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        departments_serializer = DepartmentSerializer(data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(
            DepartmentId=department_data['DepartmentId'])
        departments_serializer = DepartmentSerializer(
            department, data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE':
        department = Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def employeeApi(request, id=0):
    if request.method == 'GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employees_serializer = EmployeeSerializer(data=employee_data)
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employees.objects.get(
            EmployeeId=employee_data['EmployeeId'])
        employees_serializer = EmployeeSerializer(employee, data=employee_data)
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE':
        employee = Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def salesApi(request, id=0):
    if request.method == 'GET':
        sales = Sales.objects.all()
        sales_serializer = SalesSerializer(sales, many=True)
        return JsonResponse(sales_serializer.data, safe=False)
    elif request.method == 'POST':
        sales_data = JSONParser().parse(request)
        sales_serializer = SalesSerializer(data=sales_data)
        if sales_serializer.is_valid():
            sales_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        sales_data = JSONParser().parse(request)
        sales = Sales.objects.get(SalesId=sales_data['SalesId'])
        sales_serializer = SalesSerializer(sales, data=sales_data)
        if sales_serializer.is_valid():
            sales_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE':
        sales = Sales.objects.get(SalesId=id)
        sales.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def supplierApi(request, id=0):
    if request.method == 'GET':
        suppliers = Supplier.objects.all()
        suppliers_serializer = SupplierSerializer(suppliers, many=True)
        return JsonResponse(suppliers_serializer.data, safe=False)
    elif request.method == 'POST':
        supplier_data = JSONParser().parse(request)
        suppliers_serializer = SupplierSerializer(data=supplier_data)
        if suppliers_serializer.is_valid():
            suppliers_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        supplier_data = JSONParser().parse(request)
        supplier = Supplier.objects.get(SupplierId=supplier_data['SupplierId'])
        suppliers_serializer = SupplierSerializer(supplier, data=supplier_data)
        if suppliers_serializer.is_valid():
            suppliers_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif request.method == 'DELETE':
        supplier = Supplier.objects.get(SupplierId=id)
        supplier.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def storeApi(request, id=0):
    if request.method == 'GET':
        stores = Store.objects.all()
        stores_serializer = StoreSerializer(stores, many=True)
        return JsonResponse(stores_serializer.data, safe=False)
    elif request.method == 'POST':
        store_data = JSONParser().parse(request)
        stores_serializer = StoreSerializer(data=store_data)
        if stores_serializer.is_valid():
            stores_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        store_data = JSONParser().parse(request)
        store = Store.objects.get(StoreId=store_data['StoreId'])
        stores_serializer = StoreSerializer(store, data=store_data)
        if stores_serializer.is_valid():
            stores_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif request.method == 'DELETE':
        store = Store.objects.get(StoreId=id)
        store.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def vendorApi(request, id=0):
    if request.method == 'GET':
        vendors = Vendor.objects.all()
        vendors_serializer = VendorSerializer(vendors, many=True)
        return JsonResponse(vendors_serializer.data, safe=False)
    elif request.method == 'POST':
        vendor_data = JSONParser().parse(request)
        vendors_serializer = VendorSerializer(data=vendor_data)
        if vendors_serializer.is_valid():
            vendors_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        vendor_data = JSONParser().parse(request)
        vendor = Vendor.objects.get(VendorId=vendor_data['VendorId'])
        vendors_serializer = VendorSerializer(vendor, data=vendor_data)
        if vendors_serializer.is_valid():
            vendors_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif request.method == 'DELETE':
        vendor = Vendor.objects.get(VendorId=id)
        vendor.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def itemApi(request, id=0):
    if request.method == 'GET':
        items = Item.objects.all()
        items_serializer = ItemSerializer(items, many=True)
        return JsonResponse(items_serializer.data, safe=False)
    elif request.method == 'POST':
        item_data = JSONParser().parse(request)
        items_serializer = ItemSerializer(data=item_data)
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        item_data = JSONParser().parse(request)
        item = Item.objects.get(ItemId=item_data['ItemId'])
        items_serializer = ItemSerializer(item, data=item_data)
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif request.method == 'DELETE':
        item = Item.objects.get(ItemId=id)
        item.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def SaveFile(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
# Create your views here.
