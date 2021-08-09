import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>PromeQK - Panite</title>
            <meta name="description" content="素数大富豪(PrimeQK)というゲームについての記事一覧です" />
        </Helmet>

        <section id="banner" className="style2">
            <div className="inner">
                <header className="major">
                    <h1>Prime</h1>
                </header>
                <div className="content">
                    <p>素数大富豪(PrimeQK)というゲームについての記事一覧です</p>
                </div>
            </div>
        </section>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>素数大富豪ってどんなゲーム？</h2>
                    </header>
                    <p>有名なトランプゲームである「大富豪」に, 「素数」の要素をかけ合わせた戦略型対戦ゲーム. 素数だけでなく合成数も出せたり, 8切りと似た「グロタンカット」や, 革命と同様の「ラマヌジャン革命」など, 数学要素が詰まったゲームです. 2014年に開発され以来, 世界大会も行われるなど盛り上がりを見せている新時代の遊びです. 
                    </p>
                </div>
            </section>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>素数大富豪について詳しく知りたい方はこちら</h2>
                    </header>
                    <p>有名なトランプゲームである「大富豪」に, 「素数」の要素をかけ合わせた戦略型対戦ゲーム. 素数だけでなく合成数も出せたり, 8切りと似た「グロタンカット」や, 革命と同様の「ラマヌジャン革命」など, 数学要素が詰まったゲームです. 2014年に開発され以来, 世界大会も行われるなど盛り上がりを見せている新時代の遊びです. 
                    </p>
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
                                <h3>ルール</h3>
                            </header>
                            <p>素数大富豪の公式のルールやその他の情報についてまとめています</p>
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
                                <h3>戦略</h3>
                            </header>
                            <p>素数大富豪はただ素数を出すだけでなく, どのような素数を覚えるのか, どのような順で出すのかなど様々な戦略要素があります. 素数大富豪の最強プレイヤーたちが編み出してきた戦略やブログなどをまとめています. </p>
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
                                <h3>その他の素数ゲーム</h3>
                            </header>
                            <p>Panerが設立した東京理科大学素数大富豪同好会では, 素数大富豪だけでなく素数大富豪ダブルスや, 素数ポーカーなど新しい素数関連ゲームを考案してきました. また, 素数大富豪団体戦に関する案などをまとめています. </p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <div style={{textAlign: "center",marginTop:"40px"}}>
                <a href="\#" className="button" style={{width: "200px"}}>Home</a>
            </div>
        </div>

    </Layout>
)

export default Landing