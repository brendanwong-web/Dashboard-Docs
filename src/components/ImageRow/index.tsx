import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Powerful Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam est, cum rerum eaque, enim ullam libero aspernatur iste dignissimos blanditiis cupiditate eius minus incidunt porro, sint quos quas laudantium. Voluptas.
      </>
    ),
  },
  {
    title: 'Easier Referencing',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium explicabo iure deleniti? Iste vero officia optio delectus corrupti debitis velit ex eaque adipisci omnis, quod voluptate iure qui? Natus!
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi velit, deserunt dignissimos quam atque quos officia placeat itaque tempore odit quaerat natus nihil neque iusto praesentium autem corrupti consectetur nulla.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h6">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
