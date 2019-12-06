<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
            Xitems-per-page="15"
            class="elevation-1"
        >
            <template v-slot:item="scope">
                <tr style="vertical-align: top;">
                    <td v-for="header in scope.headers" :align="header.align">
                        <v-text-field
                            v-if="header.value === 'date'"
                            type="date"
                            v-model="scope.item.date"
                        />

                        <v-textarea
                            v-else-if="header.value === 'text'"
                            v-model="scope.item.text"
                        />

                        <v-text-field
                            v-else
                            type="number"
                            v-model.number="scope.item[header.value]"
                        />
                    </td>
                </tr>
            </template>

            <!--
            <template v-slot:item.date="{ item }">
                <v-text-field
                    style="width: 100px;"
                    type="date"
                    v-model="item.date"
                />
            </template>
            <template v-slot:item.worked="{ item }">
                <v-text-field type="number" v-model.number="item.worked" />
            </template>
            <template v-slot:item.internal="{ item }">
                <v-text-field type="number" v-model.number="item.internal" />
            </template>
            <template v-slot:item.courses="{ item }">
                <v-text-field type="number" v-model.number="item.courses" />
            </template>
            <template v-slot:item.leave="{ item }">
                <v-text-field type="number" v-model.number="item.leave" />
            </template>
            <template v-slot:item.sick="{ item }">
                <v-text-field type="number" v-model.number="item.sick" />
            </template>
            <template v-slot:item.doctor="{ item }">
                <v-text-field type="number" v-model.number="item.doctor" />
            </template>
            <template v-slot:item.text="{ item }">
                <v-textarea v-model="item.text" />
            </template>
-->
        </v-data-table>
    </div>
</template>

<script>
export default {
    data: () => ({
        headers: [
            { text: 'Date', value: 'date', width: '1%' },
            { text: 'Hours', value: 'worked', width: '100px' },
            { text: 'Logs', value: 'text' }
        ]
    }),

    created() {
        // this.$store.dispatch('getTimesheet')
    },

    computed: {
        items() {
            return this.$store.state.timesheet.timesheet
        }
    }
}
</script>
