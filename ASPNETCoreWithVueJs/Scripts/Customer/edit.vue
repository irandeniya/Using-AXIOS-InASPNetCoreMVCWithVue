<template>
    <div id="customer">
        <h1>Customer Create -Vue</h1>
        <form>
            <div class="row">
                <div class="col-md-4">
                    <div class="text-danger"></div>
                    <div class="form-group">
                        <label for="Name" class="control-label">Customer Name</label>
                        <input v-model="Name" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="Address" class="control-label">Address</label>
                        <input v-model="Address" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="ContactNo" class="control-label">Contact No</label>
                        <input v-model="ContactNo" class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="button" value="Save" v-on:click="save" class="btn btn-primary" /> 
                        <a :href="IndexUrl">Back to List</a>
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
            EditUrl: String,
            DetailsDataUrl: String,
            IndexUrl: String
        },
        data() {
            return {
                Id: 0,
                Name: '',
                Address: '',
                ContactNo: ''
            }
        },
        methods: {
            save() {
                var base = this;

                var data = {
                    Id: base.Id,
                    Name: base.Name,
                    Address: base.Address,
                    ContactNo: base.ContactNo
                };

                new Promise(function (request, response) {
                    axios.post(base.EditUrl, data)
                        .then(function (res) {
                            window.location.href = base.IndexUrl;
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                });
            }
        },
        mounted() {
            var base = this;
            new Promise(function (request, response) {
                axios.get(base.DetailsDataUrl)
                    .then(function (res) {
                        base.Id = res.data.id;
                        base.Name = res.data.name;
                        base.Address = res.data.address;
                        base.ContactNo = res.data.contactNo;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            });
        }
    };
</script>