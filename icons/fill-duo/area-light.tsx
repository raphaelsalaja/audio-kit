import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AreaLight({
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
          d="m3,3c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.25Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m3.3423,7.9062c.1465.1465.3389.2197.5308.2197s.3838-.0732.5303-.2192l.8838-.8828c.293-.293.293-.7676.0005-1.061-.293-.293-.7681-.2925-1.061-.0005l-.8838.8828c-.293.293-.293.7676-.0005,1.061Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12.7129,5.9629c-.293.293-.293.7676,0,1.0605l.8828.8828c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-.8828-.8828c-.293-.293-.7676-.293-1.0605,0Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m16.25,1.5h-1.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m8.25,8.25v1.25c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.25c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9,6.5c2.3433,0,4.25-1.9067,4.25-4.25,0-.4141-.3359-.75-.75-.75h-7c-.4141,0-.75.3359-.75.75,0,2.3433,1.9067,4.25,4.25,4.25Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.6934,12.6616c-.248-.6948-.9106-1.1616-1.6479-1.1616H3.9546c-.7373,0-1.3999.4668-1.6475,1.1611l-.5366,1.5005c-.1909.5352-.1094,1.1318.2183,1.5967.3271.4644.8618.7417,1.4302.7417h11.1621c.5684,0,1.103-.2773,1.4302-.7417.3276-.4648.4092-1.0615.2178-1.5972l-.5356-1.4995Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default AreaLight;
