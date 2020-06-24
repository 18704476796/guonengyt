import PageHeader from '@/commen/PageHeader.vue'
import Business from './components/Business'
import School from './components/School'
import Hospital from './components/Hospital'
import ElectricPower from './components/ElectricPower'
import PageFooter from '@/commen/PageFooter.vue'
import axios from 'axios'

export default {
  name: 'Solution',
  components: {
    PageHeader,
    Business,
    School,
    Hospital,
    ElectricPower,
    PageFooter
  },
  data () {
    return {
      activeName: '1',
      totalRows: null, // ��ҳ����������
      pageSize: 6, // ��ҳ��ҳ��ʾ����
      menuType: 1,
      currentPage: 1, // ÿҳҳ��
      newsList: [ // �����б�
      ]
    }
  },
  watch: {
    activeName () {
    }
  },
  methods: {
    handleClick (tab, event) {
      this.menuType = tab.name
      console.log(this.menuType)
      this.inint()
    },
    getInfo (size) { // �ı�ÿҳ��ʾ��������
      this.pageSize = size
      this.inint()
    },
    getInfo_current (size) { // �ı�ҳ��ҳ�봥��
      this.currentPage = size
      this.inint()
    },
    inint () {
      let _this = this
      axios({
        method: 'post',
        url: '/api/news/findNewsData.htm',
        data: {
          pageSize: this.pageSize,
          currentPage: this.currentPage,
          menuType: this.menuType
        },
        withCredentials: true, // Ĭ�ϵ�
        timeout: 8000, // ����ʱʱ��
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          _this.newsList = res.newDataPage.data
          _this.totalRows = res.newDataPage.totalRows // ������
          _this.pageSize = res.newDataPage.pageSize // ÿҳ��ʾ����
          console.log(res)
        } else if (res.status === '1006') {
          console.log('�������Ϊ��')
        } else if (res.status === '1008') {
          console.log('�ύ�쳣')
        }
      }).catch(function (error) {
        console.error(error)
      })
    }
  },
  mounted () {
    this.inint()
  }
}
