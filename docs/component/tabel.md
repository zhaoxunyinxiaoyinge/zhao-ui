## tabel 的使用

<script setup lang='ts'>
        import {ref} from "vue"
        const data=ref([{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'},{name:"xioakei",age:20,sex:'男',grade:'本科'}]);

        const tableRowClassName = ({
            row,
            rowIndex,
            }) => {
                console.log(rowIndex,"55555")
            if (rowIndex === 1) {
                return 'warning-row'
            } else if (rowIndex === 3) {
                return 'success-row'
            }
            return 'hhh'
        }
</script>

<z-table :data="data"  :rowClassName="tableRowClassName">
 <z-tabel-column type='selection'></z-tabel-column>
 <z-tabel-column type='index'></z-tabel-column>
    <z-tabel-column label='名称'   prop='name'></z-tabel-column>
    <z-tabel-column  label='年龄' prop='age'></z-tabel-column>
    <z-tabel-column label='性别'  prop='sex'></z-tabel-column>
    <z-tabel-column  label='学历' prop='grade'></z-tabel-column>
</z-table>

<style  scope>
   table tr.warning-row {
        background:blue !important
    }

   table tr.success-row {
        background:red  !important
    }
</style>