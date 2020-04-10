<template>
    <div id="customer">
        <h1>Customer Create -Vue</h1>
        <form>
            <div class="row">
                <div class="col-md-4">
                    <div class="text-danger"></div>
                    <div class="form-group">
                        <label for="FirstName" class="control-label">First Name</label>
                        <input v-model="FirstName" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="LastName" class="control-label">Last Name</label>
                        <input v-model="LastName" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="AddressLine1" class="control-label">Address Line 1</label>
                        <input v-model="AddressLine1" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="AddressLine2" class="control-label">Address Line 2</label>
                        <input v-model="AddressLine2" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="ContactNo1" class="control-label">Contact No 1</label>
                        <input v-model="ContactNo1" class="form-control" />
                    </div>

                    <div class="form-group">
                        <label for="ContactNo2" class="control-label">Contact No 2</label>
                        <input v-model="ContactNo2" class="form-control" />
                    </div>

                    <div class="form-group">
                        <input type="button" value="Create" @click="save" class="btn btn-primary" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: "customer-create-component",
        props: {
            CreateCustomerUrl: String,
            IndexUrl: String
        },
        data() {
            return {
                FirstName: '',
                LastName: '',
                AddressLine1: '',
                AddressLine2: '',
                ContactNo1: '',
                ContactNo2: ''
            }
        },
        methods: {
            save() {
                var base = this;
                var data = {
                    FirstName: base.FirstName,
                    LastName: base.LastName,
                    AddressLine1: base.AddressLine1,
                    AddressLine2: base.AddressLine2,
                    ContactNo1: base.ContactNo1,
                    ContactNo2: base.ContactNo2
                };
                
                new Promise(function (resolve, reject) {
                    axios.post(base.CreateCustomerUrl, data)
                        .then(function (res) {
                            window.location.href = base.IndexUrl;
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                });
            }
        }
    };
</script>