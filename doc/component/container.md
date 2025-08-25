## container 容器的基本使用
```vue 
  <template>
      <ZContainer>
          <ZHeader></ZHeader>
          <ZMain></ZMain>
          <ZFooter></ZFooter>
      </ZContainer>
  <template>
```
## 容器组件container  基础布局
<div class='container'>
   <ZContainer class="wrap">
    <ZAside class='aside'></ZAside>
    <ZContainer class="wrap">
      <ZHeader class='header'></ZHeader>
      <ZMain class='main'></ZMain>
      <ZFooter class="footer"></ZFooter>
    </ZContainer>
    </ZContainer>
 </div>
 
## 横向布局container
  <div class='container'>
   <ZContainer class="wrap">
      <ZAside class='aside'></ZAside>
      <ZMain class='main'></ZMain>
      <ZAside class='aside'></ZAside>
    </ZContainer>
 </div>

## 直接垂直布局
   <ZContainer class="wrap">
      <ZHeader class='aside'></ZHeader>
      <ZMain class='main'></ZMain>
      <ZFooter class="footer"></ZFooter>
    </ZContainer>

<style scoped>
  .container {
    height:400px;
  }

  .wrap {
    height:400px;
  }
  .header,.main,.footer,.aside {
    background:pink;
    border:2px solid #333;
  }



</style>