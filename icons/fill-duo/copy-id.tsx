import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CopyId({
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
        <rect
          height="12"
          width="12"
          fill={secondaryfill}
          opacity=".4"
          rx="2.75"
          ry="2.75"
          strokeWidth="0"
          x="4.5"
          y="4.5"
        />
        <path
          d="m4.5,7.25c0-1.5166,1.2334-2.75,2.75-2.75h6.25v-.25c0-1.5166-1.2334-2.75-2.75-2.75h-6.5c-1.5166,0-2.75,1.2334-2.75,2.75v6.5c0,1.5166,1.2334,2.75,2.75,2.75h.25v-6.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.8057,13.5h-1.0557c-.1992,0-.3896-.0791-.5308-.2197-.1406-.1411-.2192-.332-.2192-.5308l.0029-4c.0005-.4141.3359-.7495.75-.7495h1.0537c.5859,0,1.1372.2285,1.5513.6431.4146.4146.6426.9658.6421,1.5518l-.001,1.1133c-.001,1.2085-.9849,2.1919-2.1934,2.1919Zm-.3052-1.5h.3052c.3823,0,.6934-.311.6934-.6929l.001-1.1133c0-.1851-.0718-.3594-.2031-.4907-.1309-.1309-.3052-.2031-.4902-.2031h-.3042l-.002,2.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.25,13.5c-.4141,0-.75-.3359-.75-.75v-4c0-.4141.3359-.75.75-.75s.75.3359.75.75v4c0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CopyId;
