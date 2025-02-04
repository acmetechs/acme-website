export default function Footer() {
    return (<footer className="py-12 bg-black border-t border-white/10">
        <div className="container px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold mb-4">产品</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>云服务器</li>
                        <li>对象存储</li>
                        <li>负载均衡</li>
                        <li>CDN加速</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">解决方案</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>金融科技</li>
                        <li>电子商务</li>
                        <li>人工智能</li>
                        <li>物联网</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">支持</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>帮助中心</li>
                        <li>API文档</li>
                        <li>社区</li>
                        <li>联系我们</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">公司</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>关于我们</li>
                        <li>新闻</li>
                        <li>博客</li>
                        <li>加入我们</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                <p>© 2025 xxxxxx. 保留所有权利。</p>
            </div>
        </div>
    </footer>)
}