import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Church({
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
          d="m14,17H4v-8.4575c0-.5928.3006-1.1453.7983-1.4673l3.7945-2.4546c.2478-.1603.5666-.1603.8144,0l3.7935,2.4541s.0005.0005.001.0005c.5.3242.7983.8735.7983,1.4692v8.4556Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m4,16.25v-6.3491l-2.2007,1.4238c-.5005.3237-.7993.873-.7993,1.4692v3.4561c0,.4141.3359.75.75.75h2.25v-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14,16.25v-1.25s0-5.0991,0-5.0991l2.2007,1.4238c.5005.3237.7993.873.7993,1.4692v3.4561c0,.4141-.3359.75-.75.75h-2.25s0-.75,0-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.25,17v-4c0-.4141.3359-.75.75-.75s.75.3359.75.75v4h-1.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m7,3.5h1.25v1.3423l.3428-.2217c.248-.1602.5664-.1602.8145,0l.3428.2217v-1.3423h1.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1.25V.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.25h-1.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Church;
