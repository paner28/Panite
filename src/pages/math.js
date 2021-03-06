import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Math - Panite</title>
            <meta name="description" content="Panerがが今までに勉強してきた数学や今後勉強したいものについてまとめています" />
        </Helmet>

        <section id="banner" className="style3">
                <div className="inner">
                    <header className="major">
                        <h1>Mathmatics</h1>
                    </header>
                    <div className="content">
                        <p>Panerがが今までに勉強してきた数学や今後勉強したいものについてまとめています</p>
                    </div>
                </div>
            </section>

        <div style={{textAlign: "center", padding: "5%"}} id="main">
            <h2>TextBook List</h2>
            <div>✻</div>
            <p class="description">過去に学んだ内容と使用したテキストを記録しています</p>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3  style={{textColor: "red"}}>線形代数</h3>
                    </header>
                    <p>「線形代数学講義(木田雅成)」と「大学院への線形代数詳解 大学院への数学」</p>
                </div>
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3  style={{textColor: "red"}}>代数</h3>
                    </header>
                    <p>「代数系入門(松坂和夫 数学入門シリーズ3)」と「代数学1 群と環(桂利行)」と「可換環論の様相(大学数学 スポットライト・シリーズ)」</p>
                </div>
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>解析学</h3>
                    </header>
                    <p>「微分積分学(宮島静雄)」</p>
                </div>
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>位相と集合</h3>
                    </header>
                    <p>「集合・論理と位相(新井敏康)」と「論理と集合(内田伏一)」</p>
                </div>
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>幾何学</h3>
                    </header>
                    <p>「理工系の基礎数学Ⅱ」と「ホモロジー入門(坪井俊)」</p>
                </div>
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>離散数学</h3>
                    </header>
                    <p>「東京大学工学教程基礎系数学離散数学(牧野和久)」と「情報の論理数学入門 ブール代数から述語論理まで(高濱徹行)」</p>
                </div>
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3 class="text-Success">グラフ理論</h3>
                    </header>
                    <p>勉強内容：グラフ理論の基本的な内容から、他分野と融合した代数的グラフ理論や位相幾何学的グラフ理論</p>
                    <p>使用テキスト：「グラフ理論(土屋守正)」と「グラフ理論(R.ディーステル)」</p>
                </div>
            </section>
        </div>
        <div style={{textAlign: "center",marginTop:"40px"}}>
            <a href="\#" className="button" style={{width: "200px"}}>Home</a>
        </div>
    </Layout>
)

export default Landing