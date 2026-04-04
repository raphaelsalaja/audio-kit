import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TheatreMask({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m8.5,1.7734c-2.1877-.0063-4.3567.3176-6.25.9766v5.75c0,3.4517,2.7982,6.25,6.25,6.25V1.7734Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m4.5,7.5c-.1602,0-.3154-.0776-.4111-.2153-.1289-.1865-.1162-.4375.0312-.6099.4414-.5146.9092-.7749,1.3936-.7749h.0186c.4824.0063.9385.2705,1.3564.7852.1445.1787.1484.4341.0098.6172-.1396.1851-.3867.249-.5977.1562-.498-.2163-1.0166-.2129-1.6289.0112-.0566.0205-.1143.0303-.1719.0303Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.5,1.7734c-2.1877-.0063-4.3567.3176-6.25.9766v5.75c0,3.4517,2.7982,6.25,6.25,6.25V1.7734Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.5,10.0425c-.9764.0181-1.9056-.1624-2.8008-.5518-.21-.0908-.457-.0283-.5977.1558-.1387.1836-.1348.4385.0098.6177,1.0557,1.3018,2.168,1.9702,3.3057,1.9858h.041c.014,0,.028-.0029.042-.0029v-2.2046Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.4863,9h-.0186c-.4824-.0068-.9385-.271-1.3564-.7852-.1445-.1787-.1484-.4341-.0098-.6172.1396-.1846.3877-.2485.5977-.1562.4961.2158,1.0146.2124,1.6299-.0112.21-.0771.4512-.002.582.1851.1289.187.1162.4375-.0312.6104-.4414.5137-.9102.7744-1.3936.7744Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.2166,16.0054c2.616-.7466,4.5334-3.1499,4.5334-6.0054v-5.75c-1.3116-.4565-2.7592-.7412-4.25-.8777"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.8887,12.1853c-.6914-.8525-1.4074-1.428-2.1387-1.7317v2.051c.5288.0886,1.046.2346,1.5508.4541.21.0908.457.0283.5977-.1558.1387-.1836.1348-.4385-.0098-.6177Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TheatreMask;
