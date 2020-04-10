<template>
    <div id="product">
        <h1>Product Create -Vue</h1>
        <p v-if="isAdmin">
            <a :href="CreateCustomerUrl">Create New</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in Customers">
                    <td>
                        {{item.firstName}}
                    </td>
                    <td>
                        {{item.lastName}}
                    </td>
                    <td>
                        <a v-if="isAdmin" :href="EditUrl+'/'+item.customerId">Edit</a>|
                        <a :href="DetailsUrl+'/'+item.customerId">Details</a> |
                        <a v-if="isAdmin" href="javascript:void(0)" v-on:click="deleteCustomer(item.customerId)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: "product-create-component",
        props: {
            CreateCustomerUrl: String,
            DataUrl: String,
            DeleteUrl: String,
            EditUrl: String,
            DetailsUrl: String,
            IndexUrl: String,
            isAdmin: Boolean
        },
        data() {
            return {
                Customers: []
            }
        },
        methods: {
            deleteCustomer(id) {
                var base = this;
                console.log(id);
                var record = base.Customers.filter(function (f) { return f.customerId === id })[0];
                console.log(record);
                var rep = confirm('Want to delete ' + record.firstName + ' ' + record.lastName + '?');
                if (rep) {
                    new Promise(function (resolve, reject) {
                        axios.post(base.DeleteUrl + '/' + id)
                            .then(function (res) {
                                window.location.href = base.IndexUrl;
                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    });
                }
            }
        },
        beforeMount() {
            var base = this;

            new Promise(function (resolve, reject) {
                axios.get(base.DataUrl)
                    .then(function (res) {
                        console.log(res);
                        base.Customers = res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            });
        }
    };
</script>