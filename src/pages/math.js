import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
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

        <div id="main">
            <h2>TextBook List</h2>
            <div class="separator separator-danger">✻</div>
            <p class="description">過去に学んだ内容と使用したテキストを記録しています</p>
            <div class="list-inline">
                <li><h3 class="text-info">線形代数</h3></li>
                <li><h5>「線形代数学講義(木田雅成)」と「大学院への線形代数詳解 大学院への数学」</h5></li>
            </div>
            <div class="list-inline">
                <li><h3 class="text-danger">代数</h3></li>
                <li><h5>「代数系入門(松坂和夫 数学入門シリーズ3)」と「代数学1 群と環(桂利行)」と「可換環論の様相(大学数学 スポットライト・シリーズ)」</h5></li>
            </div>
            <div class="list-inline">
                <li><h3 class="text-warning">解析学</h3></li>
                <li><h5>「微分積分学(宮島静雄)」</h5></li>
            </div>
            <div class="list-inline">
                <li><h3 class="text-danger">位相と集合</h3></li>
                <li><h5>「集合・論理と位相(新井敏康)」と「論理と集合(内田伏一)」</h5></li>
            </div>
            <div class="list-inline">
                <li><h3 class="text-gray">幾何学</h3></li>
                <li><h5>「理工系の基礎数学Ⅱ」と「ホモロジー入門(坪井俊)」</h5></li>
            </div>
            <div class="list-inline">
                <li><h3 class="text-primary">離散数学</h3></li>
                <li><h5>「東京大学工学教程基礎系数学離散数学(牧野和久)」と「情報の論理数学入門 ブール代数から述語論理まで(高濱徹行)」</h5></li>
            </div>
            <div class="list-inline">
                <li><h3 class="text-Success">グラフ理論</h3></li>
                <li><h5>「グラフ理論(土屋守正)」と「グラフ理論(R.ディーステル)」</h5></li>
            </div>

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sed amet aliquam</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Orci maecenas</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing