<script lang="ts" setup>
import { createNamespace } from "@zhao/utils/createBem";
import { useSlots, VNode,defineProps } from "vue";
import ZScrollBarBar from "./../../scrollBar/src/index.vue";

defineOptions({
  name: "z-table"
})
const size = ["small", "medium", "large"] as const;

const props= defineProps<{
  data: Array<Record<string, any>>,
  height: string | number,
  "max-height": string | number,
  "border": string | number,
  "border-radius": string | number,
  "box-shadow": string | number,
  stripe: boolean,
  size: keyof typeof size,
  fit: boolean,
  "show-header": boolean,
  "highlight-current-row": boolean,
  "current-row-key": string | number,
  rowClassName: (row: Record<string, any>,rowIndex:number) => string | string[],
  "row-style": (row: Record<string, any>) => string | Record<string, any>,
  "cell-class-name": (row: Record<string, any>, column: Record<string, any>, cellValue: any) => string | string,
  "cell-style": (row: Record<string, any>, column: Record<string, any>, cellValue: any) => string | Record<string, any>,
  "header-row-class-name": (row: Record<string, any>) => string | string,
  "header-row-style": (row: Record<string, any>) => string | Record<string, any>,
  "header-cell-class-name": (column: Record<string, any>) => string | string,
  "header-cell-style": (column: Record<string, any>) => string | Record<string, any>,
  "row-key": string | number,
  "empty-text": string,
  "default-expand-all": boolean,
  "expand-row-keys": Array<string | number>,
  "default-sort": { key: string | number, order: 'asc' | 'desc' },
  "show-summary": boolean,
  "sum-text": string,
  "summary-method": (data: Array<Record<string, any>>) => Record<string, any>,
  "span-method": (row: Record<string, any>, column: Record<string, any>) => { rowspan: number, colspan: number },
  "select-on-indeterminate": boolean,
  "indent": number,
  "lazy": boolean,
  "load": (row: Record<string, any>, treeNode: { expanded: boolean }) => Promise<void>,
  "tree-props": {
    hasChildren: string,
    children: string
  },
  "table-layout": string,
  "scrollbar-always-on": boolean,
  "show-overflow-tooltip": boolean,
}>()

const nb = createNamespace("tables");
const tabelClassName = nb.b();
const tableInnerWrapper = nb.e("inner-wrapper");
const tabelHeaderWrapper = nb.e("header-wrapper");
const tableBodyWrapper = nb.e("body-wrapper");
const tableFooterWrapper = nb.e("footer-wrapper");

const slots = useSlots();
let children: Array<VNode> = slots.default ? slots.default() : [];
console.log(  props.rowClassName({},1), 'props.rowClassName');
</script>

<template>
  <div :class="[tabelClassName]">
    <div :class="[tableInnerWrapper]">
      <div :class="[tabelHeaderWrapper]">
        <!--这里是表头 -->
        <table>
          <colgroup>
            <template v-for="(item, index) in children" :key="index" :name="`table-column-${ index }`"    :style="{width: item.props?.width? item.props.width+'px' : 'auto'}">
                <col v-if="item.props?.width"   :style="{ width: item.props?.width }"></col>
                <col v-else></col>
              </template>
            </col>
          </colgroup>
          <thead>
            <!-- 这里新增单选和多选选择框 -->
            <tr>
              <td v-for="(item, index) in children" :key="index">
                <div class="cell" v-if="item.props?.type=='selection'">
                   <input type="checkbox" name="all" value="Bike"/>
                </div>
                <div v-else class="cell">
                    {{ item.type=='index'?'': item.props?.label }}
                </div>
              </td>
            </tr>
          </thead>
        </table>
      </div>

      <!-- 这里是表格内容 -->
      <div :class="[tableBodyWrapper]"  v-if="props.data.length > 0">
        <ZScrollBarBar>
        <table>
          <colgroup>
            <col :name="`table-column-${ index }`"  v-for="(item, index) in children" :key="index">
          </colgroup>
          <tbody>
            <!-- 这里新增选择框 -->
            <tr :key="rowIndex" v-for="(val, rowIndex) in props.data"  :class="[typeof props.rowClassName==='function'?  props.rowClassName(val, rowIndex) : props['row-class-name']]">
                <template v-for="(item, sIndex) in children" :key="sIndex">
                  <td v-if="item.props?.type=='index'">{{rowIndex+1}}</td>
                  <td v-else-if="item.props?.type=='selection'">
                  <input type="checkbox" name="vehicle" value="Bike"/>
                  </td>
                  <td v-else>{{ val[item.props?.prop] }}</td>
                </template>
            </tr>
          </tbody>
        </table>
        </ZScrollBarBar>
      </div>

      <div class="empty-content" v-else>哟, 暂无数据</div>

      <div :class="[tableFooterWrapper]"  v-if="false">
        <table>
          <colgroup>
            <col>
            </col>
          </colgroup>
          <tfoot>
            <tr>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
