import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardHeart({
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
          d="m12.25,8h4.75v-2.25c0-1.519-1.231-2.75-2.75-2.75H3.75c-1.519,0-2.75,1.231-2.75,2.75v6.5c0,1.519,1.231,2.75,2.75,2.75h5.8002c-.6105-.9019-1.0502-1.9917-1.0502-3.2769-.0068-2.0376,1.6436-3.71,3.6777-3.7231.0244.0002.0723,0,.0723,0Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path d="m17,6.5H1v1.5h16v-1.5Z" fill={fill} strokeWidth="0" />
        <path
          d="m3.5,11.25c0-.414.336-.75.75-.75h3c.414,0,.75.336.75.75s-.336.75-.75.75h-3c-.414,0-.75-.336-.75-.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m13.731,16.683c.17.089.368.089.538,0,.897-.471,3.731-2.181,3.731-4.96.004-1.221-.974-2.215-2.187-2.223-.729.01-1.408.38-1.813.991-.405-.611-1.084-.981-1.813-.991-1.213.008-2.191,1.002-2.187,2.223,0,2.779,2.834,4.489,3.731,4.96Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CreditCardHeart;
