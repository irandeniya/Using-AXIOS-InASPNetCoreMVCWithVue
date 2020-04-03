<template>
    <div id="customer">
        <h1>Customer Details -Vue</h1>
        <dl class="row">
            <dt class="col-sm-2">
                <label>Name</label>
            </dt>
            <dd class="col-sm-10">
                {{Customer.name}}
            </dd>
            <dt class="col-sm-2">
                <label>Address</label>
            </dt>
            <dd class="col-sm-10">
                {{Customer.address}}
            </dd>
            <dt class="col-sm-2">
                <label>Contact No</label>
            </dt>
            <dd class="col-sm-10">
                {{Customer.contactNo}}
            </dd>
        </dl>
        <div>
            <a :href="EditUrl">Edit</a> | <button type="button" v-on:click="DeleteCustomer">Delete</button>
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
            IndexUrl: String,
            DeleteUrl: String,
            DetailsDataUrl: String
        },
        data() {
            return {
                Customer: {}
            }
        },
        methods: {
            DeleteCustomer() {
                var base = this;
                var conf = confirm('want to delete ' + base.Customer.name + '?');

                if (conf) {
                    new Promise(function () {
                        axios.post(base.DeleteUrl)
                            .then(function (res) {
                                window.location.href = base.IndexUrl;
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    });
                }
            },
        },
        mounted() {
            var base = this;
            new Promise(function () {
                axios.get(base.DetailsDataUrl)
                    .then(function (res) {
                        base.Customer = res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            });
        }
    };
</script>