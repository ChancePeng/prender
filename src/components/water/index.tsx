import React, { FC, SVGTextElementAttributes } from 'react';

interface WaterProps extends SVGTextElementAttributes<SVGTextElement> {
  text: string;
  width?: number;
  height?: number;
}

const Water: FC<WaterProps> = (props) => {
  const { text, width = 200, height = 200, ...fields } = props;
  const defineProps = (props: SVGTextElementAttributes<SVGTextElement>) => {
    const {
      x = width / 2,
      y = height / 2,
      transform = `rotate(20)`,
      dominantBaseline = 'middle',
      fontSize = 18,
      fill = '#e2e2e2',
      textAnchor = 'middle',
      ...fields
    } = props;
    return {
      fontSize,
      fill,
      x,
      y,
      transform,
      dominantBaseline,
      textAnchor,
      ...fields,
    };
  };

  const _props = defineProps(fields);
  if (!text) {
    return <></>;
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <text {..._props}>{text}</text>
    </svg>
  );
};

export default Water;

export { WaterProps };
