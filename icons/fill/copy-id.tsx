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
        <path
          d="m5.25,13.5h-1c-1.5166,0-2.75-1.2334-2.75-2.75v-6.5c0-1.5166,1.2334-2.75,2.75-2.75h6.5c1.5166,0,2.75,1.2334,2.75,2.75v1c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1c0-.6895-.5605-1.25-1.25-1.25h-6.5c-.6895,0-1.25.5605-1.25,1.25v6.5c0,.6895.5605,1.25,1.25,1.25h1c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m11.8066,9.5h-.3042l-.002,2.5h.3052c.3823,0,.6934-.311.6934-.6929l.001-1.1133c0-.1851-.0718-.3594-.2031-.4907-.1309-.1309-.3052-.2031-.4902-.2031Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.75,4.5h-6.5c-1.5166,0-2.75,1.2334-2.75,2.75v6.5c0,1.5166,1.2334,2.75,2.75,2.75h6.5c1.5166,0,2.75-1.2334,2.75-2.75v-6.5c0-1.5166-1.2334-2.75-2.75-2.75Zm-4.75,8.25c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-4c0-.4141.3359-.75.75-.75s.75.3359.75.75v4Zm4.999-1.4419c-.001,1.2085-.9849,2.1919-2.1934,2.1919h-1.0557c-.1992,0-.3896-.0791-.5308-.2197-.1406-.1411-.2192-.332-.2192-.5308l.0029-4c.0005-.4141.3359-.7495.75-.7495h1.0537c.5859,0,1.1372.2285,1.5513.6431.4146.4146.6426.9658.6421,1.5518l-.001,1.1133Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CopyId;
