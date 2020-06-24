<template>
  <div>
    <full-page :options="options">
      <!-- 第一屏 -->
      <div class="section section1">
          <div class="box1">
            <section-one></section-one>
          </div>
      </div>
      <!-- 第二屏，我们的优势 -->
      <div class="section section2">
          <div class="box2">
            <section-two></section-two>
          </div>
      </div>
      <!-- 第三屏，解决方案 -->
      <div class="section section3">
          <div class="box3">
            <section-three :solutionData='solutionData'></section-three>
          </div>
      </div>
      <!-- 第四屏，关于企业 -->
      <div class="section section4">
          <div class="box4">
            <section-four :aboutEnterprise='aboutEnterprise' :urlPublic='urlPublic'></section-four>
          </div>
      </div>
      <!-- 第五屏 新闻动态 -->
      <div class="section section5">
          <div class="box5">
            <section-five :newsListOne='newsListOne' :newsListTwo='newsListTwo' :urlPublic='urlPublic'>
            </section-five>
          </div>
      </div>
      <!-- 第六屏，成功案例 -->
      <div class="section section6">
          <div class="box6">
          <section-six :successfulCaseList ='successfulCaseList '></section-six>
          </div>
      </div>
      <!-- 第七屏，合作伙伴 -->
      <div class="section section7">
          <div class="box7">
          <section-seven :cooperativePartnerList='cooperativePartnerList' :urlPublic='urlPublic'></section-seven>
          </div>
      </div>
    </full-page>
    <!-- 左侧导航 -->
    <ul id="menu">
        <li data-menuanchor='page1' class="active page1">
            <a href="#page1">
              <span>01</span>
              <i class="menuTitle"></i>
            </a>
        </li>
        <li data-menuanchor='page2' class="page2">
            <a href="#page2">
              <span>02</span>
              <i class="menuTitle">我们的优势</i>
            </a>
        </li>
        <li data-menuanchor='page3' class="page3">
            <a href="#page3">
              <span>03</span>
              <i class="menuTitle">解决方案</i>
            </a>
        </li>
        <li data-menuanchor='page4' class="page4">
            <a href="#page4">
              <span>04</span>
              <i class="menuTitle">关于企业</i>
            </a>
        </li>
        <li data-menuanchor='page5' class="page5">
            <a href="#page5">
              <span>05</span>
              <i class="menuTitle">新闻动态</i>
            </a>
        </li>
        <li data-menuanchor='page6' class="page6">
            <a href="#page6">
              <span>06</span>
              <i class="menuTitle">成功案例</i>
            </a>
        </li>
        <li data-menuanchor='page7' class="page7">
            <a href="#page7">
              <span>07</span>
              <i class="menuTitle">合作伙伴</i>
            </a>
        </li>
    </ul>
  </div>
</template>

<script src="./Index.js"></script>
<style lang="stylus" scoped src="./Index.css"></style>
