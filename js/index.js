window.onload = function() {
    new Vue({
        el: "#main",
        data: {
            lists: {
                checkAll: { "name": "全选", "state": false },
                items: [
                    { "name": "时间都去哪儿了", "state": false },
                    { "name": "海阔天空", "state": false },
                    { "name": "真的爱你", "state": false },
                    { "name": "不再犹豫", "state": false },
                    { "name": "光辉岁月", "state": false },
                    { "name": "喜欢妳", "state": false }
                ]
            }
        },
        methods: {

        },
        components: {
            "my-check": {
                template: "#my-check",
                data() {
                    return {

                    }
                },
                props: ['lists', 'all'],
                methods: {
                    checkAll: function() { //执行全选check改变事件
                        this.lists.items.forEach((item) => {
                            item.state = this.all.state;
                        })
                    },
                    checkAllBtn: function(state) { //执行全选按钮事件
                        this.lists.items.forEach((item) => {
                            item.state = true;
                        })
                        this.all.state = true;
                    },
                    selectChk: function() { //执行各个check改变事件
                        /*方法一 */
                        // var select = this.lists.items.filter((item) => {
                        //     return item.state
                        // });
                        // if (select.length == this.lists.items.length) {
                        //     this.all.state = true;
                        // } else {
                        //     this.all.state = false;
                        // }

                        /*方法二 */
                        this.all.state = this.lists.items.every(function(item) {
                            return item.state == true
                        })
                    },
                    nocheckAll: function() { //全不选
                        this.lists.items.forEach((item) => {
                            item.state = false;
                        })
                        this.all.state = false;
                    },
                    Reverse: function() { //反选
                        this.lists.items.forEach((item) => {
                            item.state = !item.state;
                        })
                        this.all.state = !this.all.state;
                    },
                    getValue: function() { //获取选中值
                        var arr = [];
                        this.lists.items.forEach((item) => {
                            if (item.state == true) {
                                arr.push(item.name)
                                return;
                            }
                        });
                        console.log(...arr);
                    }
                }
            },
        }
    })
}