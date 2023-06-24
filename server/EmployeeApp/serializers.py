from rest_framework import serializers
from EmployeeApp.models import Departments, Employees, Sales, Supplier, Vendor, Store, Item


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId', 'DepartmentName')


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId', 'EmployeeName', 'Department',
                  'DateOfJoining', 'PhotoFileName')


class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sales
        fields = ('SalesId', 'StoreId', 'Date', 'ItemId', 'Sales')


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = ('SupplierId', 'SupplierName',
                  'SupplierContact', 'SupplierEmail', 'SupplierAddress')


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ('VendorId', 'VendorName',
                  'VendorContact', 'PayementMethod', 'VendorAddress')


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = ('StoreId', 'StoreName', 'StoreAddress'
                  'StoreCapacity', 'StoreManager')


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('ItemId', 'ItemName', 'Category'
                  'Price', 'SupplierId')
