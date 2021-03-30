import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
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
      <>
        带你理清“什么是必会题，什么是加分题”，一举冲击
        BAT、宇宙条等大厂。
      </>
    ),
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
      <p>{description}</p>
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
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
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
      </header>
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
    </Layout>
  );
}
