<template>
    <div id="product">
        <h1>Product Details -Vue</h1>
        <form>
            <div class="row">
                <div class="col-md-4">
                    <div class="text-danger"></div>
                    <div class="form-group">
                        <label for="customer.firstName" class="control-label">First Name</label>
                        <input v-model="customer.firstName" class="form-control" disabled/>
                    </div>
                    <div class="form-group">
                        <label for="customer.lastName" class="control-label">Last Name</label>
                        <input v-model="customer.lastName" class="form-control" disabled/>
                    </div>

                    <div class="form-group">
                        <label for="customer.addressLine1" class="control-label">Address Line 1</label>
                        <input v-model="customer.addressLine1" class="form-control" disabled/>
                    </div>

                    <div class="form-group">
                        <label for="customer.addressLine2" class="control-label">Address Line 2</label>
                        <input v-model="customer.addressLine2" class="form-control" disabled/>
                    </div>

                    <div class="form-group">
                        <label for="customer.contactNo1" class="control-label">Contact No 1</label>
                        <input v-model="customer.contactNo1" class="form-control" disabled/>
                    </div>

                    <div class="form-group">
                        <label for="customer.contactNo2" class="control-label">Contact No 2</label>
                        <input v-model="customer.contactNo2" class="form-control" disabled/>
                    </div>
                </div>
            </div>
        </form>
        <div>
            <a :href="EditUrl">Edit</a> |
            <a :href="IndexUrl">Back to List</a>
        </div>

    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: "product-create-component",
        props: {
            EditUrl: String,
            DetailsDataUrl: String,
            IndexUrl: String
        },
        data() {
            return {
                customer: {
                    customerId: 0,
                    firstName: '',
                    lastName: '',
                    addressLine1: '',
                    addressLine2: '',
                    contactNo1: '',
                    contactNo2: ''
                }
            }
        },
        mounted: function () {
            var base = this;
            new Promise(function (resolve, reject) {
                axios.get(base.DetailsDataUrl)
                    .then(function (res) {
                        console.log(res.data);
                        base.customer = res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            });
        }
    };
</script>