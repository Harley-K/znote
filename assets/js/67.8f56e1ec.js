(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{458:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("Boxx"),s._v(" "),t("p",[s._v("工作中常用到的linux命令备份，方便查看。")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#工具"}},[s._v("工具")])]),t("li",[t("a",{attrs:{href:"#切换目录"}},[s._v("切换目录")])]),t("li",[t("a",{attrs:{href:"#tomcat"}},[s._v("Tomcat")])]),t("li",[t("a",{attrs:{href:"#权限"}},[s._v("权限")])]),t("li",[t("a",{attrs:{href:"#文件复制-移动"}},[s._v("文件复制/移动")])]),t("li",[t("a",{attrs:{href:"#上传下载"}},[s._v("上传下载")])]),t("li",[t("a",{attrs:{href:"#压缩解压"}},[s._v("压缩解压")])]),t("li",[t("a",{attrs:{href:"#建立软链接"}},[s._v("建立软链接")])]),t("li",[t("a",{attrs:{href:"#更改环境变量"}},[s._v("更改环境变量")])]),t("li",[t("a",{attrs:{href:"#端口"}},[s._v("端口")])]),t("li",[t("a",{attrs:{href:"#禁ip"}},[s._v("禁IP")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),t("p",[s._v("自我备份："),t("a",{attrs:{href:"https://note.youdao.com/web/#/file/WEB9a8de91346f2b4dbb81dd5308c02352d/default/WEB07643efa9317a66ad0f564022e4aa0cb/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Xshell + Xftp（已破解）"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"切换目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换目录"}},[s._v("#")]),s._v(" 切换目录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 省")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/yx/server8.5.50/apache-tomcat-8.5.40/webapps/uapclient/WEB-INF/repository/application/plugins/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 总部")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/yx_zb/phantomjs "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#phantomjs路径")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[s._v("#")]),s._v(" Tomcat")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看tomcat是否启动，并查看tomcat端口号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" tomcat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -apn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7507")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" –pan "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" XXXX  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("此处XXXX为pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启tomcat")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/yx/server8.5.50/apache-tomcat-8.5.40/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" shutdown.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" startup.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有时关闭服务操作不成功，强制删掉后台进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7010")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实时查看tomcat运行日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/yx/server8.5.50/apache-tomcat-8.5.40/logs\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" catalina.out "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看日志，同样Ctrl+c退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清缓存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/yx/server8.5.50/apache-tomcat-8.5.40/work\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf Catalina\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[s._v("#")]),s._v(" 权限")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#给文件的所有者加上 x 权限,即可使用:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v("   u+x   文件\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看文件权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("  -l   文件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v("参考："),t("a",{attrs:{href:"https://blog.csdn.net/weixin_42711549/article/details/81156370",target:"_blank",rel:"noopener noreferrer"}},[s._v(" 白小黑.."),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"文件复制-移动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件复制-移动"}},[s._v("#")]),s._v(" 文件复制/移动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#复制文件夹 -r")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r a文件夹 b新文件夹\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将/test1目录下的file1复制到/test3 目录，并将文件名改为file2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /test1/file1 /test3/file2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"上传下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传下载"}},[s._v("#")]),s._v(" 上传下载")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lrzsz "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装")]),s._v("\nrz "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#上传")]),s._v("\nsz "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"压缩解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩解压"}},[s._v("#")]),s._v(" 压缩解压")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#压缩指定文件夹为 tar.bz2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@db phantomjs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -cjf echarts-convert.tar.bz2 echarts-convert/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压 tar.bz2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@db yx_zb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -xjvf echarts-convert.tar.bz2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"建立软链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立软链接"}},[s._v("#")]),s._v(" 建立软链接")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/PhantomJS/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/bin/phantomjs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"更改环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改环境变量"}},[s._v("#")]),s._v(" 更改环境变量")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启使环境变量生效")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端口"}},[s._v("#")]),s._v(" 端口")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ntlp   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前所有tcp端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ntulp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有80端口使用情况")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如开放80端口,ACCEPT为开启、DROP为关闭")]),s._v("\niptables -A INPUT -p tcp --dport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j ACCEPT "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当数据从外部进入服务器为目标端口")]),s._v("\niptables -A OUTPUT -p tcp --sport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j ACCEPT "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据从服务器出去")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables save "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保证重启服务器后也不会失效")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新防火墙")]),s._v("\n/sbin/iptables -L -n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看开放的端口")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"禁ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁ip"}},[s._v("#")]),s._v(" 禁IP")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iptables -A INPUT -p tcp -s "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.2 -j DROP\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);