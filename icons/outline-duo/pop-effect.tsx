import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PopEffect({
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
          d="m8.5,6.75c-.4564,0-.8117.0696-1.1663.2195-.0432.7903-.3443,1.5745-.8127,2.2361-.2718.3845-.606.7899-.9759,1.0591.0699,1.6792,1.0901,2.9853,2.9549,2.9853,1.9326,0,2.9684-1.4893,2.9684-3.25s-1.0359-3.25-2.9684-3.25Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.744,13.7699l-.946-.3099-.316-.9501c-.102-.3099-.609-.3099-.711,0l-.316.9501-.946.3099c-.153.05-.257.2-.257.36s.104.3.257.35l.946.3202.316.95c.051.15.194.25.355.25s.305-.1.355-.25l.316-.95.946-.3202c.153-.0499.257-.1899.257-.35s-.103-.3099-.256-.36Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.492,2.4924l-.946-.3099-.316-.9501c-.102-.3099-.609-.3099-.711,0l-.316.9501-.946.3099c-.153.05-.257.2-.257.36s.104.3.257.35l.946.3202.316.95c.051.15.194.25.355.25s.305-.1.355-.25l.316-.95.946-.3202c.153-.0499.257-.1899.257-.35s-.103-.3099-.256-.36Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m3.25,15.5c.414,0,.75-.34.75-.75s-.336-.75-.75-.75-.75.34-.75.75.336.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m1.4199,9.0563l1.9673-.3342c1.0907-.1853,1.8238-1.2209,1.636-2.3112h0c-.1872-1.0868-1.2187-1.817-2.306-1.6323l-1.9673.3342,1.0887,6.4082"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.0297,9.2214l1.9812.2383c1.0984.1321,2.0954-.6526,2.2251-1.7513h0c.1292-1.0952-.6524-2.0884-1.7474-2.2201l-1.9812-.2383-.7763,6.4535"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.6644,11.0044c.3239,1.2864,1.2873,2.2456,2.8356,2.2456,1.9326,0,2.9684-1.4893,2.9684-3.25s-1.0359-3.25-2.9684-3.25c-.1602,0-.3099.0164-.4553.0396"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PopEffect;
