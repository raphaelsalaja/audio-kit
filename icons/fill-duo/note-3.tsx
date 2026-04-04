import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Note3({
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
          d="m11.8662,15.1943l3.3281-3.3281c.5007-.5007.778-1.1614.798-1.8662h-4.2423c-.9648,0-1.75.7852-1.75,1.75v4.2424c.7046-.0198,1.3655-.2974,1.8662-.7981Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10,11.75c0-.9648.7852-1.75,1.75-1.75h4.2423c.0007-.0266.0077-.0518.0077-.0786v-5.1714c0-1.5166-1.2334-2.75-2.75-2.75H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h5.1719c.0266,0,.0517-.0068.0781-.0076v-4.2424Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m7.25,12.5h-1.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8,9.75h-2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.25c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.25,7h-6.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h6.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Note3;
