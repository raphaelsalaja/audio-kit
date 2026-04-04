import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InvoiceIn({
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
          d="m15.1963,10.8857c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605c.8105.8105.8105,2.1289,0,2.9395s-2.1289.8105-2.9395,0l-1.8857-1.8857h2.1895c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-4c-.4141,0-.75.3359-.75.75v4c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2.1895l1.8857,1.8857c.6973.6978,1.6143,1.0464,2.5303,1.0464s1.833-.3486,2.5303-1.0464c1.3955-1.395,1.3955-3.6655,0-5.0605Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m5.25,12.25c0-1.2407,1.0098-2.25,2.25-2.25h4c.4365,0,.8438.125,1.1895.3408.1006-.1851.2295-.3594.3857-.5156.4248-.4253.9902-.6592,1.5908-.6592.2905,0,.5719.0571.834.1619V3.75c0-1.5166-1.2334-2.75-2.75-2.75h-7.5c-1.5166,0-2.75,1.2334-2.75,2.75v12.5c0,.2686.1436.5166.376.6504.2344.1343.5195.1328.752-.0024l1.6221-.946v-3.7019Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m11.25,4h.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,7h.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.25,4h2.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.25,7h2.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default InvoiceIn;
