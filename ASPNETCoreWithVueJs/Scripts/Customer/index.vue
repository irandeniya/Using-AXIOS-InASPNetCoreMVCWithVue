<template>
    <div id="customer">
        <h1>Customer Create -Vue</h1>
        <p v-if="isAdmin">
            <a :href="CreateCustomerUrl">Create New</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Address
                    </th>
                    <th>
                        Contact No
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in Customers">
                    <td>
                        {{item.name}}
                    </td>
                    <td>
                        {{item.address}}
                    </td>
                    <td>
                        {{item.contactNo}}
                    </td>
                    <td>
                        <a v-if="isAdmin" :href="EditUrl+'/'+item.id">Edit</a>|
                        <a :href="DetailsUrl+'/'+item.id">Details</a> |
                        <button type="button" v-if="isAdmin" v-on:click="DeleteCustomer(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: "customer-create-component",
        props: {
            CreateCustomerUrl: String,
            IndexDataUrl: String,
            DeleteUrl: String,
            EditUrl: String,
            DetailsUrl: String,
            DeleteUrl: String,
            isAdmin: Boolean,
        },
        data() {
            return {
                Customers: []
            }
        },
        methods: {
            DeleteCustomer(id) {
                var base = this;
                var record = base.Customers.filter(function (f) { return f.id === id; })[0];

                var conf = confirm('want to delete ' + record.name + '?');

                if (conf) {
                    new Promise(function () {
                        axios.post(base.DeleteUrl + '/' + record.id)
                            .then(function (res) {
                                window.location.reload();
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
            new Promise(function (request, response) {
                axios.get(base.IndexDataUrl)
                    .then(function (res) {
                        base.Customers = res.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            });
        }
    };
</script>