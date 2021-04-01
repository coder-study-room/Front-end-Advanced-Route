import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "科学前端进阶路",
    imageUrl: "img/road.svg",
    description: (
      <>带你把知识串成线，连成面，印在脑中，多方位知识面，分层巩固吸收。</>
    ),
  },
  {
    title: "合理解题方法论",
    imageUrl: "img/way.svg",
    description: (
      <>覆盖一线企业所需核心技术栈，带你整理、总结所学，化解职场疑虑。</>
    ),
  },
  {
    title: "高效前端面试经",
    imageUrl: "img/interview.svg",
    description: (
      <>带你理清“什么是必会题，什么是加分题”，一举冲击 BAT、宇宙条等大厂。</>
    ),
  },
];

const QUOTES = [
  {
    thumbnail: require("../data/reactor.png"),
    name: "Viktor",
    title: "前端👨‍💻‍",
    text: "如果这些内容可以帮到你，可以请我喝果汁 🍹",
    link: "https://lib.itdongdong.com/zhifubao.png",
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p style={{ textAlign: "center" }}>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, "margin-vert--md")}
            src={useBaseUrl("img/logo.svg")}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              开始学习吧！
            </Link>
          </div>
        </div>
      </header> */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Docusaurus with Keytar"
              className={styles.heroLogo}
              src={useBaseUrl("/img/logo.svg")}
            />
            
            <span className={styles.heroTitleTextHtml}>
              自学前端的<b>进阶</b>线路，
              <b>系统化</b>学习前端知识，从前端小白到<b>大神</b>
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={clsx("button button--primary")}
              to={useBaseUrl("docs/")}
            >
              开始学习吧！
            </Link>
            {/* 暂时不展示 */}
            {/* <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=coder-study-room&amp;repo=Front-end-Advanced-Route&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span> */}
          </div>
        </div>
      </div>
      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          有任何疑问，请关注公众号：
          <Link to="https://cdn.jsdelivr.net/gh/ViktorWong/imgbed/img/20210401170546.png">
            程序员自习室
          </Link>
          ，一起探讨交流学习！
        </div>
      </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className={clsx(styles.section, styles.sectionAlt)}>
        <div className="container">
          <div className="row">
            {QUOTES.map((quote) => (
              <div className="col" key={quote.name}>
                <div className="avatar avatar--vertical margin-bottom--sm">
                  <Image
                    alt={quote.name}
                    className="avatar__photo avatar__photo--xl"
                    img={quote.thumbnail}
                    style={{ overflow: "hidden" }}
                  />
                  <div className="avatar__intro padding-top--sm">
                    <h4 className="avatar__name">{quote.name}</h4>
                    <small className="avatar__subtitle">{quote.title}</small>
                  </div>
                </div>
                <p className="text--center text--italic padding-horiz--md">
                  <Link to={quote.link}>{quote.text}</Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
