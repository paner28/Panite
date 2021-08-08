import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/primegame.jpg'
import pic09 from '../assets/images/primehunter.jpg'
import pic10 from '../assets/images/quatron.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <section id="banner" className="style4">
                <div className="inner">
                    <header className="major">
                        <h1>Program</h1>
                    </header>
                    <div className="content">
                        <p>Panerが今迄に学んだ言語や制作物をまとめています</p>
                    </div>
                </div>
            </section>

        <div id="main">
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
                                <h3>素数ゲーム</h3>
                            </header>
                            <p>小さい素数を覚えたいという動機から作成されたゲームです。数字をタップして、素数であれば色が変わるといういたてシンプルなルールです。ステージをクリアしたときに1つの絵のようになるのが楽しいです。</p>
                            <ul className="actions">
                                <li><Link to="https://paner28.github.io/primegame/" className="button">Go Site</Link></li>
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
                                <h3>素数ハンター</h3>
                            </header>
                            <p>読んで字のごとく素数を探すアプリです。普段はコマンドプロンプトで実行していますが、それをウェブ上で行いたいという気持ちとBrythonで遊びたいということから作成しました。4つ子素数の探索機能など、まだまだ修正箇所はあります。</p>
                            <ul className="actions">
                                <li><Link to="https://paner28.github.io/primehunter/" className="button">Learn more</Link></li>
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
                                <h3>クワトろん</h3>
                            </header>
                            <p>Prime Hunterを作成したはいいものの、それを覚えるための物を作りたいと思い、4つ子素数に限って覚えるための物を作りました。strageを使うなど少しずつレベルアップしているはず。素数のリストが手入力なので要検討。</p>
                            <ul className="actions">
                                <li><Link to="https://paner28.github.io/quattron/" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing