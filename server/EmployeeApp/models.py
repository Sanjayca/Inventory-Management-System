from django.db import models

# Create your models here.


class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=500)


class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=500)
    Department = models.CharField(max_length=500)
    DateOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length=500)


class Sales(models.Model):
    SalesId = models.AutoField(primary_key=True)
    StoreId = models.IntegerField()
    Date = models.DateField() 
    ItemId = models.CharField(max_length=500)
    SalesQty = models.IntegerField()

class Supplier(models.Model):
    SupplierId = models.AutoField(primary_key=True)
    SupplierName = models.CharField(max_length=500)
    SupplierContact = models.IntegerField()
    SupplierEmail = models.CharField(max_length=500)
    SupplierAddress = models.CharField(max_length=500)

class Vendor(models.Model):
    VendorId = models.AutoField(primary_key=True)
    VendorName = models.CharField(max_length=500)
    VendorContact = models.BigIntegerField()
    PaymentMethod = models.CharField(max_length=500)
    VendorAddress = models.CharField(max_length=500)

class Store(models.Model):
    StoreId = models.AutoField(primary_key=True)
    StoreName = models.CharField(max_length=500)
    StoreAddress = models.CharField(max_length=500)
    StoreCapacity = models.IntegerField()
    StoreManager = models.CharField(max_length=500)

class Item(models.Model):
    ItemId = models.AutoField(primary_key=True)
    ItemName = models.CharField(max_length=500)
    Category = models.CharField(max_length=500)
    Price = models.IntegerField()
    SupplierId = models.CharField(max_length=500)
